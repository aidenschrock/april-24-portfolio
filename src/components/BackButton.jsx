import Link from "next/link";
export default function BackButton() {
  return (
    <div className="fixed bottom-4 left-2 z-10 w-24 rounded-full mix-blend-difference backdrop-blur-sm hover:mix-blend-normal md:top-4 lg:bottom-auto lg:left-12 lg:top-12 lg:w-28 ">
      <Link href="/">
        <div className="rounded-full bg-white px-4 py-2 ">
          <svg
            id="a"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 389.96 82.09"
            className="mix-blend-darken "
          >
            <defs>
              <style>
                {`
      .b {
        fill: #000;
        stroke-width: 0px;
      }`}
              </style>
            </defs>
            <g>
              <path
                className="b"
                d="M102.21,77.2V4.89h25.54c10.84,0,18.93,1.4,24.25,4.2,5.33,2.8,7.99,7.45,7.99,13.97,0,1.05-.08,2.09-.22,3.11-.15,1.02-.48,2.18-1.01,3.48-.52,1.3-1.21,2.48-2.07,3.53-.86,1.05-2.05,2.08-3.58,3.08-1.53,1-3.32,1.79-5.36,2.34,5.07,1.09,8.94,3.17,11.62,6.24,2.68,3.08,4.02,6.87,4.02,11.38,0,6.81-2.73,12.01-8.19,15.6-5.46,3.59-13.01,5.38-22.66,5.38h-30.34ZM117.36,34.75h12.97c10.02,0,15.03-3.37,15.03-10.12,0-3.78-1.44-6.38-4.33-7.8-2.89-1.41-7.48-2.12-13.77-2.12h-9.89v20.04ZM117.36,67.52h13.13c11.62,0,17.44-4.01,17.44-12.04,0-4.05-1.45-6.96-4.36-8.74s-7.4-2.67-13.47-2.67h-12.74v23.44Z"
              />
              <path
                className="b"
                d="M167.09,77.2L197.21,4.84h16.49l29.67,72.36h-15.54l-8.1-20.43h-28.67l-8.16,20.43h-15.81ZM194.87,46.79h21.01c-6.71-18.99-10.15-28.79-10.34-29.42l-10.67,29.42Z"
              />
              <path
                className="b"
                d="M287.07,78.23c-11.96,0-21.44-3.32-28.44-9.97-7-6.65-10.51-15.83-10.51-27.54s3.66-20.05,10.98-26.78c7.32-6.73,16.9-10.09,28.75-10.09,9.57,0,17.68,1.96,24.31,5.87l-4.75,10.12c-6.37-3.46-12.78-5.18-19.22-5.18-7.53,0-13.48,2.39-17.85,7.18-4.38,4.79-6.57,11.21-6.57,19.27s2.11,14.82,6.34,19.4c4.23,4.57,10.25,6.86,18.08,6.86,6.85,0,13.65-1.51,20.4-4.54l2.01,10.46c-6.26,3.29-14.1,4.94-23.53,4.94Z"
              />
              <path
                className="b"
                d="M324.01,77.2V4.89h15.2v32.58c2.65-3.09,8.06-8.87,16.23-17.32,8.18-8.46,13.05-13.54,14.61-15.25h17.94l-30.96,32.53,32.92,39.78h-17.77l-26.71-32.43-6.26,4.64v27.79h-15.2Z"
              />
            </g>
            <path
              className="b"
              d="M41.04,82.09L0,41.04,41.04,0l9.58,9.58-31.47,31.47,31.47,31.47-9.58,9.58Z"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
}