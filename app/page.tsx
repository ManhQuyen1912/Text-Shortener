import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-lg py-24 space-y-24 min-h-screen flex flex-col justify-center">
      <div className="space-y-6 w-full text-center">
        <h1 className="text-6xl font-bold">Shortener AI</h1>
        <p>Unlock the power of text summarization with AI.</p>
      </div>
    </div>
  );
}
