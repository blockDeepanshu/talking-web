# Talking Web

A RAG-powered chat application that allows users to converse with any website by simply pasting its URL. Built with Next.js, Upstash (Redis & Vector DB), and OpenAI.

---

## 🚀 Features

- **Instant Chat**: Paste any website URL to start a chat.
- **No Setup Needed**: Zero installs or manual indexing — it works out of the box.
- **AI-Powered RAG**: Retrieves relevant content from the target site using Redis vector search and generates context-aware responses.
- **Serverless & Scalable**: Hosted as a Next.js app with Upstash managed Redis and vector stores.

---

## 📦 Tech Stack

- **Next.js** (App Router)
- **TypeScript**
- **Upstash Redis** and **Upstash Vector** for storing embeddings and performing similarity search
- **OpenAI** (GPT-based models) for embedding generation and chat completion
- **Lucide React** for icons
- **Tailwind CSS** for styling

---

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/talking-web.git
cd talking-web
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Variables

Create a .env in the project root with the following:

```bash
# OpenAI
OPENAI_API_KEY=your-openai-api-key

# Upstash Redis (for vector store & session data)
UPSTASH_REDIS_REST_URL=https://us1-upstash-redis.upstash.io
UPSTASH_REDIS_REST_TOKEN=your-redis-token

# Upstash Vector (for embeddings)
UPSTASH_VECTOR_REST_URL=https://us1-upstash-vector.upstash.io
UPSTASH_VECTOR_REST_TOKEN=your-vector-token
```

### 4. Run locally

```bash
npm run dev
# or
yarn dev
```

Open http://localhost:3000 in your browser.

## 🧭 Project Structure

```bash
├── app                # Next.js App Router pages
│   ├── api/chat-stream.ts  # RAG chat API route
│   ├── [url]        # Dynamic page for each chat session
│   └── layout.tsx
├── components         # Reusable UI components (Messages, ChatInput, etc.)
├── lib                # Utils and API clients (OpenAI, Upstash config)
├── public             # Static assets
├── README.md
└── package.json
```

## 📝 Usage

1. On the landing page, paste a website URL (e.g., https://en.wikipedia.org/wiki/Next.js).

2. Click Chat Now.

3. Converse with the site’s content in real time.

4. Use the Home icon in the chat interface to return.

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.
