"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function QuizPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    mood: "happy",
    speed: "medium",
    tempo: "moderate",
    theme: "love",
    story: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams(form as Record<string, string>).toString();
    router.push(`/result?${params}`);
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] gap-8 text-black">
      <h2 className="text-2xl font-bold mb-4">Country Song Quiz</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md bg-white p-8 rounded shadow text-black">
        <label className="flex flex-col gap-1">
          Mood
          <select name="mood" value={form.mood} onChange={handleChange} className="border rounded p-2">
            <option value="happy">Happy</option>
            <option value="sad">Sad</option>
            <option value="nostalgic">Nostalgic</option>
            <option value="hopeful">Hopeful</option>
          </select>
        </label>
        <label className="flex flex-col gap-1">
          Speed
          <select name="speed" value={form.speed} onChange={handleChange} className="border rounded p-2">
            <option value="slow">Slow</option>
            <option value="medium">Medium</option>
            <option value="fast">Fast</option>
          </select>
        </label>
        <label className="flex flex-col gap-1">
          Tempo
          <select name="tempo" value={form.tempo} onChange={handleChange} className="border rounded p-2">
            <option value="calm">Calm</option>
            <option value="moderate">Moderate</option>
            <option value="energetic">Energetic</option>
          </select>
        </label>
        <label className="flex flex-col gap-1">
          Theme
          <select name="theme" value={form.theme} onChange={handleChange} className="border rounded p-2">
            <option value="love">Love</option>
            <option value="heartbreak">Heartbreak</option>
            <option value="adventure">Adventure</option>
            <option value="family">Family</option>
            <option value="party">Party</option>
          </select>
        </label>
        <label className="flex flex-col gap-1">
          Story (optional)
          <textarea name="story" value={form.story} onChange={handleChange} className="border rounded p-2" placeholder="Share a story or details for inspiration..." />
        </label>
        <button type="submit" className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">
          Generate Lyrics
        </button>
      </form>
    </main>
  );
} 