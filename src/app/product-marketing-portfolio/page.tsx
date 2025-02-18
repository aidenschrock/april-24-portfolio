"use client";
import BackButton from "@/components/BackButton";
import LiveButton from "@/components/LiveButton";
import ProjectStepper from "@/components/ProjectStepper";
import MuxPlayer from "@mux/mux-player-react";
import Image from "next/image";

export default function MaryLimPortfolio() {
  return (
    <>
      <div className="mb-10 flex flex-col items-center justify-center overflow-x-hidden">
        <BackButton />
        <div className="mb-12 font-oxygen">
          <MuxPlayer
            accent-color="#de316d"
            streamType="on-demand"
            playbackId="NWyyL9AgBZprTG01ANNbuIZDkj00XD8akaigXMwTexF7E"
            metadataVideoTitle="Mary Lim portfolio Walkthrough"
            primaryColor="#FFFFFF"
            secondaryColor="#000000"
          />
          <div className="w-full px-2 font-oxygenLight">
            <div className="mt-10 flex w-full flex-col items-center justify-center text-left">
              <div className="flex w-full max-w-md items-center rounded-tl-md border-x-2 border-t-2 border-dotted border-slate-500 lg:max-w-2xl lg:text-2xl">
                <div className="h-20 w-8  bg-[#EF8DAC]  lg:w-12" />
                <div className="flex w-full pl-4">
                  <h2 className="flex-1 px-2 font-oxygenBold font-bold">
                    Services:
                  </h2>
                  <h3 className="flex-[2] pr-2">
                    design, development, animation
                  </h3>
                </div>
              </div>
              <div className="flex w-full max-w-md items-center rounded-b-md border-2 border-dotted border-slate-500 lg:max-w-2xl lg:text-2xl">
                <div className="h-20 w-8 rounded-bl-md bg-[#F9E1E7] lg:w-12" />
                <div className="flex w-full py-2 pl-4">
                  <h2 className="flex-1 px-2 font-oxygenBold font-bold ">
                    Tools:
                  </h2>
                  <h3 className="flex-[2] pr-2">
                    Next.js, Tailwind, Motion, Adobe Creative Suite
                  </h3>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center">
              <h2 className="mt-20 w-full max-w-sm px-4 font-dirty text-2xl sm:max-w-md lg:max-w-2xl lg:text-4xl">
                About
              </h2>
              <p className="max-w-sm px-4 font-oxygenLight sm:max-w-md lg:max-w-2xl lg:text-2xl">
                Mary&#39;s portfolio was a perfect opportunity to try out a web
                design style that mimics stationary. In this project, I was both
                the designer and developer. Here are the touches that I love
                most:
              </p>
              <ul className="list-disc space-y-2 pl-8 pt-6">
                <li>Illustrative stamps based on the real weather in Austin</li>
                <li>A marquee in the nav that mimics Washi tape</li>
                <li>Handwritten typography</li>
                <li>
                  Stickers to showcase the tools that Mary is proficient in{" "}
                </li>
              </ul>
            </div>
            <Image
              alt="A mobile mockup of Mary's portfolio."
              src="mary-mobile-mockup.webp"
              width={2000}
              height={1334}
              sizes="100vw"
              className="mt-20 w-full"
            />
            <h3 className="mb-8 mt-2 w-full pl-4 font-oxygenLight lg:pl-16 lg:text-xl">
              A mobile mockup of Mary&#39;s portfolio.
            </h3>
          </div>
        </div>
        <LiveButton link={"https://mary-lim-portfolio.vercel.app/"} />

        <ProjectStepper nextLink="/here" />
      </div>
    </>
  );
}
