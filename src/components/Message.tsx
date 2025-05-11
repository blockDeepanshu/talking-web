// Message.tsx
"use client";

import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";

interface MessageProps {
  content: string;
  isUserMessage: boolean;
  isLoading?: boolean; // ← new
}

export default function Message({
  content,
  isUserMessage,
  isLoading = false,
}: MessageProps) {
  return (
    <div
      className={cn({
        "bg-zinc-800": isUserMessage,
        "bg-zinc-900/25": !isUserMessage,
      })}
    >
      <div className="p-6">
        <div className="mx-auto flex max-w-3xl items-start gap-2.5">
          {/* avatar */}
          <div
            className={cn(
              "flex size-10 shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900",
              { "bg-blue-950 border-blue-700 text-zinc-200": isUserMessage }
            )}
          >
            {isUserMessage ? (
              <User className="size-5" />
            ) : (
              <Bot className="size-5 text-white" />
            )}
          </div>

          {/* body */}
          <div className="ml-6 flex w-full flex-col">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              {isUserMessage ? "You" : "Website"}
            </span>

            {/* ① shimmer while loading, ② text when done */}
            {isLoading ? (
              <div className="mt-2 flex flex-col space-y-2">
                {/* three bars imitate paragraph */}
                <div className="h-3 w-5/6 animate-pulse rounded bg-zinc-700" />
                <div className="h-3 w-3/4 animate-pulse rounded bg-zinc-700" />
                <div className="h-3 w-4/6 animate-pulse rounded bg-zinc-700" />
              </div>
            ) : (
              <p className="py-2.5 text-sm font-normal text-gray-900 dark:text-white">
                {content}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
