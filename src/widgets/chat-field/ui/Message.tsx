//import features
import { DeleteMessage } from '@/features/messages/delete';

interface MessageProps {
  user: string;
  message: string;
  messageId: number;
  onClick: (messageId: number) => void;
}

export const Message = ({
  user,
  message,
  messageId,
  onClick,
}: MessageProps) => {
  return (
    <div>
      <h1>{user}</h1>
      <span>{message}</span>
      <DeleteMessage onClick={() => onClick(messageId)} />
    </div>
  );
};
