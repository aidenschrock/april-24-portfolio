"use client";
import BackButton from "@/components/BackButton";
import LiveButton from "@/components/LiveButton";
import ProjectStepper from "@/components/ProjectStepper";
import MuxPlayer from "@mux/mux-player-react";
import Image from "next/image";

export default function Spongebob() {
  return (
    <div className="mb-10 flex flex-col items-center justify-center">
      <BackButton />
      <div className="mb-12 font-oxygen">
        <MuxPlayer
          accent-color="#de316d"
          streamType="on-demand"
          playbackId="1GcFzww01RYwjxkvAplWVFadsOiKeVay4301PSqrr9Eyo"
          metadataVideoTitle="Spongebob Fishmoji Factory Walkthrough"
          primaryColor="#FFFFFF"
          secondaryColor="#000000"
        />
        <div className="font-zodiak mt-10 flex w-full flex-col items-center justify-center text-left">
          <div className="w-full ">
            <div className="mt-10 flex w-full flex-col items-center justify-center text-left">
              <div className="flex w-full max-w-md items-center border-y-2 border-dotted border-neutral-500 md:rounded-t-md md:border-x-2 lg:max-w-2xl lg:text-2xl">
                <div className="h-24 w-8 bg-[#FFE200] md:rounded-tl-md lg:h-32 lg:w-12" />
                <div className="flex h-24 w-full lg:h-32">
                  <h2 className="h-full border-r-2 border-dotted border-neutral-500 px-2 py-2 text-center font-semibold [writing-mode:vertical-lr]">
                    Agency
                  </h2>
                  <h3 className="flex h-full items-center justify-center px-4 font-oxygen text-xl  lg:text-2xl">
                    {" "}
                    <a
                      className="text-[#FE5008] hover:text-[#ff804a]"
                      href="https://prettybigmonster.com/"
                      target="_blank"
                    >
                      Pretty Big Monster
                    </a>
                  </h3>
                </div>
              </div>
              <div className="flex w-full max-w-md items-center border-dotted border-neutral-500 md:border-x-2 lg:max-w-2xl lg:text-2xl">
                <div className="h-24 w-8 bg-[#50B6E3] lg:h-32  lg:w-12" />
                <div className="flex h-24 w-full lg:h-32">
                  <h2 className="h-full border-r-2 border-dotted border-neutral-500 px-2 py-2 text-center font-semibold [writing-mode:vertical-lr]">
                    Services
                  </h2>
                  <h3 className="flex h-full items-center justify-center px-4 font-oxygenLight text-xl lg:text-2xl">
                    development
                  </h3>
                </div>
              </div>
              <div className="flex w-full max-w-md items-center border-y-2 border-dotted border-neutral-500 md:rounded-b-md md:border-x-2 lg:max-w-2xl lg:text-2xl">
                <div className="h-24 w-8 bg-[#FE5008] md:rounded-bl-md lg:h-32 lg:w-12" />
                <div className="flex h-24 w-full lg:h-32">
                  <h2 className="h-full border-r-2 border-dotted border-neutral-500 px-2 py-2 text-center font-semibold [writing-mode:vertical-lr]">
                    Tools
                  </h2>
                  <h3 className="flex h-full items-center justify-center px-4 font-oxygenLight text-xl lg:text-2xl">
                    Next.js, GSAP, Tailwind
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <Image
            alt="iPad mockups for home and character creator views, both vertical and horizontal"
            src="fishmoji-ipad.webp"
            width={6000}
            height={4122}
            sizes="100vw"
            className="mt-20 hidden w-full md:flex"
          />
          <Image
            alt="iPad mockups for home and character creator views, both vertical and horizontal"
            src="fishmoji-ipad-mobile.webp"
            width={912}
            height={1000}
            sizes="100vw"
            className="mt-20 flex w-full md:hidden"
          />
          <h3 className="font-zodiak mb-8 mt-2 w-full px-4 font-light lg:pl-16 lg:text-xl">
            iPad mock for home and character creator views
          </h3>
          <h2 className="mt-20 w-full max-w-sm px-4 font-dirty text-3xl sm:max-w-md lg:max-w-2xl lg:text-4xl">
            About
          </h2>
          <p className="font-zodiak max-w-sm text-pretty px-4 text-lg font-light sm:max-w-md lg:max-w-2xl lg:text-2xl">
            Spongebob Squarepants is an iconic children&#8217;s show- one that I
            myself grew up watching. The 25th anniversary of the show was this
            year(2024) and Nickelodeon wanted a special site to launch during
            the Kids Choice Awards.
          </p>
          <p className="font-zodiak mt-4 max-w-sm text-pretty px-4 text-lg font-light sm:max-w-md lg:max-w-2xl lg:text-2xl">
            <a
              className="text-[#FE5008] hover:text-[#ff804a]"
              href="https://prettybigmonster.com/"
              target="_blank"
            >
              Pretty Big Monster
            </a>{" "}
            is an agency that is known for their creative work with the
            entertainment industry. They reached out to partner together to
            create this Fishmoji Maker. Choose your fish, change it&#8217;s
            features and outfits, and get a fishy name. Export your fish to
            share with your friends!
          </p>

          <Image
            alt="kids choice award hero promotion for the Bikini Bottom Fishmoji Factory"
            src="kids-choice.webp"
            width={5026}
            height={2134}
            sizes="100vw"
            className="mt-20 hidden w-full md:flex"
          />
          <Image
            alt="kids choice award hero promotion for the Bikini Bottom Fishmoji Factory"
            src="kids-choice-mobile.webp"
            width={872}
            height={1000}
            sizes="100vw"
            className="mt-20 flex w-full md:hidden"
          />

          <Image
            alt="integrated advertisement for the Bikini Bottom Fishmoji Factory"
            src="kids-choice-ad.webp"
            width={2938}
            height={1648}
            sizes="100vw"
            className="hidden w-full md:flex"
          />
          <Image
            alt="integrated advertisement for the Bikini Bottom Fishmoji Factory"
            src="kids-choice-ad-mobile.webp"
            width={931}
            height={1000}
            sizes="100vw"
            className="flex w-full md:hidden"
          />
          <h3 className="font-zodiak mb-8 mt-2 w-full pl-4 font-light lg:pl-16 lg:text-xl">
            Kids Choice Awards Promotion
          </h3>
          <LiveButton link={"https://spongebob-fishmoji-maker.vercel.app/"} />
          <ProjectStepper nextLink="/spilltracker" />
        </div>
      </div>
    </div>
  );
}
