import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] gap-8 text-center">
      <h1 className="text-4xl font-bold text-blue-700">Welcome to twang.ai</h1>
      <p className="text-lg max-w-xl">
        Generate custom country music lyrics with the help of AI! Take a quick quiz about your mood, song speed, tempo, and more, and let our AI craft the perfect country song for you.
      </p>
      <a
        href="/quiz"
        className="mt-4 px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold shadow hover:bg-blue-700 transition"
      >
        Start the Quiz
      </a>
    </main>
  );
}
