import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import makeCarousel from "react-reveal/makeCarousel";
import Fade from "react-reveal/Fade";
import HeroContact from "../components/Heros/HeroContact";
import Link from "next/link";
import Image from "next/image";
import { TRAMAS } from '@/utils/tramas';

const CarouselUI = ({ children }) => <div>{children}</div>;
const Carousel = makeCarousel(CarouselUI);

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <main className="flex flex-col w-full min-h-screen max-w-screen overscroll-auto scroll-smooth">
          <div
            className="relative flex items-center justify-center w-full min-h-screen px-3 overflow-hidden bg-gray-900 "
          >
            <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-3xl p-6">
              <div className="lg:px-0">
                <h2 className="mt-6 mb-6 font-sans text-3xl text-center text-white md:text-6xl">Sumérgete en un universo lleno de historias que nacen en los hilos de América Latina</h2>
              </div>
              <Link href="/tramas" >
                <a className="btn red">Explorar trama</a>
              </Link>
            </div>
            <div className="absolute inset-0 z-0 opacity-40">
              <Carousel defaultWait={4000} maxTurns={100}>
                <Fade>
                  <div className="relative object-cover object-center w-full h-auto min-h-screen ">
                    <Image
                      alt="Imagen de fondo"
                      src="http://madejandola.com/wp-content/uploads/2019/09/back-aliados.jpg"
                      layout="fill"
                      priority
                      className="relative object-cover object-center"
                    />
                  </div>
                </Fade>
                <Fade>
                  <div className="relative object-cover object-center w-full h-auto min-h-screen ">
                    <Image
                      alt="Imagen de fondo"
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
                      alt="Imagen de fondo"
                      src="https://res.cloudinary.com/djoqdhbiv/image/upload/q_auto:eco/v1664412269/web/Tramas/Tradici%C3%B3n%20Telera/choque-guzman-002_swfu43.jpg"
                      layout="fill"
                      className="relative object-cover object-center"
                    />
                  </div>
                </Fade>
              </Carousel>
            </div>
          </div>
          <div
            id="content"
            className="w-full min-h-screen "
          >
            <div className="grid w-full max-w-full gap-2 p-2 mx-auto sm:grid-cols-2 md:grid-cols-4">
              {TRAMAS.map((route, i) => {
                return (
                  <Link href={`/tramas/${route.slug}`} key={route.slug} >
                    <a className="w-full relative group overflow-hidden h-[50vh] bg-gray-900">
                      <div className="absolute z-10 m-3 duration-300 opacity-100 bottom-3 left-3 group-hover:opacity-0">
                        <h2 className="text-3xl text-white ">{route.title}</h2>
                        <div className="text-white">Explorar</div>
                      </div>
                      <div className="duration-300 opacity-30 group-hover:opacity-100">
                        <Image
                          alt={route.slug}
                          src={route.image}
                          layout="fixed"
                          height={500}
                          width={500}
                          objectFit="cover"
                        />
                      </div>
                    </a>
                  </Link>
                );
              })}
              <Link href="/tramas" >
                <a className="w-full h-[50vh] bg-red-600 col-span-2 flex justify-center items-center text-lg text-white hover:bg-red-500">
                  Explorar tramas
                </a>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center w-full min-h-screen bg-white " id="sobre-el-proyecto">
            <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl p-6 bg-white rounded shadow-lg ">
              <div className="flex flex-col items-center justify-center lg:px-0">
                <h2 className="mt-6 mb-6 font-sans text-3xl font-bold text-center ">Somos un pro­yec­to que busca con­tar las his­to­rias de­trás de los hilos de La­ti­noa­mé­ri­ca.</h2>
                <p className="mb-6 text-lg text-center">
                  A tra­vés de na­rra­ti­vas fo­to­grá­fi­cas y au­dio­vi­sua­les que­re­mos com­par­tir los en­cuen­tros que a lo largo de años hemos te­ni­do con te­je­dorxs y bor­da­dorxs de dis­tin­tos pun­tos del con­ti­nen­te y así, con­ta­giar nues­tra pa­sión por las tra­di­cio­nes tex­ti­les.
                </p>
                <Link href="/sobre-madejandola" >
                  <a className="btn yellow">Conocer más</a>
                </Link>
              </div>
            </div>
            <div>
              <Image src="http://madejandola.com/wp-content/uploads/2019/09/del-campo-a-la-ciudad-011.jpg"
                alt="imagen trama"
                layout="fill"
                width={1680}
                height={1080}
                objectFit="cover" />
            </div>
          </div>
          <div className="relative w-full min-h-screen overflow-hidden " id="contacto">
            <HeroContact />
            {/* <HeroSliderFull /> */}
          </div>
        </main>
      </div >
    </Layout >
  );
}
