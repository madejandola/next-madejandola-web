import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "@/components/Layout";
import HeroContact from "@/components/Heros/HeroContact";
import makeCarousel from "react-reveal/makeCarousel";
import Fade from "react-reveal/Fade";
import Image from "next/image";

export default function ContactPage() {
  const CarouselUI = ({ children }) => <div>{children}</div>;
  const Carousel = makeCarousel(CarouselUI);

  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Contacto | Madejandola</title>
        </Head>
        <main className={styles.main}>
          <div className="relative flex items-center justify-center w-full min-h-screen overflow-hidden">
            <HeroContact />
            <div className="absolute inset-0 z-0">
              <Carousel defaultWait={6000} maxTurns={100} /*wait for 1000 milliseconds*/>
                <Fade>
                  <div className="relative object-cover object-center w-full h-auto min-h-screen ">
                    <Image
                      alt="Imagenes de fondo"
                      src="https://res.cloudinary.com/djoqdhbiv/image/upload/q_auto:eco/v1664335751/web/ImagenesFondo/legado-dona-santa-009_b0pqmb.jpg"
                      layout="fill"
                      priority
                      className="relative object-cover object-center"
                    />
                  </div>
                </Fade>
                <Fade>
                  <div className="relative object-cover object-center w-full h-auto min-h-screen ">
                    <Image
                      alt="Imagenes de fondo"
                      src="https://res.cloudinary.com/djoqdhbiv/image/upload/q_auto:eco/v1664412269/web/Tramas/Tradici%C3%B3n%20Telera/choque-guzman-002_swfu43.jpg"
                      layout="fill"
                      className="relative object-cover object-center"
                    />
                  </div>
                </Fade>
              </Carousel>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
