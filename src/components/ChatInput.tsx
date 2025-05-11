"use client";

import { Button } from "@heroui/react";

import { LoaderCircleIcon, Send } from "lucide-react";
import { type useChat } from "@ai-sdk/react";

type SetInput = ReturnType<typeof useChat>["setInput"];
type HandleInputChange = ReturnType<typeof useChat>["handleInputChange"];
type HandleSubmit = ReturnType<typeof useChat>["handleSubmit"];

interface ChatInputProps {
  input: string;
  setInput: SetInput;
  handleInputChange: HandleInputChange;
  handleSubmit: HandleSubmit;
  status: "submitted" | "streaming" | "ready" | "error";
}

export default function ChatInput({
  input,
  setInput,
  handleInputChange,
  handleSubmit,
  status,
}: ChatInputProps) {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-zinc-900 p-4 shadow-lg z-10">
      <form
        onSubmit={handleSubmit}
        className="relative mx-auto flex items-end gap-3 max-w-3xl pb-4 w-full"
      >
        <textarea
          placeholder="Type your message…"
          autoFocus
          value={input}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit();
              setInput("");
            }
          }}
          className="flex-1
            resize-none
            bg-zinc-800
            placeholder-zinc-500
            text-base
            rounded-2xl
            p-3
            pr-16
            border-2                
            border-transparent      
            focus:border-blue-500   
            focus:border-opacity-80
            focus:outline-none "
        />

        <Button
          size="md"
          type="submit"
          disabled={status !== "ready"}
          className="
            bg-zinc-700
            hover:bg-zinc-600
            p-3
            rounded-full
            shadow-inner
            transition
            cursor-pointer
          "
        >
          {status !== "ready" ? (
            <LoaderCircleIcon className="w-5 h-5 animate-spin " />
          ) : (
            <Send className="w-5 h-5" />
          )}
        </Button>
      </form>
    </div>
  );
}
