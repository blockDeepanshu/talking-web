import { openai, RAGChat } from "@upstash/rag-chat";
import { redis } from "./redis";

export const ragChat = new RAGChat({
  model: openai("gpt-4o-mini"),
  redis: redis,
});
