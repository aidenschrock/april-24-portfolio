export default function ProjectStepper() {
  function nextProject() {
    console.log("next page");
  }
  return (
    <button
      className="mt-12 flex w-full justify-center gap-4 rounded border-2 border-dotted border-[#872346] py-2 text-lg transition-colors hover:bg-[#872346]"
      onClick={nextProject}
    >
      Next Project{" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
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
