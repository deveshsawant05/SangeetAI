import React from "react";

import { Bellota } from "next/font/google";

// Load the Google Font
const bellota = Bellota({
  weight: ["400","700"],
  subsets: ["latin"],
});


export default function Logo (){

    return(
        <>
        <h1 className={`${bellota.className} text-7xl text-[--primary] font-bold`}>Sangeet<span className="text-[--secondary]">AI</span></h1>
        </>
    )
}