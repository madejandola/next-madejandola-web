import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import Link from "next/link";
import { TRAMAS } from '@/utils/tramas';
const TramasPage = () => {
  return (
    <Layout>
      <div className="grid w-full grid-cols-1 gap-3 px-3 mx-auto mt-24 md:grid-cols-2 2xl:grid-cols-3">
        {TRAMAS.map((n) => (
          <>
            <div className='relative w-full h-64 overflow-hidden'>
              <Link
                key={n.slug}
                href={`/tramas/${n.slug}`}
                className="relative flex overflow-hidden text-left text-white bg-gray-900 rounded-md cursor-pointer group"
              >
                <a
                  className="relative flex h-64 overflow-hidden text-left text-white bg-gray-900 rounded-md cursor-pointer group "
                  alt={n.title}
                  title={n.title}
                  aria-label={n.title}
                >
                  <span className="absolute bottom-0 left-0 z-10 p-3 font-mono text-3xl group-hover:text-amber-400">
                    {n.title}
                  </span>
                </a>
              </Link>
              <img src={n.image} alt={n.title} className="absolute inset-0 opacity-60" />
            </div>
          </>
        ))}
      </div>
    </Layout>
  );
};

export default TramasPage;
