interface MessageProps {
  content: string;
  isUserMessage: boolean;
}

function Message({ content, isUserMessage }: MessageProps) {
  return <div>Message</div>;
}

export default Message;
