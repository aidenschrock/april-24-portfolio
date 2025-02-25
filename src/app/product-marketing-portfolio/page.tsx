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
        <div className="font-zodiak mb-12">
          <MuxPlayer
            accent-color="#de316d"
            streamType="on-demand"
            playbackId="NWyyL9AgBZprTG01ANNbuIZDkj00XD8akaigXMwTexF7E"
            metadataVideoTitle="Mary Lim portfolio Walkthrough"
            primaryColor="#FFFFFF"
            secondaryColor="#000000"
          />
          <div className="font-zodiak mt-10 flex w-full flex-col items-center justify-center text-left">
            <div className="flex w-full max-w-md items-center border-t-2 border-dotted border-neutral-500 md:rounded-t-md md:border-x-2 lg:max-w-2xl lg:text-xl">
              <div className="h-24 w-8 bg-[#EF8DAC] md:rounded-tl-md  lg:h-32  lg:w-12" />
              <div className="flex h-24 w-full lg:h-32">
                <h2 className="h-full border-r-2 border-dotted border-neutral-500 px-2 py-2 text-center font-semibold [writing-mode:vertical-lr]">
                  Services
                </h2>
                <h3 className="flex h-full items-center justify-center px-4 font-oxygenLight text-xl lg:text-2xl">
                  design, development, animation
                </h3>
              </div>
            </div>
            <div className="flex w-full max-w-md items-center border-y-2 border-dotted border-neutral-500 md:rounded-b-md md:border-x-2 lg:max-w-2xl lg:text-xl">
              <div className="h-24 w-8  bg-[#F9E1E7] md:rounded-bl-md lg:h-32 lg:w-12" />
              <div className="flex h-full w-full items-center">
                <h2 className="h-24 border-r-2  border-dotted border-neutral-500 px-2 py-2 text-center font-semibold [writing-mode:vertical-lr] lg:h-32">
                  Tools
                </h2>
                <h3 className="px-4 font-oxygenLight text-xl lg:text-2xl">
                  Next.js, Tailwind, Motion, Adobe Creative Suite
                </h3>
              </div>
            </div>
          </div>
          <div className="font-zodiak w-full px-2">
            <div className="flex w-full flex-col items-center justify-center">
              <h2 className="mt-20 w-full max-w-sm px-4 font-dirty text-3xl sm:max-w-md lg:max-w-2xl lg:text-5xl">
                About
              </h2>
              <p className="max-w-sm px-4 text-lg font-light sm:max-w-md lg:max-w-2xl lg:text-2xl">
                Mary&#39;s portfolio was a perfect opportunity to try out a web
                design style that mimics stationary. In this project, I was both
                the designer and developer. Here are the touches that I love
                most:
              </p>
              <ul className="list-disc space-y-2 pl-8 pt-6 font-light sm:max-w-md lg:max-w-2xl lg:text-2xl">
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
            <h3 className="font-zodiak mb-8 mt-2 w-full pl-4 font-light lg:pl-16 lg:text-xl">
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
