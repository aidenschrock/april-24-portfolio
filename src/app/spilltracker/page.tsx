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
          <div className="w-full px-2 font-oxygenLight">
            <div className="mt-10 flex w-full flex-col items-center justify-center text-left">
              <div className="flex w-full max-w-md items-center rounded-t-md border-2 border-dotted border-slate-500 lg:max-w-2xl lg:text-2xl">
                <div className="h-16 w-8 rounded-tl-md bg-[#FEB92F] lg:w-12" />
                <div className="flex w-full pl-4">
                  <h2 className="flex-1 px-2 font-oxygenBold">Agency:</h2>
                  <h3 className="flex-[2] pr-2">Hunt, Gather</h3>
                </div>
              </div>
              <div className="flex w-full max-w-md items-center border-x-2 border-dotted border-slate-500 lg:max-w-2xl lg:text-2xl">
                <div className="h-20 w-8 bg-[#14161F]  lg:w-12" />
                <div className="flex w-full pl-4">
                  <h2 className="flex-1 px-2 font-oxygenBold font-bold">
                    Client:
                  </h2>
                  <h3 className="flex-[2] pr-2">Resources Legacy Fund</h3>
                </div>
              </div>
              <div className="flex w-full max-w-md items-center rounded-b-md border-2 border-dotted border-slate-500 lg:max-w-2xl lg:text-2xl">
                <div className="h-16 w-8 rounded-bl-md bg-[#111110] lg:w-12" />
                <div className="flex w-full pl-4">
                  <h2 className="flex-1 px-2 font-oxygenBold font-bold ">
                    Tools:
                  </h2>
                  <h3 className="flex-[2] pr-2">Webflow, GSAP, Cloudflare</h3>
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
          <h3 className="mb-8 mt-2 w-full pl-4 font-oxygenLight lg:pl-16 lg:text-xl">
            Spilltracker Mobile
          </h3>

          <h2 className="mt-12 w-full max-w-sm px-4 font-dirty text-2xl sm:max-w-md lg:max-w-2xl lg:text-4xl">
            About
          </h2>
          <p className="max-w-sm px-4 font-oxygenLight sm:max-w-md lg:max-w-2xl lg:text-2xl">
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
