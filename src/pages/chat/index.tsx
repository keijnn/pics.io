//import widgets
import { ChatField } from '@/widgets/chat-field';
import { MessageField } from '@/widgets/message-field';

//import styles
import './index.css';

export const ChatPage = () => {
  return (
    <div className="chat">
      <ChatField />
      <MessageField />
    </div>
  );
};
