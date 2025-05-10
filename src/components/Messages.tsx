import { Message as TMessage } from "ai/react";
import Message from "./Message";

interface MessagesProps {
  messages: TMessage[];
}

function Messages({ messages }: MessagesProps) {
  return (
    <div className="flex max-h-[clac(100vh-3.5rem-7rem)] flex-1 flex-col overflow-y-auto">
      ?
      {messages ? (
        messages.map((message, i) => (
          <Message
            key={i}
            content={message.content}
            isUserMessage={message.role === "user"}
          />
        ))
      ) : (
        <></>
      )}
    </div>
  );
}

export default Messages;
