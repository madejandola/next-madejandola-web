import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import Link from "next/link";
import { PERFILES } from '@/utils/perfiles';
import Image from "next/future/image";

const PerfilesPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className="relative flex items-center justify-center w-full p-6 pt-40 pb-24 mb-6 overflow-hidden bg-fixed bg-bottom bg-cover" style={{ backgroundImage: 'url(http://madejandola.com/wp-content/uploads/2019/09/Karen-Siminovich-portada.jpg)' }}>
            <div className="relative z-10 flex flex-col justify-start w-full max-w-6xl px-4 mx-auto">
              <h2 className="mb-3 font-sans text-6xl font-medium text-white">Perfiles</h2>
              <p className="max-w-2xl text-xl text-white">Aquí encontrarás entrevistas y perfiles que realizamos a investigadores, docentes y creadores cuyo trabajo está ligado a la reflexión sobre los textiles artesanales.
              </p>
            </div>
            <div className="absolute inset-0 z-0 opacity-90 from-amber-600 via-amber-700 to-transparent bg-gradient-to-br" />
          </div>
          <div className="grid w-full max-w-6xl grid-cols-1 gap-3 px-3 mx-auto mt-3 md:grid-cols-2 2xl:grid-cols-3">
            {PERFILES.map((n) => (
              <div key={n.slug} className="relative h-64 overflow-hidden bg-gray-900 rounded-md shadow-lg group">
                <Link
                  href={`/perfiles/${n.slug}`}
                >
                  <a
                    className="absolute bottom-0 left-0 z-10 flex text-left text-white cursor-pointer "
                    alt={n.title}
                    title={n.title}
                    aria-label={n.title}
                  >
                    <span className="p-3 font-sans text-3xl group-hover:text-amber-400">
                      {n.title}
                    </span>
                  </a>
                </Link>
                <Image
                  alt={n.title}
                  width={500}
                  height="500"
                  placeholder='blur'
                  blurDataURL={n.image}
                  className="relative inset-0 z-0 object-cover w-full h-64 opacity-30 "
                  src={n.image}
                  layout="fixed"
                />
              </div>
            ))}
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default PerfilesPage;
