"use client";
import BackButton from "@/components/BackButton";
import LiveButton from "@/components/LiveButton";
import ProjectStepper from "@/components/ProjectStepper";
import Link from "next/link";

export default function Spongebob() {
  return (
    <div className="mb-10 flex flex-col items-center justify-center">
      <BackButton />
      <div className="font-oxygen mb-12">
        <picture className="aspect-[25/21] w-full lg:aspect-[500/263]">
          <source srcSet="fishmoji-share.webp" media="(min-width: 2001px)" />
          <source
            srcSet="fishmoji-share-2k.webp"
            media="(max-width: 2000px) and (min-width: 873px)"
          />
          <img
            src="fishmoji-share-mobile.webp"
            alt="Bikini Bottom Fishmoji Factory"
          />
        </picture>
        <div className="mt-10 flex w-full flex-col items-center justify-center text-left">
          <div className="font-oxygenLight w-full px-2">
            <div className="mt-10 flex w-full flex-col items-center justify-center text-left">
              <div className="flex w-full max-w-md items-center rounded-t-md border-2 border-dotted border-slate-500 lg:max-w-2xl lg:text-2xl">
                <div className="h-16 w-8 rounded-tl-md bg-[#FFE200] lg:w-12" />
                <div className="flex w-full pl-4">
                  <h2 className="font-oxygenBold flex-1 px-2">Agency:</h2>
                  <h3 className="flex-[2] pr-2">
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
              <div className="flex w-full max-w-md items-center border-x-2 border-dotted border-slate-500 lg:max-w-2xl lg:text-2xl">
                <div className="h-20 w-8 bg-[#50B6E3]  lg:w-12" />
                <div className="flex w-full pl-4">
                  <h2 className="font-oxygenBold flex-1 px-2 font-bold">
                    Services:
                  </h2>
                  <h3 className="flex-[2] pr-2">development</h3>
                </div>
              </div>
              <div className="flex w-full max-w-md items-center rounded-b-md border-2 border-dotted border-slate-500 lg:max-w-2xl lg:text-2xl">
                <div className="h-16 w-8 rounded-bl-md bg-[#FE5008] lg:w-12" />
                <div className="flex w-full pl-4">
                  <h2 className="font-oxygenBold flex-1 px-2 font-bold ">
                    Tools:
                  </h2>
                  <h3 className="flex-[2] pr-2">Next.js, GSAP, Tailwind</h3>
                </div>
              </div>
            </div>
          </div>

          <picture className="mt-20 w-full">
            <source srcSet="fishmoji-ipad.webp" media="(min-width: 2001px)" />
            <source
              srcSet="fishmoji-ipad-2k.webp"
              media="(max-width: 2000px) and (min-width: 1000px)"
            />
            <img
              src="fishmoji-ipad-mobile.webp"
              alt="iPad mockups for home and character creator views, both vertical and horizontal"
            />
          </picture>
          <h3 className="font-oxygenLight mb-8 mt-2 w-full pl-4 lg:pl-16 lg:text-xl">
            iPad mock for home and character creator views
          </h3>
          <h2 className="mt-20 w-full max-w-sm px-4 font-dirty text-2xl sm:max-w-md lg:text-4xl">
            About
          </h2>
          <p className="font-oxygenLight max-w-sm px-4 sm:max-w-md lg:text-2xl">
            Spongebob Squarepants is an iconic children&#8217;s show- one that I
            myself grew up watching. The 25th anniversary of the show was this
            year(2024) and Nickelodeon wanted a special site to launch during
            the Kids Choice Awards.
          </p>
          <p className="font-oxygenLight mt-4 max-w-sm px-4 sm:max-w-md lg:text-2xl">
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

          <picture className="mt-20 w-full">
            <source srcSet="kids-choice.webp" media="(min-width: 2001px)" />
            <source
              srcSet="kids-choice-2k.webp"
              media="(max-width: 2000px) and (min-width: 873px)"
            />
            <img
              src="kids-choice-mobile.webp"
              alt="kids choice award hero promotion for the Bikini Bottom Fishmoji Factory"
            />
          </picture>

          <picture className="w-full">
            <source srcSet="kids-choice-ad.webp" media="(min-width: 2001px)" />
            <source
              srcSet="kids-choice-ad-2k.webp"
              media="(max-width: 2000px) and (min-width: 873px)"
            />
            <img
              src="kids-choice-ad-mobile.webp"
              alt="integrated advertisement for the Bikini Bottom Fishmoji Factory"
            />
          </picture>
          <h3 className="font-oxygenLight mb-8 mt-2 w-full pl-4 lg:pl-16 lg:text-xl">
            Kids Choice Awards Promotion
          </h3>
          <LiveButton link={"https://spongebobfishmojifactory.com/"} />
          <ProjectStepper />
        </div>
      </div>
    </div>
  );
}
