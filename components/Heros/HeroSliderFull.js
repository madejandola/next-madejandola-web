import makeCarousel from "react-reveal/makeCarousel";
import Fade from "react-reveal/Fade";
import Image from "next/image";

const CarouselUI = ({ children }) => <div>{children}</div>;
const Carousel = makeCarousel(CarouselUI);

export default function HeroSliderFull() {
  return (
    <div className="absolute inset-0 flex items-center justify-center w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <Carousel defaultWait={3000} maxTurns={100} /*wait for 1000 milliseconds*/>
          <Fade>
            <div className="relative object-cover object-center w-full h-auto min-h-screen ">
              <Image
                alt="Imagen de fondo"
                src="https://images.unsplash.com/photo-1472491235688-bdc81a63246e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                blurDataURL="https://images.unsplash.com/photo-1472491235688-bdc81a63246e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                placeholder="blur"
                layout="fill"
                className="relative object-cover object-center"
              />
            </div>
          </Fade>
          <Fade>
            <div className="relative object-cover object-center w-full h-auto min-h-screen ">
              <Image
                alt="Imagen de fondo"
                src="https://images.unsplash.com/photo-1603277160434-df7471138363?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                blurDataURL="https://images.unsplash.com/photo-1603277160434-df7471138363?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                placeholder="blur"
                layout="fill"
                className="relative object-cover object-center"
              />
            </div>
          </Fade>
          <Fade>
            <div className="relative object-cover object-center w-full h-auto min-h-screen ">
              <Image
                alt="Imagen de fondo"
                src="https://images.unsplash.com/photo-1584396888493-06386077e877?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80"
                blurDataURL="https://images.unsplash.com/photo-1584396888493-06386077e877?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80"
                placeholder="blur"
                layout="fill"
                className="relative object-cover object-center"
              />
            </div>
          </Fade>
        </Carousel>
      </div>
    </div>
  );
}
