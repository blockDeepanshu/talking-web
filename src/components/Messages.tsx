"use client";

import { useEffect, useRef } from "react";
import { Message as TMessage } from "ai/react";
import Message from "./Message";
import { MessageSquare } from "lucide-react";

interface MessagesProps {
  messages: TMessage[];
  status: "submitted" | "streaming" | "ready" | "error";
}

export default function Messages({ messages, status }: MessagesProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
    }
  }, [messages.length, status]); // scroll again when loading finishes

  return (
    <div
      ref={containerRef}
      className="flex flex-1 flex-col overflow-y-auto max-h-[calc(100vh-110px)] scroll-smooth pb-[10px]"
    >
      {messages.length ? (
        <>
          {messages.map((message, i) => (
            <Message
              key={i}
              content={message.content}
              isUserMessage={message.role === "user"}
            />
          ))}

          {/* shimmer while AI is replying */}
          {status === "submitted" && (
            <Message
              key="loading"
              content=""
              isUserMessage={false}
              isLoading={true}
            />
          )}
        </>
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center gap-2">
          <MessageSquare className="size-8 text-blue-500" />
          <h3 className="text-xl font-semibold text-white">{`You're all set`}</h3>
          <p className="text-sm text-zinc-500">
            Ask your first question to get started.
          </p>
        </div>
      )}
    </div>
  );
}
