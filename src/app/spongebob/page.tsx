"use client";
import BackButton from "@/components/BackButton";
import LiveButton from "@/components/LiveButton";
import ProjectStepper from "@/components/ProjectStepper";
import { useLenis } from "@studio-freight/react-lenis";
import Image from "next/image";

export default function Spongebob() {
  const lenis = useLenis(({ scroll }) => {});
  lenis?.scrollTo(0, { immediate: true, force: true });

  return (
    <div className="mb-10 flex flex-col items-center justify-center">
      <BackButton />
      <div className="mb-12 font-oxygen">
        <Image
          alt="Bikini Bottom Fishmoji Factory"
          src="fishmoji-share.webp"
          width={6000}
          height={3918}
          sizes="100vw"
          className="hidden md:flex"
        />
        <Image
          alt="Bikini Bottom Fishmoji Factory"
          src="fishmoji-share-mobile.webp"
          width={1000}
          height={840}
          sizes="100vw"
          className="flex md:hidden"
        />
        <div className="mt-10 flex w-full flex-col items-center justify-center text-left">
          <div className="w-full px-2 font-oxygenLight">
            <div className="mt-10 flex w-full flex-col items-center justify-center text-left">
              <div className="flex w-full max-w-md items-center rounded-t-md border-2 border-dotted border-slate-500 lg:max-w-2xl lg:text-2xl">
                <div className="h-16 w-8 rounded-tl-md bg-[#FFE200] lg:w-12" />
                <div className="flex w-full pl-4">
                  <h2 className="flex-1 px-2 font-oxygenBold">Agency:</h2>
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
                  <h2 className="flex-1 px-2 font-oxygenBold font-bold">
                    Services:
                  </h2>
                  <h3 className="flex-[2] pr-2">development</h3>
                </div>
              </div>
              <div className="flex w-full max-w-md items-center rounded-b-md border-2 border-dotted border-slate-500 lg:max-w-2xl lg:text-2xl">
                <div className="h-16 w-8 rounded-bl-md bg-[#FE5008] lg:w-12" />
                <div className="flex w-full pl-4">
                  <h2 className="flex-1 px-2 font-oxygenBold font-bold ">
                    Tools:
                  </h2>
                  <h3 className="flex-[2] pr-2">Next.js, GSAP, Tailwind</h3>
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
          <h3 className="mb-8 mt-2 w-full pl-4 font-oxygenLight lg:pl-16 lg:text-xl">
            iPad mock for home and character creator views
          </h3>
          <h2 className="mt-20 w-full max-w-sm px-4 font-dirty text-2xl sm:max-w-md lg:text-4xl">
            About
          </h2>
          <p className="max-w-sm px-4 font-oxygenLight sm:max-w-md lg:text-2xl">
            Spongebob Squarepants is an iconic children&#8217;s show- one that I
            myself grew up watching. The 25th anniversary of the show was this
            year(2024) and Nickelodeon wanted a special site to launch during
            the Kids Choice Awards.
          </p>
          <p className="mt-4 max-w-sm px-4 font-oxygenLight sm:max-w-md lg:text-2xl">
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
          <h3 className="mb-8 mt-2 w-full pl-4 font-oxygenLight lg:pl-16 lg:text-xl">
            Kids Choice Awards Promotion
          </h3>
          <LiveButton link={"https://spongebobfishmojifactory.com/"} />
          <ProjectStepper />
        </div>
      </div>
    </div>
  );
}
