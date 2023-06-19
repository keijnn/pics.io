//import modules
import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getMessages = createAsyncThunk(
  'messages/getMessages',
  async (): Promise<{
    comments: {
      id: number;
      postId: number;
      user: { id: number; username: string };
      body: string;
    }[];
  }> => {
    const url = 'https://dummyjson.com/comments';
    return await fetch(url).then(data => data.json());
  },
);

export interface MessagesState {
  comments: {
    id: number;
    postId: number;
    user: { id: number; username: string };
    body: string;
  }[];
}

const initialState: MessagesState = {
  comments: [
    {
      id: 0,
      postId: 0,
      user: { id: 0, username: '' },
      body: '',
    },
  ],
};
export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    deleteMessage: (state, action: PayloadAction<number>) => {
      console.log(action.payload);
      const newComments = state.comments.filter(
        message => message.postId !== action.payload,
      );
      return { ...state, comments: newComments };
    },
    addMessage: (
      state,
      action: PayloadAction<{
        id: number;
        postId: number;
        user: { id: number; username: string };
        body: string;
      }>,
    ) => {
      state.comments.push(action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(getMessages.fulfilled, (state, action) => {
      return { ...state, comments: action.payload.comments };
    });
  },
});

export const { addMessage, deleteMessage } = chatSlice.actions;
export default chatSlice.reducer;
