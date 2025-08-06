"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ResultContent() {
  const searchParams = useSearchParams();
  const [lyrics, setLyrics] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLyrics() {
      setLoading(true);
      const params = Object.fromEntries(searchParams.entries());
      const res = await fetch("/api/generateLyrics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params),
      });
      const data = await res.json();
      setLyrics(data.lyrics);
      setLoading(false);
    }
    fetchLyrics();
    // eslint-disable-next-line
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] gap-8">
      <h2 className="text-2xl font-bold mb-4">Your Country Song Lyrics</h2>
      {loading ? (
        <div className="text-lg text-gray-500">Generating your lyrics...</div>
      ) : (
        <pre className="whitespace-pre-wrap bg-gray-100 p-6 rounded shadow max-w-2xl text-lg text-black">{lyrics}</pre>
      )}
    </main>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={<div className="flex flex-col items-center justify-center min-h-[60vh] gap-8"><div className="text-lg text-gray-500">Loading...</div></div>}>
      <ResultContent />
    </Suspense>
  );
} 