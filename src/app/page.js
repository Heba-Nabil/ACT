"use client";

import React, { useRef } from "react";
import hover3d from "../utils/hover";
import Image from "next/image";

export default function Home() {
  const hero = useRef(null);
  const hero2 = useRef(null);

  const hover2 = hover3d(hero, {
    x: 10,
    y: 15,
    z: 1,
  });

  const hover3 = hover3d(hero2, {
    x: -10,
    y: -15,
    z: -1,
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-[url('https://images.unsplash.com/photo-1590497008432-598f04441de8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1991&q=80')] before:content-[''] before:absolute before:top-0 before:w-full before:h-screen before:bg-black	before:opacity-70">
      <div className="z-10	">
        <h3 className="text-3xl	 text-white	font-black text-center mb-7">
          Integrated Sourcing Trading and Supply <br /> Chain Solutions
        </h3>
      </div>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <a href="" ref={hero}>
          <Image
            className="landingImg "
            src="/act.PNG"
            alt="ACT Logo"
            width={300}
            height={300}
            priority
            style={{
              objectFit: "contain",
              transform: hover2.transform,
              transition: hover2.transition,
            }}
          />
        </a>

        <a href="" ref={hero2}>
          <Image
            className="landingImg"
            src="/alliance.PNG"
            alt="alliance Logo"
            width={300}
            height={300}
            priority
            style={{
              objectFit: "contain",
              transform: hover3.transform,
              transition: hover3.transition,
            }}
          />
        </a>
      </div>
    </main>
  );
}
