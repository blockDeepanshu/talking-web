"use client";

import { useChat, Message } from "@ai-sdk/react";
import Messages from "./Messages";
import ChatInput from "./ChatInput";

function ChatWrapper({
  sessionId,
  initialMessages,
}: {
  sessionId: string;
  initialMessages: Message[];
}) {
  const { messages, handleInputChange, input, handleSubmit, setInput, status } =
    useChat({
      api: "/api/chat-stream",
      body: { sessionId },
      initialMessages,
    });

  return (
    <div className="relative min-h-full bg-zinc-900 flex divide-y divide-zinc-700 flex-col justify-between gap-2">
      <div className="flex-1 text-white bg-zinc-800 justify-between flex flex-col">
        <Messages messages={messages} status={status} />
      </div>

      <ChatInput
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        setInput={setInput}
        status={status}
      />
    </div>
  );
}

export default ChatWrapper;
