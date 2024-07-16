"use client";
import Link from "next/link";
import Lottie from "lottie-react";
import mobileTrajectoryAnim from "../../lib/trajectory-anim/mobile.json";
import desktopTrajectoryAnim from "../../lib/trajectory-anim/desktop.json";
import RecoludeGrid from "@/components/RecoludeGrid";
import ProjectStepper from "@/components/ProjectStepper";

export default function Recolude() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-screen-md">
        <Link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-16 stroke-slate-300 pl-6 pt-6 hover:stroke-white  lg:w-20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </Link>
      </div>
      <div className="mx-6 mb-12 mt-10 max-w-screen-sm font-overpass">
        <svg
          className="px-6"
          id="a"
          data-name="Layer 1"
          viewBox="0 0 1881.75 448.38"
        >
          <defs>
            <style>
              {`
      .y {
        fill: #142b31;
      }

      .y, .z, .aa, .ab, .ac, .ad, .ae, .af, .ag, .ah, .ai, .aj, .ak, .al, .am, .an, .ao, .ap, .aq, .ar, .as, .at, .au, .av, .aw, .ax, .ay, .az, .ba, .bb, .bc, .bd, .be {
        stroke-width: 0px;
      }

      .z {
        fill: #112f75;
      }

      .aa {
        fill: #086e24;
      }

      .ab {
        fill: #00770b;
      }

      .ac {
        fill: #e20021;
      }

      .ad {
        fill: #e00051;
      }

      .ae {
        fill: #142735;
      }

      .af {
        fill: #ed175d;
      }

      .ag {
        fill: #fff;
      }

      .ah {
        fill: url(#b);
      }

      .ai {
        fill: url(#v);
      }

      .aj {
        fill: url(#c);
      }

      .ak {
        fill: url(#e);
      }

      .al {
        fill: url(#x);
      }

      .am {
        fill: url(#w);
      }

      .an {
        fill: url(#u);
      }

      .ao {
        fill: url(#t);
      }

      .ap {
        fill: url(#f);
      }

      .aq {
        fill: url(#d);
      }

      .ar {
        fill: url(#s);
      }

      .as {
        fill: url(#j);
      }

      .at {
        fill: url(#q);
      }

      .au {
        fill: url(#r);
      }

      .av {
        fill: url(#i);
      }

      .aw {
        fill: url(#h);
      }

      .ax {
        fill: url(#m);
      }

      .ay {
        fill: url(#g);
      }

      .az {
        fill: url(#o);
      }

      .ba {
        fill: url(#p);
      }

      .bb {
        fill: url(#k);
      }

      .bc {
        fill: url(#n);
      }

      .bd {
        fill: url(#l);
      }

      .be {
        fill: #dd00b3;
      }
      `}
            </style>
            <linearGradient
              id="b"
              x1="302.93"
              y1="232.19"
              x2="471.2"
              y2="388.79"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".2" stopColor="#dd1d68" />
              <stop offset=".49" stopColor="#ef1c69" />
              <stop offset=".84" stopColor="#f065a6" />
            </linearGradient>
            <linearGradient
              id="c"
              x1="41.69"
              y1="18.89"
              x2="89.87"
              y2="61.76"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".25" stopColor="#ba1d28" />
              <stop offset="1" stopColor="#fd1c1a" />
            </linearGradient>
            <linearGradient
              id="d"
              x1="83.73"
              y1="47.94"
              x2="121.65"
              y2="47.94"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#122e32" />
              <stop offset=".82" stopColor="#0d5625" />
            </linearGradient>
            <linearGradient
              id="e"
              x1="70.13"
              y1="74.54"
              x2="140.5"
              y2="74.54"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#112c61" />
              <stop offset=".84" stopColor="#0e537a" />
            </linearGradient>
            <linearGradient
              id="f"
              x1=".72"
              y1="110"
              x2="38.36"
              y2="103.39"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#c21b25" />
              <stop offset=".84" stopColor="#f51b1a" />
            </linearGradient>
            <linearGradient
              id="g"
              x1="9.59"
              y1="108.37"
              x2="29.71"
              y2="86.51"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#032934" />
              <stop offset=".16" stopColor="#052940" />
              <stop offset="1" stopColor="#142a7f" />
            </linearGradient>
            <linearGradient
              id="h"
              x1="111.39"
              y1="130.46"
              x2="139.91"
              y2="175.13"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".28" stopColor="#cc1821" />
              <stop offset=".7" stopColor="#fe1a19" />
            </linearGradient>
            <linearGradient
              id="i"
              x1="157.6"
              y1="154.46"
              x2="177.87"
              y2="180.29"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".14" stopColor="#073582" />
              <stop offset=".7" stopColor="#05887a" />
            </linearGradient>
            <linearGradient
              id="j"
              x1="94.17"
              y1="160.2"
              x2="118.06"
              y2="220.29"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".13" stopColor="#112e6a" />
              <stop offset=".15" stopColor="#10336b" />
              <stop offset=".36" stopColor="#0b6175" />
              <stop offset=".52" stopColor="#087e7c" />
              <stop offset=".61" stopColor="#07897f" />
            </linearGradient>
            <linearGradient
              id="k"
              x1="76.3"
              y1="133.78"
              x2="148.04"
              y2="209.49"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".38" stopColor="#132c33" />
              <stop offset=".84" stopColor="#098128" />
            </linearGradient>
            <linearGradient
              id="l"
              x1="90.47"
              y1="241.85"
              x2="101.07"
              y2="229.88"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#953769" />
              <stop offset=".7" stopColor="#ff7a7b" />
            </linearGradient>
            <linearGradient
              id="m"
              x1="62.05"
              y1="242.33"
              x2="71.4"
              y2="223.73"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#d71722" />
              <stop offset=".7" stopColor="#ff1e1c" />
            </linearGradient>
            <linearGradient
              id="n"
              x1="84.64"
              y1="254.6"
              x2="92.92"
              y2="243.55"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#133072" />
              <stop offset=".7" stopColor="#152f6c" />
            </linearGradient>
            <linearGradient
              id="o"
              x1="68.78"
              y1="248.49"
              x2="92.48"
              y2="228.42"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".28" stopColor="#142d31" />
              <stop offset=".7" stopColor="#0b5929" />
            </linearGradient>
            <linearGradient
              id="p"
              x1="140.85"
              y1="21.93"
              x2="406.49"
              y2="123.55"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".21" stopColor="#911d28" />
              <stop offset=".57" stopColor="#e01e1e" />
              <stop offset=".7" stopColor="#ed481a" />
            </linearGradient>
            <linearGradient
              id="q"
              x1="169.75"
              y1="68.97"
              x2="406.44"
              y2="174.97"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".21" stopColor="#a11d59" />
              <stop offset=".68" stopColor="#ef266a" />
              <stop offset=".89" stopColor="#f54586" />
            </linearGradient>
            <linearGradient
              id="r"
              x1="323.24"
              y1="240.1"
              x2="436.66"
              y2="144.17"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".21" stopColor="#112e7a" />
              <stop offset=".68" stopColor="#0867a1" />
              <stop offset=".89" stopColor="#0670ac" />
            </linearGradient>
            <linearGradient
              id="s"
              x1="252.8"
              y1="174.61"
              x2="359.23"
              y2="266.44"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".27" stopColor="#ce1e21" />
              <stop offset=".46" stopColor="#f12919" />
            </linearGradient>
            <linearGradient
              id="t"
              x1="194.73"
              y1="226.04"
              x2="237.6"
              y2="226.04"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".27" stopColor="#be1b74" />
              <stop offset=".69" stopColor="#c81cc0" />
            </linearGradient>
            <linearGradient
              id="u"
              x1="154.54"
              y1="282.92"
              x2="215.86"
              y2="231.01"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".57" stopColor="#911d28" />
              <stop offset=".99" stopColor="#eb431c" />
            </linearGradient>
            <linearGradient
              id="v"
              x1="159.16"
              y1="263.85"
              x2="206.1"
              y2="248.35"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".27" stopColor="#961c59" />
              <stop offset=".69" stopColor="#ac1d5b" />
            </linearGradient>
            <linearGradient
              id="w"
              x1="217.73"
              y1="280.28"
              x2="401.04"
              y2="490.94"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".2" stopColor="#122e78" />
              <stop offset=".84" stopColor="#0677b1" />
            </linearGradient>
            <linearGradient
              id="x"
              x1="432.98"
              y1="375.29"
              x2="444.01"
              y2="410.34"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#0b6d24" />
              <stop offset=".27" stopColor="#0382b9" />
            </linearGradient>
          </defs>
          <g>
            <path
              className="z"
              d="M301.27,141.12l34.59-8.5c-11.26-3.31-22.53-6.61-33.79-9.92-4.45-1.21-8.91-2.43-13.36-3.64-2.23-.63-4.45-1.26-6.68-1.89-2.28-.85-4.56-1.71-6.84-2.56-4.03-1.26-8.06-2.52-12.09-3.78-11.05-4.41-22.1-8.81-33.16-13.22l-21.95-10.32-19.8-11.33-15.27-11.13c-4.98-5.8-9.97-11.6-14.95-17.4-2.72-.36-5.44-.73-8.15-1.09,4.28,4.88,8.56,9.77,12.85,14.65l12.17,12.14,15.03,12.34,24.57,17.4c4.58,3.02,9.56,6.11,14.95,9.17,3.85,2.19,7.62,4.21,11.29,6.07,6.59,2.7,13.22,5.4,19.88,8.09,8.03,3.25,16.04,6.47,24.01,9.65,5.57,1.75,11.13,3.51,16.7,5.26Z"
            />
            <path
              className="ah"
              d="M373.31,194.88c-7.23,1.73-18.26,4.35-31.81,7.42-18.27,4.15-27.41,6.22-35.96,7.97-22.77,4.66-30.12,5.35-43.31,10.09-7.26,2.61-12.97,5.24-16.63,7.04-.09.2-.2.38-.32.54-1.2,1.65-3.76,1.95-4.61,2.02-2.82.55-5.68,1.13-8.59,1.75-3.09.66-6.11,1.33-9.06,2.02-.1,1.17-.7,1.79-.95,2.02-1.34,1.22-4.05,1.36-6.52.13-1.76,3.56-5.7,12.47-1.59,16.32.77.73,2.52,1.92,3.66,2.7,3.32,2.26,4.45,2.61,6.93,4.29,2.59,1.76,2.63,2.24,5.63,4.62,1.18.93,1.88,1.45,2.37,1.79.37.26.35.23.49.34,1.27.93,1.76,1.94,2.23,2.59.45.62.66.61,3.34,2.43,1.24.84,2.43,1.72,3.66,2.56,6.15,4.23,58.05,43.6,73.75,55.13,0,0,0,0,0,0,13.37,9.92,15.74,11.67,18.58,13.72,20.29,14.67,32.61,22.43,81.05,58.08,8.66,6.38,15.8,11.67,20.62,15.25,0,0,0,16.99,0,16.99,4.11,2.48,17.65,14.02,22.1,15.65,2.19-1.94,2.08-9.07,2.07-12.48-.73-5.18-2.91-19.33-5.73-19.49-.26-.02-2.21-.02-3.82,0-1.73.02-1.68.04-1.92.03-2.48-.13-4.03-2.43-7.15-5.83-.93-1.02-2.37-2.53-4.29-4.32-.67-7.56-2.94-14.35-4.13-20.78-1.34-7.18-4.16-14.23-9.29-22.64-.86-2.54-2.31-5.46-4.86-8.25-.94-1.03-1.33-1.12-3.91-3.47-2.36-2.15-3.46-3.31-5.49-5.28,0,0-2.11-2.05-6.69-6.21-10.1-9.16-27.63-19.71-27.63-19.71-13.99-8.43-32.21-19.29-54.07-31.84,3.55-2.34,7.1-4.68,10.65-7.02-12.14-6.52-24.28-13.04-36.42-19.56l14.63-7.08c-7.71-5.23-16.03-10.45-24.97-15.58-2.5-1.44-5-2.83-7.47-4.18,17.59-6.33,32.66-12.26,44.85-17.27,19.69-8.09,33.53-14.48,37.21-16.19,5.45-2.53,10.01-4.72,13.36-6.34Z"
            />
            <polygon
              className="aj"
              points="26.95 10.19 45.96 45.53 70.13 55.79 66.31 41.76 95.57 53.09 83.73 33.46 26.95 10.19"
            />
            <polygon
              className="ad"
              points="102.81 67.12 70.13 55.79 66.31 41.76 95.57 53.09 102.81 67.12"
            />
            <polygon
              className="ae"
              points="45.96 45.53 70.13 55.79 78.24 72.31 57.49 64.42 45.96 45.53"
            />
            <polygon
              className="aq"
              points="83.73 33.46 95.57 53.09 121.65 62.42 111.87 44.99 83.73 33.46"
            />
            <polygon
              className="ak"
              points="70.13 55.79 78.24 72.31 140.5 95.99 121.65 62.42 95.57 53.09 102.81 67.12 70.13 55.79"
            />
            <polygon
              className="ap"
              points="19.8 101.05 0 114.4 38.64 108.94 38.64 99.83 19.8 101.05"
            />
            <polygon
              className="ay"
              points="20.99 87.29 0 114.4 31.96 92.75 20.99 87.29"
            />
            <polygon
              className="be"
              points="38.64 95.99 31.96 92.75 19.8 101.05 38.64 99.83 38.64 95.99"
            />
            <polygon
              className="ab"
              points="38.64 108.94 61.26 106.31 38.64 95.99 38.64 108.94"
            />
            <polygon
              className="af"
              points="149.56 161.56 133.1 130.59 167.69 153.06 149.56 161.56"
            />
            <polygon
              className="aw"
              points="92.55 134.84 137.64 166.82 149.56 161.56 133.1 130.59 121.06 121.89 92.55 134.84"
            />
            <polygon
              className="av"
              points="167.69 153.06 179.86 161.56 157.2 172.08 147.27 162.57 167.69 153.06"
            />
            <polygon
              className="as"
              points="135.97 181.19 107.82 194.74 61.26 161.56 89.93 147.8 135.97 181.19"
            />
            <polygon
              className="bb"
              points="157.2 172.08 147.27 162.57 137.64 166.82 92.55 134.84 49.95 153.06 61.26 161.56 89.93 147.8 135.97 181.19 157.2 172.08"
            />
            <polygon
              className="bd"
              points="94.46 228.54 102.09 230.77 94.46 246.15 84.92 241.49 94.46 228.54"
            />
            <polygon
              className="ax"
              points="61.26 253.23 52.72 250.6 64.17 232.38 65.84 232.38 67.74 232.38 69.18 230.77 69.18 229.35 69.18 227.73 67.03 226.92 69.18 223.28 76.09 224.69 61.26 253.23"
            />
            <polygon
              className="bc"
              points="87.79 242.89 79.43 257.07 86.59 259.5 94.46 246.15 87.79 242.89"
            />
            <polygon
              className="az"
              points="76.09 224.69 94.46 228.54 84.92 241.49 87.79 242.89 79.43 257.07 61.26 253.23 76.09 224.69"
            />
            <polygon
              className="be"
              points="67.03 226.92 64.17 232.38 65.84 232.38 67.74 232.38 69.18 230.77 69.18 229.35 69.18 227.73 67.03 226.92"
            />
            <path
              className="ba"
              d="M145.59,25.16c3.63,6.67,7.12,13.91,10.3,21.7,1.01,2.47,1.95,4.9,2.82,7.3-1.87-1.22-4.07-2.86-6.26-5-2.01-1.97-3.52-3.89-4.63-5.52-4.81-5.54-10.12-12.51-15.01-20.93-4.85-8.36-8.12-16.13-10.36-22.71,75.46,26.52,175.69,55.31,249.91,85.26,12.65,5.95,26.39,12.71,36.02,22.06,1.83,4.81,3.66,9.62,5.49,14.44C324.44,89.56,235.01,57.36,145.59,25.16Z"
            />
            <path
              className="aa"
              d="M428.65,134.24c-4.83-3.81-9.65-7.62-14.48-11.43-1.93-5.16-3.86-10.32-5.79-15.48l6.3,5.86,4.28,4.34,2.77,3.26,2.77,3.91,2.14,4.45c.67,1.7,1.34,3.4,2.01,5.1Z"
            />
            <path
              className="at"
              d="M145.59,25.16c9.47,29.8,26.06,42.45,56.38,58.75,37.63,21.31,88.51,38.26,133.9,48.7l-34.59,8.5c12.07,5.12,59.27,11.68,51.53,28.74-9.88,9.11-30.97,12.72-43.65,18.21l59.4,8.7c17.72-8.04,35.75-19.36,41.27-36.63,5.11-10.08,3.86-27.61,4.06-38.38-1.98-.93-5.15-2.41-9.06-4.18-44.16-19.99-70.34-26.26-124.73-44.61-5.12-1.73-26.17-9.21-68.26-24.17-28.01-9.96-50.96-18.16-66.23-23.63Z"
            />
            <path
              className="au"
              d="M413.86,121.76c1.58,1.04,3.81,2.59,6.36,4.59,4.02,3.15,6.58,5.16,8.43,7.89,2.07,3.06,2.26,5.83,2.86,9.92,1.85,12.54,1.81,22.2,1.67,24.49-.45,7.49-.71,11.95-2.86,18.01-1.12,3.16-3.49,9.6-9.54,16.39-4.75,5.32-9.58,8.41-14.55,11.53-7.7,4.84-14.32,7.56-18.13,9.11-18.99,7.7-35.25,13.47-38.47,14.63-9.58,3.42-23.15,8.64-39.29,16.13-11.68-5.2-21.9-12.85-35.3-19.63,14.27-5.33,34.47-13.09,58.44-23.07,45.7-19.02,54.15-24.89,60.83-31.82,7.13-7.41,20.92-25.05,19.56-58.17Z"
            />
            <path
              className="ar"
              d="M309.15,188.07c19.15,2.81,38.3,5.61,57.44,8.42-29.6,7.34-43.36,10.94-50.21,12.83-1.76.49-7.23,2.02-14.63,3.78-5.16,1.23-9.76,2.21-12.09,2.7-5.33,1.12-7.23,1.42-14.63,2.97-6.91,1.44-8.39,1.83-10.18,2.43-4.2,1.4-7.41,3.07-9.54,4.32-2.81,1.48-5.62,2.97-8.43,4.45l-5.25,1.48c-1.74.07-3.57.19-5.47.36-1.71.15-3.34.33-4.91.54,8.43-5.18,5.92-10.9-1.55-15.53l79.43-28.74Z"
            />
            <path
              className="ao"
              d="M194.73,230.23l34.99-13.42c4.91,2.62,7.72,5.72,7.87,7.44.08.9-.09,1.77-.09,1.77s-.26,1.29-1.1,2.53c-.53.78-3.84,4.58-12.4,6.14-10.12,1.84-19.07-.99-24.15-2.6-2.15-.68-3.9-1.36-5.11-1.86Z"
            />
            <path
              className="an"
              d="M214.92,252.08l2.39-14.74h5.41c.41-.6,1.19-1.97,1.27-2.66-8.95.21-20.96-1.58-29.26-4.45-9.53,6.2-22.57,16.13-34.36,30.8-13.18,16.4-19.41,32.04-22.52,42.45,2.87-4.27,6.2-8.8,10.05-13.47,2.85-3.46,5.71-6.65,8.5-9.59.81-3.04,2.25-7.38,4.93-12.28,4.04-7.37,8.85-12.24,14.22-17.61,3.39-3.39,8.17-7.79,14.46-12.51,2-.22,4-.45,5.99-.67l18.92,14.74Z"
            />
            <path
              className="ai"
              d="M206.81,261.53c-2.55-3.02-5.66-7.39-7.95-13.09-1.69-4.21-2.49-8.03-2.86-11.1-1.37-.08-3.57-.06-5.99.67-.72.22-3,.97-7.84,5.03-1.49,1.25-3.51,3.05-5.72,5.4-2.3,2.23-5.35,5.4-8.59,9.44-.82,1.03-2.68,3.35-4.29,5.8-2.26,3.43-5.29,8.93-7.16,16.73,10.08-5.96,18.42-8.99,24.33-10.66,2.31-.65,5.73-1.52,11.19-3.19,6.36-1.95,11.48-3.77,14.89-5.04Z"
            />
            <polygon
              className="y"
              points="214.92 252.08 213.49 257.07 206.81 261.53 196.79 250.19 196 237.34 214.92 252.08"
            />
            <path
              className="am"
              d="M214.92,252.08l-1.43,4.99c-10.3,7.83-33.25,12.34-45.8,16.59-1.99.79-4.28,1.84-6.68,3.24-2.28,1.33-4.18,2.68-5.72,3.91-3.05,3.18-6.28,6.9-9.46,11.16-3.24,4.34-5.85,8.49-7.95,12.25,25.59-10.78,60.13-18.75,87.3-26.07l211.11,154.57v-17l-221.36-163.65Z"
            />
            <path
              className="ac"
              d="M332.12,281.09c-3.55,2.34-7.1,4.68-10.65,7.02l54.07,31.84c7.3,5.17,14.6,10.34,21.89,15.51,7.44,6.52,14.88,13.04,22.32,19.56l-6.36-10.93c-2.86-3.28-5.72-6.57-8.59-9.85-4.98-4.32-9.97-8.63-14.95-12.95-4.02-3.58-8.31-7.18-12.88-10.79-15.26-12.05-30.57-21.69-44.85-29.41Z"
            />
            <path
              className="al"
              d="M413.39,344.09l11.45,13.86,8.23,10.73,6.56,10.02,5.73,10.22,4.29,9.01,3.22,9.51,2.82,9.65-8.59-.27-9.54-10.52c-.74-3.1-1.48-6.21-2.23-9.31-.95-4-1.91-8-2.86-12.01-2.49-6.16-4.98-12.32-7.47-18.48-1.75-3.82-3.5-7.64-5.25-11.47l-6.36-10.93Z"
            />
          </g>
          <g>
            <path
              className="ag"
              d="M506.81,109.88h111.54v33.22h-70.64v61.45h56.14v33.22h-56.14v71.42h70.64v33.22h-111.54V109.88Z"
            />
            <path
              className="ag"
              d="M707.21,288.59v-124.9c0-35.88,20.82-57.13,60.23-57.13s60.23,21.26,60.23,57.13v24.58h-38.67v-26.91c0-15.28-8.18-21.59-20.45-21.59s-20.45,6.31-20.45,21.59v129.88c0,15.28,8.18,21.26,20.45,21.26s20.45-5.98,20.45-21.26v-35.54h38.67v32.89c0,35.88-20.82,57.13-60.23,57.13s-60.23-21.26-60.23-57.13Z"
            />
            <path
              className="ag"
              d="M918.03,287.26v-122.24c0-37.2,21.94-58.46,62.09-58.46s62.09,21.26,62.09,58.46v122.24c0,37.2-21.94,58.46-62.09,58.46s-62.09-21.26-62.09-58.46ZM1001.31,289.59v-126.89c0-16.61-8.18-22.92-21.19-22.92s-21.19,6.31-21.19,22.92v126.89c0,16.61,8.18,22.92,21.19,22.92s21.19-6.31,21.19-22.92Z"
            />
            <path
              className="ag"
              d="M1137.76,109.88h40.9v199.31h67.3v33.22h-108.2V109.88Z"
            />
            <path
              className="ag"
              d="M1332.22,287.26V109.88h40.9v180.04c0,16.61,7.81,22.59,20.82,22.59s20.82-5.98,20.82-22.59V109.88h39.41v177.38c0,37.2-20.82,58.46-60.98,58.46s-60.98-21.26-60.98-58.46Z"
            />
            <path
              className="ag"
              d="M1551.21,109.88h62.46c40.9,0,60.98,20.26,60.98,57.47v117.59c0,37.2-20.08,57.47-60.98,57.47h-62.46V109.88ZM1612.93,309.19c13.01,0,20.82-5.98,20.82-22.59v-120.91c0-16.61-7.81-22.59-20.82-22.59h-20.82v166.09h20.82Z"
            />
            <path
              className="ag"
              d="M1770.2,109.88h111.54v33.22h-70.64v61.45h56.14v33.22h-56.14v71.42h70.64v33.22h-111.54V109.88Z"
            />
          </g>
        </svg>
        <div className="mt-10 flex flex-col items-center justify-center text-left">
          <h2 className="w-full">
            <b className="text-lg">client:</b> Recolude
          </h2>
          <h2 className="w-full">
            <b className="text-lg">services:</b> branding, web design &
            development
          </h2>
          <h2 className="w-full">
            <b className="text-lg">tools:</b> Svelte, Three.js, Tailwind
          </h2>
          <img
            className="mt-10 rounded"
            alt="recolude homepage"
            src="recolude-home.webp"
          />
          <h2 className="mt-12 w-full font-dirty text-2xl">About</h2>
          <p>
            Recolude is the platform-agnostic solution for 3D spatial analytics
            & recording for XR, Research, Gaming, and Mocap projects.
          </p>
          <p className="mt-4">
            The goal of our collaboration was to improve their brand design and
            give them a sleek new website.
          </p>
          <div className="flex flex-col items-center justify-center 2xl:flex-row 2xl:flex-wrap">
            <img
              className="mt-10 2xl:w-1/2"
              alt="comparison of old Recolude logo to new design"
              src="logo-rebrand.webp"
            />
            <img
              className="mt-4 w-3/4 rounded 2xl:w-1/2"
              alt="Recolude logo mark variations"
              src="recolude-square.webp"
            />
          </div>

          <h3 className="mb-8 mt-2 w-full">Updated Logo</h3>
          <img
            className="mt-10 rounded"
            alt="a mockup showing various pages from the Recolude website"
            src="RecoludeMock2024.webp"
          />
          <h3 className="mb-8 mt-2 w-full">Web Design</h3>
          <div className="hidden lg:block">
            <Lottie animationData={desktopTrajectoryAnim} loop={true} />
          </div>
          <div className=" lg:hidden">
            <Lottie animationData={mobileTrajectoryAnim} loop={true} />
          </div>

          <h3 className="mb-8 mt-2 w-full">Trajectory Animation</h3>
          <RecoludeGrid />
          <h3 className="mb-8 mt-2 w-full">Background Grid Shader</h3>
          <ProjectStepper />
        </div>
      </div>
    </div>
  );
}
