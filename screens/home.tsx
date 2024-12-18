"use client";

import Image from "next/legacy/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import bgHero from "../public/images/bg-hero.jpg";
import { FaArrowDown } from "react-icons/fa";
import { Personal } from "@/types";
import { useState, useEffect } from "react";

interface HelloWorldProps {
  personalTexts: Personal[]
  logo: string
}

const HelloWorld = ({ personalTexts, logo }: HelloWorldProps) => {
  const [heroTitle, setHeroTitle] = useState<string | null>(null);
  const [heroDescription, setHeroDescription] = useState<string | null>(null);

  useEffect(() => {
    const titleText = personalTexts.find(text => text.place === 'hero-title');
    const descriptionText = personalTexts.find(text => text.place === 'hero-description');
    setHeroTitle(titleText ? titleText.content : null);
    setHeroDescription(descriptionText ? descriptionText.content : null);
  }, [personalTexts]);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-black rtl -z-10">
      <Image
        src={bgHero}
        alt="רקע - סל פירות"
        className="w-full h-full object-cover object-center bg-no-repeat opacity-40 pointer-events-none"
        layout="fill"
      />

      <div className="w-full h-full absolute text-center text-white flex flex-col justify-center items-center">

        <Image src={logo} alt="לוגו העסק" width={200} height={200} />

        <h1 className="text-7xl font-bold mb-4 text-shadow-lg">
          {heroTitle || <span className="w-48 h-12 bg-gray-300 animate-pulse"></span>}
        </h1>
        <p className="text-2xl mb-8 text-shadow-md">
          {heroDescription || <span className="w-64 h-6 bg-gray-300 animate-pulse"></span>}
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
