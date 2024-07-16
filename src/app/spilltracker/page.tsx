"use client";
import ProjectStepper from "@/components/ProjectStepper";
import Link from "next/link";

export default function Spilltracker() {
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
            className="w-16 stroke-slate-300  pl-6 pt-6 hover:stroke-white lg:w-20"
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
          alt="Spilltracker homepage"
          src="spilltracker.png"
        />
        <div className="mt-10 flex flex-col items-center justify-center text-left">
          <h2 className="w-full">
            <b className="text-lg">agency:</b> Hunt, Gather
          </h2>
          <h2 className="w-full">
            <b className="text-lg">client:</b> Resources Legacy Fund
          </h2>
          <h2 className="w-full">
            <b className="text-lg">services: </b>
            development
          </h2>
          <h2 className="w-full">
            <b className="text-lg">tools:</b> Webflow, GSAP, Cloudflare
          </h2>
          <video
            className="mt-10 rounded"
            muted
            loop
            autoPlay
            src="spilltracker.mov"
          />
          <h3 className="mb-8 mt-2 w-full">
            Spilltracker Realtime Updated Events
          </h3>
          <a
            href="https://www.spilltracker.org/"
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
            This project was for Beyond Petrochemicals, a project by the
            non-profit Resource Legacy Fund. Some of my favorite features on
            this page include the dynamic list of accidents, the sticky ticker,
            and the parallax image scroll.
          </p>
          <video
            className="mt-10 rounded"
            muted
            loop
            autoPlay
            src="spilltracker-scroll.mov"
          />
          <h3 className="mb-8 mt-2 w-full">
            Ticker Animation, Parallax Scroll
          </h3>
          <ProjectStepper />
        </div>
      </div>
    </div>
  );
}
