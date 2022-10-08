import makeCarousel from "react-reveal/makeCarousel";
import Fade from "react-reveal/Fade";
import Image from "next/image";

const CarouselUI = ({ children }) => <div>{children}</div>;
const Carousel = makeCarousel(CarouselUI);

export default function HeroSlider({ title }) {
  return (
    <div
      className="relative flex items-center justify-center w-full overflow-hidden bg-gray-800"
      style={{ minHeight: "70vh" }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <h1 className="font-mono text-white text-7xl">{title}</h1>
      </div>
      <div className="absolute inset-0 z-0 opacity-20">
        <Carousel defaultWait={3000} maxTurns={100} /*wait for 1000 milliseconds*/>
          <Fade>
            <Image
              alt="Imagen de fondo"
              src="https://images.unsplash.com/photo-1598463166261-357c23778812?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2018&q=80"
              placeholder="blur"
              blurDataURL="https://images.unsplash.com/photo-1598463166261-357c23778812?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2018&q=80"
              layout="fill"
              width={1918}
              height={867}
              className="object-top w-full h-auto transform -translate-y-4"
            />
          </Fade>
          <Fade>
            <Image
              alt="Imagen de fondo"
              src="https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              placeholder="blur"
              blurDataURL="https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              layout="fill"
              width={1918}
              height={1014}
              className="object-top w-full h-auto transform -translate-y-4"
            />
          </Fade>
          <Fade>
            <Image
              alt="Imagen de fondo"
              src="https://images.unsplash.com/photo-1584396888493-06386077e877?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80"
              placeholder="blur"
              blurDataURL="https://images.unsplash.com/photo-1584396888493-06386077e877?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80"
              layout="fill"
              width={1917}
              height={1015}
              className="object-top w-full h-auto transform -translate-y-4"
            />
          </Fade>
        </Carousel>
      </div>
    </div>
  );
}
