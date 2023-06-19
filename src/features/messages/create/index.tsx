interface CreateNewMessageProps {
  onClick: () => void;
}

export const CreateNewMessage = ({ onClick }: CreateNewMessageProps) => {
  return <button onClick={onClick}>Send</button>;
};
