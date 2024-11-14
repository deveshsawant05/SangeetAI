import Spline from "@splinetool/react-spline";
import React from "react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import Link from "next/link";

import { Montserrat } from "next/font/google";

// Load the Google Font
const montserrat  = Montserrat({
  weight: ["400","500","600","700"],
  subsets: ["latin"],
});



export default function Home() {
  return (
    <div className="bg-[--background] relative h-screen overflow-hidden w-full">
      <div className="h-full w-full">
        <Spline
          scene="https://prod.spline.design/QC9HuQsRsEnZbJ4z/scene.splinecode" 
        />
      </div>
      {/* Text Overlay */}
      <div className={`${montserrat.className} absolute h-min flex-col w-2/3 gap-3 inset-0 top-0 flex mt-24 ms-24`}>
        <Logo />
        <div className={`${montserrat.className} text-[--foreground] w-full `}>
          <p>Unleash your creativity and let SangeetAI transform your musical ideas into full-fledged songs! Our AI-powered song maker combines advanced technology with artistic expression, helping you compose original melodies, lyrics, and beats—perfectly tuned to your style. Whether you&apos;re a seasoned musician, an aspiring songwriter, or just looking for a bit of inspiration, Sangeet AI is your partner in crafting the perfect sound.Ready to create your masterpiece? </p>
          <p>Sign up or log in to get started!</p>
        </div>
        <div className="flex gap-5 w-full">
          <Button asChild className="text-base font-semibold px-20 bg-[--primary] opacity-100 hover:bg-white transition duration-300 border-2 border-[--primary] hover:border-2">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild className="text-base font-semibold px-16 bg-[--secondary] opacity-100 hover:bg-white transition duration-300 border-2 border-[--secondary] hover:border-2">
            <Link href="/signup">SignUp</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
