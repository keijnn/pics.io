interface DeleteMessageProps {
  onClick: () => void;
}

export const DeleteMessage = ({ onClick }: DeleteMessageProps) => {
  return <button onClick={onClick}>X</button>;
};
