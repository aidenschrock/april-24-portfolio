"use client";

import BackButton from "@/components/BackButton";
import LiveButton from "@/components/LiveButton";
import ProjectStepper from "@/components/ProjectStepper";
import { getImageProps } from "next/image";

export default function Spongebob() {
  const hero = { alt: "Bikini Bottom Fishmoji Factory", sizes: "100vw" };
  const {
    props: { srcSet: desktopLargeHero },
  } = getImageProps({
    ...hero,
    width: 6000,
    height: 3918,
    priority: true,
    src: "/fishmoji-share.webp",
  });
  const {
    props: { srcSet: desktopHero },
  } = getImageProps({
    ...hero,
    width: 2000,
    height: 1306,
    priority: true,
    src: "/fishmoji-share-2k.webp",
  });
  const {
    props: { srcSet: mobileHero, ...restHero },
  } = getImageProps({
    ...hero,
    width: 1000,
    height: 840,
    priority: true,
    src: "/fishmoji-share-mobile.webp",
  });

  const ipad = {
    alt: "iPad mockups for home and character creator views, both vertical and horizontal",
    sizes: "100vw",
  };
  const {
    props: { srcSet: desktopLargeIpad },
  } = getImageProps({
    ...ipad,
    width: 6000,
    height: 4122,

    src: "/fishmoji-ipad.webp",
  });
  const {
    props: { srcSet: desktopIpad },
  } = getImageProps({
    ...ipad,
    width: 2000,
    height: 1374,

    src: "/fishmoji-ipad-2k.webp",
  });
  const {
    props: { srcSet: mobileIpad, ...restIpad },
  } = getImageProps({
    ...ipad,
    width: 912,
    height: 1000,

    src: "/fishmoji-ipad-mobile.webp",
  });

  const kidschoice = {
    alt: "kids choice award hero promotion for the Bikini Bottom Fishmoji Factory",
    sizes: "100vw",
  };

  const {
    props: { srcSet: desktopLargeKidsChoice },
  } = getImageProps({
    ...kidschoice,
    width: 5026,
    height: 2134,

    src: "/kids-choice.webp",
  });
  const {
    props: { srcSet: desktopKidsChoice },
  } = getImageProps({
    ...kidschoice,
    width: 2000,
    height: 849,

    src: "/kids-choice-2k.webp",
  });
  const {
    props: { srcSet: mobileKidsChoice, ...restKidsChoice },
  } = getImageProps({
    ...kidschoice,
    width: 872,
    height: 1000,

    src: "/kids-choice-mobile.webp",
  });

  const kidschoiceAd = {
    alt: "kids choice award hero promotion for the Bikini Bottom Fishmoji Factory",
    sizes: "100vw",
  };
  const {
    props: { srcSet: desktopLargeKidsChoiceAd },
  } = getImageProps({
    ...kidschoiceAd,
    width: 2938,
    height: 1648,
    src: "/kids-choice-ad.webp",
  });
  const {
    props: { srcSet: desktopKidsChoiceAd },
  } = getImageProps({
    ...kidschoiceAd,
    width: 2000,
    height: 1122,
    src: "/kids-choice-ad-2k.webp",
  });
  const {
    props: { srcSet: mobileKidsChoiceAd, ...restKidsChoiceAd },
  } = getImageProps({
    ...kidschoiceAd,
    width: 931,
    height: 1000,
    src: "/kids-choice-ad-mobile.webp",
  });
  return (
    <div className="mb-10 flex flex-col items-center justify-center">
      <BackButton />
      <div className="font-oxygen mb-12 w-full">
        <picture>
          <source media="(min-width: 2001px)" srcSet={desktopLargeHero} />
          <source
            media="(max-width: 2000px) and (min-width: 873px)"
            srcSet={desktopHero}
          />
          <img {...restHero} style={{ width: "100%", height: "auto" }} />
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
            <source media="(min-width: 2001px)" srcSet={desktopLargeIpad} />
            <source
              media="(max-width: 2000px) and (min-width: 873px)"
              srcSet={desktopIpad}
            />
            <img {...restIpad} style={{ width: "100%", height: "auto" }} />
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
            <source
              media="(min-width: 2001px)"
              srcSet={desktopLargeKidsChoice}
            />
            <source
              media="(max-width: 2000px) and (min-width: 873px)"
              srcSet={desktopKidsChoice}
            />
            <img
              {...restKidsChoice}
              style={{ width: "100%", height: "auto" }}
            />
          </picture>

          <picture className="w-full">
            <source
              media="(min-width: 2001px)"
              srcSet={desktopLargeKidsChoiceAd}
            />
            <source
              media="(max-width: 2000px) and (min-width: 873px)"
              srcSet={desktopKidsChoiceAd}
            />
            <img
              {...restKidsChoiceAd}
              style={{ width: "100%", height: "auto" }}
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
