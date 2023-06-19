import { CreateNewMessage } from '@/features/messages/create';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/shared/store';
import { useEffect, useState } from 'react';
import { addMessage } from '@/widgets/chat-field/model.ts';

export const MessageField = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const messages = useSelector((state: RootState) => state.chat.comments);
  useEffect(() => {
    const message = localStorage.getItem('message');
    if (message !== null) {
      setValue(message);
    }
  }, []);
  if (messages.length === 1) return <div></div>;
  return (
    <div>
      <textarea
        value={value}
        onChange={event => {
          localStorage.setItem('message', event.target.value);
          setValue(event.target.value);
        }}
      />
      <CreateNewMessage
        onClick={() => {
          if (value !== '') {
            dispatch(
              addMessage({
                id: Math.random(),
                postId: Math.random(),
                user: {
                  id: Math.random(),
                  username: 'User',
                },
                body: value,
              }),
            );
            setValue('');
            localStorage.clear();
          }
        }}
      />
    </div>
  );
};
