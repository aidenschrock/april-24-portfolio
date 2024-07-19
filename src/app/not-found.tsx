import Link from "next/link";
import "./globals.css";
export default function NotFound() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center gap-3 ">
      <h2 className="font-dirty text-5xl tracking-wider sm:text-7xl md:text-8xl lg:text-9xl">
        Not Found
      </h2>
      <p className="font-oxygen text-xl sm:text-2xl lg:text-3xl">
        Lost your way?
      </p>

      <Link
        className="font-oxygenBold mt-20 border-2 border-dotted border-[#961b46] px-12 py-4 text-2xl hover:bg-[#961b46] sm:text-3xl"
        href="/"
      >
        Return Home
      </Link>
    </main>
  );
}
