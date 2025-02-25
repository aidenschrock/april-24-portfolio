"use client";
import BackButton from "@/components/BackButton";
import ProjectStepper from "@/components/ProjectStepper";
import LiveButton from "@/components/LiveButton";
import { useLenis } from "@studio-freight/react-lenis";
import Image from "next/image";

export default function Spilltracker() {
  const lenis = useLenis(({ scroll }) => {});
  lenis?.scrollTo(0, { immediate: true, force: true });
  return (
    <div className="mb-10 flex flex-col items-center justify-center">
      <BackButton />
      <div className="mb-12 font-oxygen">
        <Image
          alt="Spilltracker homepage"
          src="spilltracker-home.webp"
          width={6000}
          height={2310}
          sizes="100vw"
          className="hidden xl:flex"
        />
        <Image
          alt="Spilltracker homepage"
          src="spilltracker-home-2k.webp"
          width={2000}
          height={1453}
          sizes="100vw"
          className="flex xl:hidden"
        />
        <div className="mt-10 flex flex-col items-center justify-center text-left">
          <div className="font-zodiak w-full">
            <div className="mt-10 flex w-full flex-col items-center justify-center text-left">
              <div className="flex w-full max-w-md items-center border-y-2 border-dotted border-neutral-500 md:rounded-t-md md:border-x-2 lg:max-w-2xl lg:text-2xl">
                <div className="h-24 w-8 bg-[#FEB92F] md:rounded-tl-md lg:h-32 lg:w-12" />
                <div className="flex h-24 w-full lg:h-32">
                  <h2 className="h-full border-r-2 border-dotted border-neutral-500 px-2 py-2 text-center font-semibold [writing-mode:vertical-lr]">
                    Agency
                  </h2>
                  <h3 className="flex h-full items-center justify-center px-4 font-oxygen text-xl text-[#ffde9c] hover:text-[#FEB92F] lg:text-2xl">
                    <a href="https://www.civilization.agency/" target="_blank">
                      Civilization
                    </a>
                  </h3>
                </div>
              </div>
              <div className="flex w-full max-w-md items-center border-dotted border-neutral-500 md:border-x-2 lg:max-w-2xl lg:text-2xl">
                <div className="h-24 w-8 bg-[#14161F] lg:h-32  lg:w-12" />
                <div className="flex h-24 w-full lg:h-32">
                  <h2 className="h-full border-r-2 border-dotted border-neutral-500 px-2 py-2 text-center font-semibold [writing-mode:vertical-lr]">
                    Client
                  </h2>
                  <h3 className="flex h-full items-center justify-center px-4 font-oxygenLight text-xl lg:text-2xl">
                    Resources Legacy Fund
                  </h3>
                </div>
              </div>
              <div className="flex w-full max-w-md items-center border-y-2 border-dotted border-neutral-500 md:rounded-b-md md:border-x-2 lg:max-w-2xl lg:text-2xl">
                <div className="h-24 w-8 rounded-bl-md bg-[#111110] lg:h-32 lg:w-12" />
                <div className="flex h-24 w-full lg:h-32">
                  <h2 className="h-full border-r-2 border-dotted border-neutral-500 px-2 py-2 text-center font-semibold [writing-mode:vertical-lr]">
                    Tools
                  </h2>
                  <h3 className="flex h-full items-center justify-center px-4 font-oxygenLight text-xl lg:text-2xl">
                    Webflow, GSAP, Cloudflare
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <Image
            alt="Spilltracker homepage"
            src="spilltracker-mobile.webp"
            width={6000}
            height={4003}
            sizes="100vw"
            className="mt-20 hidden w-full md:flex"
          />
          <Image
            alt="Spilltracker homepage"
            src="spilltracker-mobile-1k.webp"
            width={1000}
            height={667}
            sizes="100vw"
            className="mt-20 flex w-full md:hidden"
          />
          <h3 className="font-zodiak mb-8 mt-2 w-full pl-4 font-light lg:pl-16 lg:text-xl">
            Spilltracker Mobile
          </h3>

          <h2 className="mt-12 w-full max-w-sm px-4 font-dirty text-3xl sm:max-w-md lg:max-w-2xl lg:text-4xl">
            About
          </h2>
          <p className="font-zodiak max-w-sm px-4 text-lg font-light sm:max-w-md lg:max-w-2xl lg:text-2xl">
            This project was for Beyond Petrochemicals, a project by the
            non-profit Resource Legacy Fund. Some of my favorite features on
            this page include the dynamic list of accidents, the sticky ticker,
            and the parallax image scroll.
          </p>
          <LiveButton link={"https://www.spilltracker.org/"} />

          <ProjectStepper nextLink="/recolude" />
        </div>
      </div>
    </div>
  );
}
