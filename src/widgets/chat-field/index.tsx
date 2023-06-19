//import modules
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/shared/store';

//import ui
import { Message } from '@/widgets/chat-field/ui/Message.tsx';

//import models
import { getMessages, deleteMessage } from '@/widgets/chat-field/model.ts';

export const ChatField = () => {
  const messages = useSelector((state: RootState) => state.chat.comments);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getMessages());
  }, []);

  const chat = messages.map(message => {
    return (
      <Message
        key={message.id}
        user={message.user.username}
        message={message.body}
        messageId={message.postId}
        onClick={() => dispatch(deleteMessage(message.postId))}
      />
    );
  });

  return <div>{chat.length > 1 ? chat : null}</div>;
};
