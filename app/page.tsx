import Image from "next/image";
import { useState } from "react";

export default function Home() {
  // 1. Storing the text that the user will enter in the textarea -> String
  const [text, setText] = useState("");
  // 2. Saving the summary that the AI API will send us -> String
  const [summary, setSummary] = useState("");
  // 3. For storing the current state of the app -> Boolean
  const [loading, setLoading] = useState(false);
  return (
    <div className="mx-auto w-full max-w-lg py-24 space-y-24 min-h-screen flex flex-col justify-center">
      <div className="space-y-6 w-full text-center">
        <h1 className="text-6xl font-bold">Shortener AI</h1>
        <p>Unlock the power of text summarization with AI.</p>
      </div>
    </div>
  );
}
