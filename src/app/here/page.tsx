"use client";
import BackButton from "@/components/BackButton";
import LiveButton from "@/components/LiveButton";
import ProjectStepper from "@/components/ProjectStepper";
import MuxPlayer from "@mux/mux-player-react";
import Image from "next/image";

export default function Here() {
  return (
    <>
      <div className="mb-10 flex flex-col items-center justify-center">
        <BackButton />
        <div className="mb-12 font-oxygen">
          <MuxPlayer
            accent-color="#de316d"
            streamType="on-demand"
            playbackId="f1n00ZEClyrFyDpGzV42FKbFspX2iMT8mFCYjanKoykg"
            metadataVideoTitle="HERE Walkthrough"
            primaryColor="#FFFFFF"
            secondaryColor="#000000"
          />
          <div className="w-full px-2 font-oxygenLight">
            <div className="mt-10 flex w-full flex-col items-center justify-center text-left">
              <div className="flex w-full max-w-md items-center rounded-t-md border-2 border-dotted border-slate-500 lg:max-w-2xl lg:text-2xl">
                <div className="h-16 w-8 rounded-tl-md bg-[#35393A] lg:w-12" />
                <div className="flex w-full pl-4">
                  <h2 className="flex-1 px-2 font-oxygenBold">Agency:</h2>
                  <h3 className="flex-[2] pr-2">
                    {" "}
                    <a
                      className="text-[#85a5c9] hover:text-[#b1c8e3]"
                      href="https://prettybigmonster.com/"
                      target="_blank"
                    >
                      Pretty Big Monster
                    </a>
                  </h3>
                </div>
              </div>
              <div className="flex w-full max-w-md items-center border-x-2 border-dotted border-slate-500 lg:max-w-2xl lg:text-2xl">
                <div className="h-20 w-8 bg-[#2b4563]  lg:w-12" />
                <div className="flex w-full pl-4">
                  <h2 className="flex-1 px-2 font-oxygenBold font-bold">
                    Services:
                  </h2>
                  <h3 className="flex-[2] pr-2">development, animation</h3>
                </div>
              </div>
              <div className="flex w-full max-w-md items-center rounded-b-md border-2 border-dotted border-slate-500 lg:max-w-2xl lg:text-2xl">
                <div className="h-16 w-8 rounded-bl-md bg-[#536D8B] lg:w-12" />
                <div className="flex w-full pl-4">
                  <h2 className="flex-1 px-2 font-oxygenBold font-bold ">
                    Tools:
                  </h2>
                  <h3 className="flex-[2] pr-2">
                    Next.js, GSAP, Cesium, Google APIs
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <Image
            alt="neighborhood view in the HERE experience. Google streetview of the submitted address and multiple decades to choose from."
            src="here-neighborhood-view.png"
            width={6000}
            height={4122}
            sizes="100vw"
            className="mt-20 w-full"
          />
          <h3 className="mb-8 mt-2 w-full pl-4 font-oxygenLight lg:pl-16 lg:text-xl">
            Neighborhood view in the HERE experience. Includes Google streetview
            of submitted address and multiple decades relating to the state
            history.
          </h3>
          <div className="flex w-full flex-col items-center justify-center">
            <h2 className="mt-20 w-full max-w-sm px-4 font-dirty text-2xl sm:max-w-md lg:max-w-2xl lg:text-4xl">
              About
            </h2>
            <p className="max-w-sm px-4 font-oxygenLight sm:max-w-md lg:max-w-2xl lg:text-2xl">
              <b>HERE</b> is a film produced and directed by Robert Zemeckis,
              based on the 2014 graphic novel by Richard McGuire. In
              anticipation for it&#8217;s release, the Sony marketing team
              reached out to Pretty Big Monster for a unique interactive web
              experience. In it&#8217;s final form, the site allows users to
              send a custom postcard inviting a loved one to see the HERE movie
              at a local theater. There was also a collaboration with the Google
              Map team and a subsequent
              <a
                className="text-[#85a5c9] hover:text-[#b1c8e3]"
                target="_blank"
                href="https://mapsplatform.google.com/resources/blog/find-your-very-own-here-inspired-by-upcoming-feature-film-here-powered-by/"
              >
                &nbsp;case study
              </a>
              .
            </p>
          </div>

          <Image
            alt="Theater view in the HERE experience created using Cesium."
            src="here-cesium-view.png"
            width={6000}
            height={4122}
            sizes="100vw"
            className="mt-20 w-full"
          />
          <h3 className="mb-8 mt-2 w-full pl-4 font-oxygenLight lg:pl-16 lg:text-xl">
            Theater selection view in the HERE experience- created using Cesium
            and Google&#8217;s photorealistic map tiles.
          </h3>
          <div className="flex w-full flex-col items-center justify-center">
            <h2 className="mt-20 w-full max-w-sm px-4 font-dirty text-2xl sm:max-w-md lg:max-w-2xl lg:text-4xl">
              Developer Notes
            </h2>
            <p className="max-w-sm px-4 font-oxygenLight sm:max-w-md lg:max-w-2xl lg:text-2xl">
              At the time of this project, Google is still working on their own
              3D map renderer- I&#8217;m excited to see the performance benefits
              on mobile devices. Using Cesium to render Google&#8217;s 3D tiles
              requires considerably more effort, and I relied heavily on the
              foundational work of other developers. Special shoutout to{" "}
              <b>Hyun Seo</b>(Hyundotio on Github); their example repo(
              <a
                className="text-[#85a5c9] hover:text-[#b1c8e3]"
                target="_blank"
                href="https://github.com/hyundotio/nextjs-ts-cesium-example"
              >
                https://github.com/hyundotio/nextjs-ts-cesium-example
              </a>
              ), was instrumental in helping me meet the project deadlines
              efficiently.
            </p>
            <LiveButton link={"https://maps.here-movie.com/"} />

            <ProjectStepper />
          </div>
        </div>
      </div>
    </>
  );
}
