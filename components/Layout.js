import Head from "next/head";
import { useRouter } from "next/router";
import NextLink from "next/link";
import ActiveLink from "@/components/ActiveLink";
import Offcanvas from "@/components/Offcanvas/Offcanvas";
import SimpleReactLightbox from "simple-react-lightbox";
import Footer from "@/components/Footer";
import Headroom from "react-headroom";
import { motion } from "framer-motion";
import Image from "next/image";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { ROUTES } from '@/utils/routes';

export default function Container(props) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "Madejandola",
    description: `Sumérgete en un universo lleno de historias que nacen en los hilos de América Latina`,
    image: "https://cdn.sanity.io/images/sondxd7u/production/f6e5c6142e764a104096ab92ae381c3193fcf565-1805x897.png?w=2000&fit=max&auto=format",
    type: "website",
    ...customMeta,
  };

  return (
    <div className="bg-white">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`http://www.madejandola.com/${router.asPath}`} />
        <link rel="canonical" href={`http://www.madejandola.com/${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Madejandola" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@madejandola" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && <meta property="article:published_time" content={meta.date} />}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Offcanvas />
      <Headroom disableInlineStyles>
        <div className="relative flex items-center justify-center h-20 max-w-6xl px-4 mx-auto">
          <div className="">
            <NextLink href="/">
              <a className="absolute top-0 flex items-center justify-center p-0 left-4 hover:opacity-95">
                <Image src="/logo.svg" width="260" height="80" alt="Madejandola" />
                <span className="sr-only">
                  Madejandola
                </span>
              </a>
            </NextLink>
          </div>
          <nav className="items-center justify-end hidden w-full h-full py-4 sm:pr-24 lg:flex md:py-6 lg:py-0 ">
            {ROUTES.map((route, i) => {
              return (
                <ActiveLink url={route.slug} key={route.slug} title={route.title} />
              );
            })}
          </nav>
          <div className="absolute top-0 items-center hidden h-full space-x-3 nav-right lg:flex right-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/madejandola/"
            >
              <AiOutlineFacebook className="text-3xl" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/madejandola//">
              <AiOutlineInstagram className="text-3xl" />
            </a>
          </div>
        </div>
      </Headroom>
      <motion.div
        initial="pageInitial"
        animate="pageAnimate"
        key={router.route}
        transition={{ type: "spring", duration: 0.00001 }}
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        <SimpleReactLightbox>
          <main id="skip" className="flex flex-col justify-center bg-white">
            {children}
            <Footer />
          </main>
        </SimpleReactLightbox>
      </motion.div>
    </div>
  );
}
