export default function LiveButton(props) {
  return (
    <a
      href={props.link}
      target="_blank"
      className="font-oxygen project-button mt-12 flex w-11/12 max-w-2xl items-center justify-center gap-4 rounded border-2 border-dotted border-white py-2 text-lg transition-colors hover:bg-slate-200 hover:text-black lg:text-2xl xl:text-3xl"
    >
      Live Link
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="live-button-icon w-4 lg:w-6 xl:w-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
        />
      </svg>
    </a>
  );
}
