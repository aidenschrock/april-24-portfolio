"use client";
import BackButton from "@/components/BackButton";
import ProjectStepper from "@/components/ProjectStepper";
import LiveButton from "@/components/LiveButton";
import Link from "next/link";

export default function Spilltracker() {
  return (
    <div className="mb-10 flex flex-col items-center justify-center">
      <BackButton />
      <div className="font-oxygen mb-12">
        <img
          className="h-auto w-full"
          alt="Spilltracker homepage"
          src="spilltracker-home.webp"
        />
        <div className="mt-10 flex flex-col items-center justify-center text-left">
          <div className="font-oxygenLight w-full px-2">
            <div className="mt-10 flex w-full flex-col items-center justify-center text-left">
              <div className="flex w-full max-w-md items-center rounded-t-md border-2 border-dotted border-slate-500 lg:max-w-2xl lg:text-2xl">
                <div className="h-16 w-8 rounded-tl-md bg-[#FEB92F] lg:w-12" />
                <div className="flex w-full pl-4">
                  <h2 className="font-oxygenBold flex-1 px-2">Agency:</h2>
                  <h3 className="flex-[2] pr-2">Hunt, Gather</h3>
                </div>
              </div>
              <div className="flex w-full max-w-md items-center border-x-2 border-dotted border-slate-500 lg:max-w-2xl lg:text-2xl">
                <div className="h-20 w-8 bg-[#14161F]  lg:w-12" />
                <div className="flex w-full pl-4">
                  <h2 className="font-oxygenBold flex-1 px-2 font-bold">
                    Client:
                  </h2>
                  <h3 className="flex-[2] pr-2">Resources Legacy Fund</h3>
                </div>
              </div>
              <div className="flex w-full max-w-md items-center rounded-b-md border-2 border-dotted border-slate-500 lg:max-w-2xl lg:text-2xl">
                <div className="h-16 w-8 rounded-bl-md bg-[#111110] lg:w-12" />
                <div className="flex w-full pl-4">
                  <h2 className="font-oxygenBold flex-1 px-2 font-bold ">
                    Tools:
                  </h2>
                  <h3 className="flex-[2] pr-2">Webflow, GSAP, Cloudflare</h3>
                </div>
              </div>
            </div>
          </div>

          <img
            className="mt-20 h-auto w-full"
            alt="Spilltracker mobile mockups"
            src="spilltracker-mock-mobile.webp"
          />
          <h3 className="font-oxygenLight mb-8 mt-2 w-full pl-4 lg:pl-16 lg:text-xl">
            Spilltracker Mobile
          </h3>

          <h2 className="mt-12 w-full max-w-sm px-4 font-dirty text-2xl sm:max-w-md lg:text-4xl">
            About
          </h2>
          <p className="font-oxygenLight max-w-sm px-4 sm:max-w-md lg:text-2xl">
            This project was for Beyond Petrochemicals, a project by the
            non-profit Resource Legacy Fund. Some of my favorite features on
            this page include the dynamic list of accidents, the sticky ticker,
            and the parallax image scroll.
          </p>
          <LiveButton link={"https://www.spilltracker.org/"} />

          <ProjectStepper />
        </div>
      </div>
    </div>
  );
}
