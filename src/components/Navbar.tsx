import { useState, useEffect } from "react";
import { useLenis } from "@studio-freight/react-lenis";

function Navbar() {
  const [mobileNavShow, setMobileNavShow] = useState(false);

  const lenis = useLenis();

  // let menu: HTMLElement;
  // let hero: HTMLElement;
  // let about: HTMLElement;
  // let contact: HTMLElement;
  // useEffect(() => {
  //   menu = document.getElementById("menu")!;
  //   hero = document.getElementById("hero")!;
  //   about = document.getElementById("about")!;
  //   contact = document.getElementById("contact")!;
  // }, []);

  function toggleMenu() {
    setMobileNavShow(!mobileNavShow);
  }

  useEffect(() => {
    addEventListener("hashchange", () => {
      setMobileNavShow(false);
    });
  }, []);

  return (
    <>
      <nav
        aria-label="Main menu"
        role="navigation"
        className="hidden uppercase font-overpass z-20 fixed backdrop-blur-md w-full md:flex items-center justify-between px-24 py-6"
      >
        <h4 className="text-2xl  font-bold italic">Aiden Schrock</h4>
        <ul className="flex gap-4 text-2xl font-bold  text-slate-200 ">
          <li
            onClick={() => lenis?.scrollTo("#home")}
            className="hover:text-pink-600 cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={() => lenis?.scrollTo("#work")}
            className="hover:text-pink-600 cursor-pointer"
          >
            Work
          </li>
          <li
            onClick={() => lenis?.scrollTo("#contact")}
            className="hover:text-pink-600 cursor-pointer"
          >
            Contact
          </li>
        </ul>
      </nav>

      <nav
        aria-expanded={`${mobileNavShow ? "true" : "false"}`}
        aria-label="Mobile menu"
        role="navigation"
        className="flex font-overpass flex-col fixed w-full z-20 backdrop-blur-md  uppercase md:hidden"
      >
        <div className="flex p-6 items-center justify-between w-full z-20">
          <h4 className="text-xl  font-bold italic">Aiden Schrock</h4>
          <button aria-label="Mobile Menu" onClick={toggleMenu}>
            <svg
              className={`fill-slate-200 ${mobileNavShow ? "hidden" : "flex"}`}
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              viewBox="0 -960 960 960"
              width="40"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
            <svg
              className={`fill-slate-200 ${mobileNavShow ? "flex" : "hidden"}`}
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              viewBox="0 -960 960 960"
              width="40"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </button>
        </div>

        <div
          className={`text-3xl bg-black h-screen w-screen  z-10 absolute text-slate-200  ${
            mobileNavShow ? "flex blockScroll" : "hidden"
          }`}
        >
          <ul className="flex flex-col gap-8 mr-0 ml-auto text-right pr-12 pb-32 justify-end">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
