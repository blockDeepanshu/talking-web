"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const LandingPage = () => {
  const [websiteUrl, setWebsiteUrl] = useState<string>("");
  const [redirecting, setRedirection] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!websiteUrl) return;
    setRedirection(true);
    const clean = websiteUrl.trim();

    const newPath = `/${clean}`;

    router.push(newPath);
  };
  return (
    <div className="bg-gradient-to-b from-zinc-900 to-black min-h-screen text-white">
      {/* Hero Section */}
      <header className="pt-24 pb-32 relative overflow-visible">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500">
            Talk to Any Page by URL
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            Converse with websites effortlessly. No installs, just paste & chat.
          </p>
          {/* URL Input Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 my-2"
          >
            <input
              type="url"
              placeholder="Enter website URL"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              className="w-full sm:w-80 px-4 py-3 rounded-2xl bg-zinc-800 placeholder-zinc-500 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button
              type="submit"
              disabled={redirecting}
              className="w-full cursor-pointer sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-2xl text-white font-semibold shadow-lg transition"
            >
              {redirecting ? "Redirecting..." : "Chat Now"}
            </button>
          </form>
        </div>
        {/* Subtle Background Shapes */}
        <div className="absolute -left-16 top-1/3 w-48 h-48 bg-zinc-700 rounded-full opacity-20" />
        <div className="absolute right-16 -bottom-16 w-72 h-72 bg-zinc-600 rounded-full opacity-10" />
      </header>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "💬",
              title: "Instant Chat",
              desc: "Start a conversation with any website instantly by pasting its URL.",
            },
            {
              icon: "⚙️",
              title: "No Setup",
              desc: "No installs or API keys needed—works out of the box.",
            },
            {
              icon: "🚀",
              title: "AI Powered",
              desc: "Leverages state-of-the-art language models for accurate context.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-zinc-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 leading-snug">
                {feature.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 py-6 text-center">
        <p className="text-zinc-500">
          &copy; {new Date().getFullYear()} Talking Web. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
