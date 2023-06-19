//import modules
import { configureStore } from '@reduxjs/toolkit';

//import reducers
import chatReducer from '@/widgets/chat-field/model.ts';

export const store = configureStore({
  reducer: {
    chat: chatReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
