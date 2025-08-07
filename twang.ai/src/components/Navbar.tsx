import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-8 bg-white shadow-md mb-8">
      <div className="text-xl font-bold text-blue-700">twang.ai</div>
      <div className="flex gap-6">
        <Link href="/" className="hover:underline text-black">Home</Link>
        <Link href="/quiz/" className="hover:underline text-black">Quiz</Link>
      </div>
    </nav>
  );
} 