"use client"
import React, { useEffect } from "react";
import anime from "animejs";
import { gsap } from "gsap";

const AdrianBL = () => {
  useEffect(() => {
    // Anime.js animation
    const textWrapper = document.querySelector(".titulo");
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent!.replace(
        /\S/g,
        "<span class='letra'>$&</span>"
      );

      anime.timeline().add({
        targets: ".titulo .letra",
        translateY: [200, 0],
        easing: "easeOutExpo",
        opacity: 1,
        duration: 1700,
        delay: (el:any, i:any) => 400 + 70 * i,
      });
    }

    // GSAP animations
    gsap.from(".footer", {
      duration: 1.5,
      delay: 0.7,
      opacity: 0,
      y: 200,
      ease: "expo.inOut",
    });

    gsap.from(".menu ul li", {
      duration: 1.5,
      delay: 1,
      opacity: 0,
      y: -30,
      ease: "expo.inOut",
      stagger: 0.08,
    });

    gsap.from(".subtitulo", {
      duration: 1.5,
      delay: 1.5,
      opacity: 0,
      y: -50,
      ease: "expo.inOut",
    });

    gsap.from(".figura", {
      duration: 1.5,
      delay: 1.5,
      opacity: 0,
      ease: "expo.inOut",
    });
  }, []);

  return (
    <div className="bg-[#161616] text-white font-mono h-screen overflow-hidden">
      <p className="titulo text-[10rem] font-bold tracking-tight mt-20 ml-28 font-digital">
        ABHINAND
      </p>
      <p className="subtitulo text-[10rem] font-bold tracking-tight ml-[152px] -mt-[2.75rem] font-digital">
        P
      </p>
      <div
        className="figura absolute ml-[10rem] -mt-[6rem]"
        style={{
          width: 0,
          height: 0,
          borderLeft: "28px solid transparent",
          borderRight: "28px solid transparent",
          borderBottom: "70px solid aqua",
        }}
      ></div>

      <div className="menu absolute bottom-1/2 right-[-10rem] -rotate-90 px-5">
        <ul className="flex gap-4">
          <li>
            <a target="_blank" rel="noopener noreferrer" 
              href="https://github.com/abhinand-psq"
              className="hover:text-gray-500"
            >
              github
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" 
              href="https://x.com/abhinan58869434"
              className="hover:text-gray-500"
            >
              Twitter
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" 
              href=""
              className="hover:text-gray-500"
            >
             not opened
            </a>
          </li>
          <li>
            <a
              href="/service"
              className="hover:text-gray-500"
            >
              my stuff
            </a>
          </li>
        </ul>
      </div>

      <div className="footer absolute bottom-10 left-20 -rotate-90 text-xs tracking-wider flex items-center">
        <span className="border-t-2 border-white opacity-50 w-12 mr-4"></span>
        ABHINAND P
      </div>
    </div>
  );
};

export default AdrianBL;
