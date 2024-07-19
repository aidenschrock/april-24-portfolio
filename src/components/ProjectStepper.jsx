"use client";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function ProjectStepper() {
  let projectArray = ["/spongebob", "/spilltracker", "/recolude"];
  const router = useRouter();
  const pathname = usePathname();

  function nextProject() {
    if (pathname.includes("spongebob")) {
      router.push("/spilltracker");
    } else if (pathname.includes("spilltracker")) {
      router.push("/recolude");
    } else {
      router.push("/spongebob");
    }
  }
  return (
    <button
      data-testid="next-project"
      className="font-oxygen project-button mt-12 flex w-11/12 max-w-2xl items-center justify-center gap-4 rounded border-2 border-dotted border-white py-2 text-lg transition-colors hover:bg-slate-200 hover:text-black lg:text-2xl xl:text-3xl"
      onClick={nextProject}
    >
      Next Project{" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="project-button-icon w-8 lg:w-10 xl:w-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
        />
      </svg>
    </button>
  );
}
