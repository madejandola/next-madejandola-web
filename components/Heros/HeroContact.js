import React from "react";
import styles from "@/components/Heros/Hero.module.css";
import Fade from "react-reveal/Fade";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
export default function HeroContact() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl min-h-screen px-6 mx-auto text-left md:px-0">
      <Fade delay={600} duration={1200}>
        <div className="w-full max-w-2xl p-6 mx-auto text-center rounded-md shadow-lg md:p-12 bg-zinc-100 text-zinc-900">
          <h1 className="w-full mx-auto mb-8 font-mono text-4xl font-bold tracking-wider text-center text-zinc-900 md:text-6xl ">
            Contacto
          </h1>
          <h3 className="w-full mx-auto mb-8 font-sans text-xl text-center text-zinc-900 md:text-3xl">
            Podes contactarnos via mail o en cualquiera de nuestras redes sociales
          </h3>
          <div className="flex items-center justify-center space-x-3">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/madejandola/"
            >
              <AiOutlineFacebook className="text-6xl" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/madejandola//">
              <AiOutlineInstagram className="text-6xl" />
            </a>
          </div>
          <div className="relative mt-6 text-zinc-900">
            <p className="text-3xl select-all">
              madejandola@gmail.com
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
}
