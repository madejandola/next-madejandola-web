// import Link from "next/link"
import styles from "@/styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const ExternalLink = ({ href, children }) => (
  <a target="_blank" rel="noopener noreferrer" href={href}>
    {children}
  </a>
);

export default function Footer() {
  return (
    <div className="pt-24 bg-gray-100 sm:pt-0">
      <footer className="p-4 bg-white sm:p-6">
        <div className="flex flex-col items-center justify-center w-full max-w-6xl pt-6 mx-auto">
          <div className="grid w-full gap-8 text-center sm:grid-cols-3 sm:gap-6">
            <div className="flex items-center justify-center">
              <Image src="/logo-xl.svg" width="217" height="176" alt="Madejandola" className="" />
            </div>
            <div className="flex flex-col items-start justify-start text-left">
              <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase ">Doná</h2>
              <p className="py-3 text-lg text-gray-600 md:py-0 md:pb-3">
                ¿Te gusta lo que hacemos? Puedes ayudarnos a contar más historias donando a Madejándola. Con tu dinero podremos gestionar viajes, pagar a nuestros colaboradores y sostener el mantenimiento y actualización del sitio.
              </p>
            </div>
            <div className="grid gap-5 text-left sm:grid-cols-2">
              <div>
                <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase ">Seguinos</h2>
                <ul className="text-gray-600">
                  <li className="py-3 text-lg md:py-0 md:pb-3">
                    <ExternalLink href="https://www.instagram.com/madejandola/" className="transition duration-150 ease-in-out hover:text-accents-6 hover:font-bold">Instagram</ExternalLink>
                  </li>
                  <li className="py-3 text-lg md:py-0 md:pb-3">
                    <ExternalLink href="https://www.facebook.com/madejandola/" className="transition duration-150 ease-in-out hover:text-accents-6 hover:font-bold">Facebook</ExternalLink>
                  </li>
                  <li className="py-3 text-lg md:py-0 md:pb-3">
                    <ExternalLink href="https://vimeo.com/contarloshilos" className="transition duration-150 ease-in-out hover:text-accents-6 hover:font-bold">Vimeo</ExternalLink>
                  </li>
                  <li className="py-3 text-lg md:py-0 md:pb-3">
                    <ExternalLink href="https://soundcloud.com/contarloshilos" className="transition duration-150 ease-in-out hover:text-accents-6 hover:font-bold">Soundcloud</ExternalLink>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-lg font-semibold text-gray-900 uppercase ">Madejandola</h2>
                <ul className="text-gray-600">
                  <li className="py-3 text-lg md:py-0 md:pb-3">
                    <Link href="/tramas">
                      <a className="transition duration-150 ease-in-out hover:text-accents-6 hover:font-bold">Tramas</a>
                    </Link>
                  </li>
                  <li className="py-3 text-lg md:py-0 md:pb-3">
                    <Link href="/perfiles">
                      <a className="transition duration-150 ease-in-out hover:text-accents-6 hover:font-bold">Perfiles</a>
                    </Link>
                  </li>
                  <li className="py-3 text-lg md:py-0 md:pb-3">
                    <Link href="/aliados">
                      <a className="transition duration-150 ease-in-out hover:text-accents-6 hover:font-bold">La Red</a>
                    </Link>
                  </li>
                  <li className="py-3 text-lg md:py-0 md:pb-3">
                    <Link href="/sobre-madejandola">
                      <a className="transition duration-150 ease-in-out hover:text-accents-6 hover:font-bold">Sobre madejandola</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-center">
          <span className="text-sm text-gray-500 sm:text-center">© 2022 Madejandola. Todos los derechos reservados.
          </span>
        </div>
      </footer>
    </div>
  );
}
