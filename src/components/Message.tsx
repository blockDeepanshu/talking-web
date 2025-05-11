"use client";

import { cn } from "@/lib/utils";
import { User2 as UserIcon, Bot as BotIcon } from "lucide-react";

interface MessageProps {
  content: string;
  isUserMessage: boolean;
  isLoading?: boolean;
}

export default function Message({
  content,
  isUserMessage,
  isLoading = false,
}: MessageProps) {
  return (
    <div
      className={cn("mb-4 mx-4 rounded-2xl font-sans", {
        "bg-zinc-900/25": isUserMessage,
        "bg-zinc-800": !isUserMessage,
      })}
    >
      <div className="p-4">
        <div className="flex max-w-3xl mx-auto items-start gap-3">
          <div
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full border-2",
              {
                "bg-indigo-600 border-indigo-400 text-white": isUserMessage,
                "bg-zinc-700 border-zinc-600 text-zinc-300": !isUserMessage,
              }
            )}
          >
            {isUserMessage ? <UserIcon size={20} /> : <BotIcon size={20} />}
          </div>

          <div className="flex-1">
            <span className="text-sm font-semibold font-serif bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500">
              {isUserMessage ? "You" : "Website"}
            </span>

            {isLoading ? (
              <div className="mt-2 space-y-2">
                <div
                  className={cn(
                    "h-3 rounded-full animate-pulse",
                    isUserMessage ? "bg-indigo-600 w-5/6" : "bg-zinc-700 w-4/6"
                  )}
                />
                <div
                  className={cn(
                    "h-3 rounded-full animate-pulse",
                    isUserMessage ? "bg-indigo-600 w-3/4" : "bg-zinc-700 w-2/5"
                  )}
                />
                <div
                  className={cn(
                    "h-3 rounded-full animate-pulse",
                    isUserMessage ? "bg-indigo-600 w-4/6" : "bg-zinc-700 w-3/6"
                  )}
                />
              </div>
            ) : (
              <p
                className={cn(
                  "mt-1 text-sm leading-relaxed  font-[cursive]",
                  isUserMessage ? "text-white" : "text-zinc-300"
                )}
              >
                {content}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
