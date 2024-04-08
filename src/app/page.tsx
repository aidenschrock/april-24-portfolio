"use client";

import Image from "next/image";
import { useState } from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import Navbar from "@/components/Navbar";
import RevealText from "@/components/RevealText";
import SquareGradient from "@/components/SquareGradient";
import Ballpit from "@/components/Ballpit";
import BrandBlocks from "@/components/BrandBlocks";

export default function Home() {
  // lenis instance
  const lenis = useLenis(({ scroll }) => {});

  // tooltip
  const [tooltipVisibility, setTooltipVisibility] = useState(false);

  function sendEmail() {
    window.location.href =
      "mailto:aidenschrock3d@gmail.com?subject=Let's%20Work%20Together!&body=Request%20for%20design%20and%20development%20services.";
  }

  function hideSpan() {
    console.log("hiding");
    setTooltipVisibility(false);
  }

  function copy() {
    // Get the text field
    let copyText = document.getElementById("email"); // Copy the text inside the text field

    navigator.clipboard.writeText(copyText!.innerHTML); // Alert the copied text

    setTooltipVisibility(true);

    setTimeout(hideSpan, 2000);
  }
  return (
    <ReactLenis root options={{ duration: 0.8 }}>
      <Navbar />
      <main className="flex min-h-screen font-overpass flex-col items-center justify-between">
        <div
          id="home"
          className="h-screen w-full flex items-center justify-center "
        >
          <h1 className="text-6xl font-dirty sm:text-8xl md:text-9xl lg:text-[11rem] xl:text-[13rem] -mt-12 text-center">
            Creative <br /> Developer
          </h1>
        </div>
        <div
          id="about"
          className="w-full flex flex-col lg:flex-row justify-center p-6 sm:p-14 gap-32"
        >
          <div>
            <h2 className="text-5xl font-dirty sm:text-7xl md:text-8xl lg:text-9xl">
              Hello!
            </h2>
          </div>

          <p className="text-xl sm:text-2xl lg:w-1/2 max-w-3xl">
            My name is Aiden, and I&apos;m an independent creative developer
            based in Austin, TX. My main tools are Three.js and GSAP, enabling
            me to seamlessly blend captivating animations with the power of 3D
            graphics. Let&apos;s bring your ideas to life by creating websites
            that not only engage your audience but also leave a lasting
            impression!
          </p>
        </div>
        <div id="work" className="w-full h-screen flex flex-col justify-center">
          <h2 className="text-3xl font-dirty text-center sm:text-4xl lg:text-5xl">
            Selected Work
          </h2>
          <a
            href="https://recolude-marketing-2024.pages.dev/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="border-t-2 gap-y-4 border-white p-2 lg:p-6 bg-slate-950/50">
              <div className="flex justify-between items-center max-w-7xl w-full mx-auto">
                <div className="flex flex-col gap-y-4 ">
                  <p className="text-2xl sm:text-3xl lg:text-4xl  font-bold">
                    Recolude
                  </p>

                  <p className=" text-sm sm:text-base lg:text-lg xl:text-xl">
                    Web Design | Svelte, Threejs, Tailwind
                  </p>
                </div>
                <div className="h-12 w-12 md:h-16 md:w-16 mr-4 sm:mr-16">
                  <svg
                    className="fill-white h-full w-full hover:translate-x-2 hover:-translate-y-2 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://watermelon-wine-three.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="border-y-2 gap-y-4 border-white p-2 lg:p-6 bg-slate-950/50">
              <div className="flex justify-between items-center max-w-7xl w-full mx-auto">
                <div className="flex flex-col gap-y-4 ">
                  <p className="text-2xl sm:text-3xl lg:text-4xl  font-bold">
                    Floating Models
                  </p>

                  <p className=" text-sm sm:text-base lg:text-lg xl:text-xl">
                    Experimental | React Three Fiber
                  </p>
                </div>
                <div className="h-12 w-12 md:h-16 md:w-16 mr-4 sm:mr-16">
                  <svg
                    className="fill-white h-full w-full hover:translate-x-2 hover:-translate-y-2 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div
          className=" flex gap-y-16  flex-col items-center w-full"
          id="services"
        >
          <div className="flex  flex-col-reverse lg:flex-row 2xl:max-h-96 max-w-7xl">
            <div className="p-6  lg:flex lg:flex-col lg:justify-center">
              <h3 className="text-4xl sm:text-5xl font-dirty">Branding</h3>
              <p className=" text-base sm:text-2xl">
                Branding goes beyond logos and design, encompassing the entire
                customer experience, company culture, and values. A strong brand
                can lead to increased recognition and customer loyalty.
              </p>
            </div>
            <div className=" h-80 lg:h-[500px] aspect-square">
              <BrandBlocks />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row max-w-7xl">
            <div className="flex h-80 lg:h-[500px] aspect-square">
              <Ballpit />
            </div>
            <div className="p-6  lg:flex lg:flex-col lg:justify-center">
              <h3 className="text-4xl sm:text-5xl font-dirty">
                3D Design & Animation
              </h3>
              <p className=" text-base sm:text-2xl">
                Immersive elements enhance user engagement, boost visual appeal,
                facilitate storytelling, and provide interactive product
                showcases. They convey your brand&apos;s personality, improve
                user experiences, simplify educational content, and drive
                conversions.
              </p>
            </div>
          </div>
        </div>
        <div className="min-h-screen w-full flex flex-col justify-center">
          <RevealText />
        </div>
        <div
          id="contact"
          className="flex flex-col p-6 gap-y-44 py-40  max-w-7xl mx-auto"
        >
          <h2 className=" flex text-6xl font-dirty sm:text-7xl lg:text-8xl">
            Let&apos;s Work Together
          </h2>

          <div className="flex flex-col items-end text-right  text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            <p id="email">AidenSchrock3D@gmail.com</p>
            <div className="flex gap-x-4 mt-4">
              <div
                id="tooltip"
                className={`${
                  tooltipVisibility ? "visible" : "invisible"
                } relative mt-4 flex h-10 w-40 items-center justify-center rounded-md border-2 border-dotted border-pink-500 bg-slate-900/50`}
              >
                <span
                  id="tooltiptext"
                  className={`${
                    tooltipVisibility ? "visible" : "invisible"
                  } absolute z-10 flex rounded-md text-center text-lg`}
                >
                  Copied Email!
                </span>
              </div>
              <svg
                onClick={copy}
                className="fill-white hover:fill-pink-600 w-12 lg:w-16 h-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360ZM200-80q-33 0-56.5-23.5T120-160v-520q0-17 11.5-28.5T160-720q17 0 28.5 11.5T200-680v520h400q17 0 28.5 11.5T640-120q0 17-11.5 28.5T600-80H200Z" />
              </svg>
              <svg
                className="fill-white hover:fill-pink-600 w-12 lg:w-16 h-auto"
                onClick={sendEmail}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-287q5 0 10.5-1.5T501-453l283-177q8-5 12-12.5t4-16.5q0-20-17-30t-35 1L480-520 212-688q-18-11-35-.5T160-659q0 10 4 17.5t12 11.5l283 177q5 3 10.5 4.5T480-447Z" />
              </svg>
            </div>
          </div>
          <div className="socials flex gap-x-6 text-2xl sm:text-3xl lg:text-4xl ">
            <a
              className="hover:text-pink-600"
              href="https://www.linkedin.com/in/aiden-schrock/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
            <a
              className="hover:text-pink-600"
              href="https://twitter.com/AidenNSchrock"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>
        <div className="flex grow justify-center h-100vh w-screen items-center fixed top-0 left-0 -z-10 inset-0">
          <SquareGradient />
        </div>
      </main>
    </ReactLenis>
  );
}
