"use client";
import ProjectStepper from "@/components/ProjectStepper";
import Link from "next/link";

export default function Spongebob() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-screen-md">
        <Link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-16 stroke-slate-300 pl-6 pt-6 hover:stroke-white  lg:w-20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </Link>
      </div>
      <div className="mx-6 mb-12 mt-10 max-w-screen-sm font-overpass">
        <img
          className="rounded"
          alt="Bikini Bottom Fishmoji Factory"
          src="fishmoji.png"
        />
        <div className="mt-10 flex flex-col items-center justify-center text-left">
          <h2 className="w-full">
            <b className="text-lg">agency:</b>{" "}
            <a
              className="text-rose-200 hover:text-white"
              href="https://prettybigmonster.com/"
              target="_blank"
            >
              Pretty Big Monster
            </a>
          </h2>
          <h2 className="w-full">
            <b className="text-lg">client:</b> Nickelodeon/Paramount
          </h2>
          <h2 className="w-full">
            <b className="text-lg">services: </b>
            development
          </h2>
          <h2 className="w-full">
            <b className="text-lg">tools:</b> Next.js, GSAP, Tailwind
          </h2>
          <video
            className="mt-10 rounded"
            autoPlay
            muted
            loop
            src="spongebob-home-loop.mov"
          />
          <a
            href="https://spongebobfishmojifactory.com/"
            target="_blank"
            className="mt-12 flex w-full justify-center gap-4 rounded border-2 border-dotted border-[#872346] py-2 text-lg transition-colors hover:bg-[#872346]"
          >
            Live Link{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>
          <h2 className="mt-12 w-full font-dirty text-2xl">About</h2>
          <p>
            Spongebob Squarepants is an iconic children's show- one that I
            myself grew up watching. The 25th anniversary of the show was this
            year(2024) and Nickelodeon wanted a special site to launch during
            the Kids Choice Awards.
          </p>
          <p className="mt-4">
            <a
              className="text-rose-200 hover:text-white"
              href="https://prettybigmonster.com/"
              target="_blank"
            >
              Pretty Big Monster
            </a>{" "}
            is an agency that is known for their creative work with the
            entertainment industry. They reached out to partner together to
            create this Fishmoji Maker. Choose your fish, change it's features
            and outfits, and get a fishy name. Export your fish to share with
            your friends!
          </p>
          <img
            className="mt-10 rounded"
            alt="fish customizing screenshot"
            src="spongebob-maker.png"
          />
          <ProjectStepper />
        </div>
      </div>
    </div>
  );
}
