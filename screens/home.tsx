"use client";

import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import bgHero from "../public/images/bg-hero.jpg";
import { FaArrowDown } from "react-icons/fa";

const HelloWorld = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-black rtl -z-10">
      <Image
        src={bgHero}
        alt="background"
        className="w-full h-full object-cover object-center bg-no-repeat opacity-40 pointer-events-none"
        layout="fill"
      />

      <div className="w-full h-full absolute text-center text-white flex flex-col justify-center items-center">
        <h1 className="text-7xl font-bold mb-4">ברוכים הבאים לעסק שלנו</h1>
        <p className="text-2xl mb-8">
          אנו מתמחים במתן שירותים איכותיים ומקצועיים ללקוחותינו. הצטרפו אלינו
          וגלו את ההבדל.
        </p>
        <button
          className="p-6 font-semibold rounded-full bg-black hover:scale-110 active:scale-90 shadow-lg text-center transition-transform"
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          <FaArrowDown className="text-2xl animate-bounce" />
        </button>
      </div>
    </div>
  );
};

export default HelloWorld;
