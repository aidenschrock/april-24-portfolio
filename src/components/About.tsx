import Image from "next/image";
import profilePic from "../assets/portrait.png";

export default function About() {
  return (
    <section
      id="about"
      className="relative flex w-full flex-col items-center justify-center gap-6 p-6 sm:p-14  md:gap-32 lg:flex-row lg:py-40"
    >
      <Image
        className="w-1/3 rounded"
        alt="Aiden in New York"
        src="portrait.webp"
        width={600}
        height={800}
      />

      <div className="flex flex-col">
        <h2 className="font-dirty text-5xl sm:text-7xl md:text-8xl lg:text-9xl">
          Hello!
        </h2>{" "}
        <p className="max-w-3xl bg-transparent font-zodiak text-xl font-light sm:text-2xl lg:max-w-lg lg:text-3xl">
          Hi, I&#8217;m Aiden—a creative developer based in Austin, TX. I
          collaborate directly with companies and partner with agencies to bring
          ideas to life on the web. While development is my core expertise, my
          passion for design and detail shines through in crafting seamless
          animations and immersive user experiences.
          <br />
          <br />
          When I&#8217;m not building cool websites, you&#8217;ll likely find me
          baking sweets, scaling boulders, or diving into the medieval world of{" "}
          <i>Kingdom Come: Deliverance II</i>.
        </p>
      </div>
    </section>
  );
}
