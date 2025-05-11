import ChatWrapper from "@/components/ChatWrapper";
import { ragChat } from "@/lib/rag-chat";
import { redis } from "@/lib/redis";
import { cookies } from "next/headers";

const reconstructUrl = ({ url }: { url: string[] }) => {
  const decodedComponents = url.map((component) =>
    decodeURIComponent(component)
  );

  return decodedComponents.join("/");
};

async function Page({ params }: { params: { url?: string[] } }) {
  const { url } = await params;

  const reconstructedUrl = reconstructUrl({ url: url as string[] });

  const isAlreadyStored = await redis.sismember(
    "indexed-urls",
    reconstructedUrl
  );
  const sessionCookie = (await cookies()).get("sessionId")?.value;
  const sessionId = (reconstructedUrl + "--" + sessionCookie).replace(
    /\//g,
    ""
  );

  const initialMessages = await ragChat.history.getMessages({
    amount: 10,
    sessionId,
  });

  if (!isAlreadyStored) {
    await ragChat.context.add({
      type: "html",
      source: reconstructedUrl,
    });

    await redis.sadd("indexed-urls", reconstructedUrl);
  }

  return (
    <ChatWrapper sessionId={sessionId} initialMessages={initialMessages} />
  );
}

export default Page;
