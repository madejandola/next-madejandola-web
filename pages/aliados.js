import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "@/components/Layout";
import Image from "next/image";

export default function AliadosPage() {
    return (
        <Layout>
            <div className={styles.container}>
                <Head>
                    <title>Aliados | Madejandola</title>
                </Head>
                <main className={styles.main}>
                    <div className="relative flex items-center justify-center w-full p-6 pt-40 pb-24 overflow-hidden bg-fixed bg-center bg-cover" style={{ backgroundImage: 'url(http://madejandola.com/wp-content/uploads/2019/09/back-aliados.jpg)' }}>
                        <div className="relative z-10 flex flex-col justify-start w-full max-w-6xl px-4 mx-auto">
                            <h2 className="mb-3 font-sans text-6xl font-medium text-white">La Red</h2>
                            <p className="max-w-2xl text-xl text-white">A lo largo de 6 años de trabajo, MadejándoLA ha generado una red de proyectos que acompañan su camino. Esta lista está compuesta de proyectos productivos tanto de diseñadores como de colectivos de artesanxs, espacios de comercialización de textiles, cooperativas, instituciones educativas, asociaciones civiles y organizaciones no gubernamentales que fomentan el trabajo comunitario.</p>
                        </div>
                        <div className="absolute inset-0 z-0 opacity-80 from-blue-800 via-blue-900 to-transparent bg-gradient-to-br" />
                    </div>
                    <div className="grid max-w-6xl grid-cols-2 gap-6 mx-auto lg:grid-cols-5">
                        <div className="flex items-center justify-center p-6">
                            <div className="w-full max-w-xs" >
                                <a href="https://www.facebook.com/amanoarte.org/" target="_blank" rel="noopener noreferrer">
                                    <Image width="342" height="400" src="https://i2.wp.com/madejandola.com/wp-content/uploads/2019/09/amanoarte.jpg?fit=342%2C400" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-6">
                            <div className="w-full max-w-xs" >
                                <a href="https://www.facebook.com/pg/bochustudio/" target="_blank" rel="noopener noreferrer">
                                    <Image width="393" height="400" src="https://i2.wp.com/madejandola.com/wp-content/uploads/2019/09/bochu.jpg?fit=393%2C400"  alt=""/>
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-6">
                            <div className="w-full max-w-xs" >
                                <Image width="400" height="296" src="https://i1.wp.com/madejandola.com/wp-content/uploads/2019/09/chamuchic.jpg?fit=400%2C296"  alt=""/>
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-6">
                            <div className="w-full max-w-xs" >
                                <Image width="347" height="400" src="https://i0.wp.com/madejandola.com/wp-content/uploads/2019/09/Chuladas.jpg?fit=347%2C400"  alt=""/>
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-6">
                            <div className="w-full max-w-xs" >
                                <Image width="400" height="359" src="https://i1.wp.com/madejandola.com/wp-content/uploads/2019/09/oaxaca-cultural.jpg?fit=400%2C359"  alt=""/>
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-6">
                            <div className="w-full max-w-xs" >
                                <Image width="400" height="228" src="https://i0.wp.com/madejandola.com/wp-content/uploads/2019/09/denisse-kuri.jpg?fit=400%2C228"  alt=""/>
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-6">
                            <div className="w-full max-w-xs" >
                                <Image width="400" height="400" src="https://i1.wp.com/madejandola.com/wp-content/uploads/2019/09/fashion-revolution.jpg?fit=400%2C400"  alt=""/>
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-6">
                            <div className="w-full max-w-xs" >
                                <Image width="400" height="119" src="https://i2.wp.com/madejandola.com/wp-content/uploads/2019/09/giraluna.jpg?fit=400%2C119"  alt=""/>
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-6">
                            <div className="w-full max-w-xs" >
                                <Image width="800" height="800" src="https://i2.wp.com/madejandola.com/wp-content/uploads/2019/08/hilodenube.jpg?fit=800%2C800"  alt=""/>
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-6">
                            <div className="w-full max-w-xs" >
                                <Image width="400" height="184" src="https://i1.wp.com/madejandola.com/wp-content/uploads/2019/09/jóvenes-artesanos.jpg?fit=400%2C184"  alt=""/>
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-6">
                            <div className="w-full max-w-xs" >
                                <Image width="400" height="400" src="https://i2.wp.com/madejandola.com/wp-content/uploads/2019/09/delestero.png?fit=400%2C400"  alt=""/>
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-6">
                            <div className="w-full max-w-xs" >
                                <Image width="400" height="400" src="https://i0.wp.com/madejandola.com/wp-content/uploads/2019/09/unam.jpg?fit=400%2C400"  alt=""/>
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-6">
                            <div className="w-full max-w-xs" >
                                <Image width="400" height="400" src="https://i2.wp.com/madejandola.com/wp-content/uploads/2019/09/unam-posgrado.jpg?fit=400%2C400"  alt=""/>
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-6">
                            <div className="w-full max-w-xs" >
                                <a href="https://www.facebook.com/Xochimeztli-575985422502838/" target="_blank" rel="noopener noreferrer">
                                    <Image width="400" height="400" src="https://i2.wp.com/madejandola.com/wp-content/uploads/2019/09/Xochimeztli.png?fit=400%2C400"  alt=""/>
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-6">
                            <div className="w-full max-w-xs" >
                                <Image width="616" height="504" src="https://i1.wp.com/madejandola.com/wp-content/uploads/2019/07/iquiti.png?fit=616%2C504"  alt=""/>
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-6">
                            <div className="w-full max-w-xs" >
                                <Image width="400" height="385" src="https://i2.wp.com/madejandola.com/wp-content/uploads/2019/09/encirculo.jpg?fit=400%2C385"  alt=""/>
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-6">
                            <div className="w-full max-w-xs" >
                                <Image width="187" height="400" src="https://i1.wp.com/madejandola.com/wp-content/uploads/2019/09/zapaz-telar.jpg?fit=187%2C400"  alt=""/>
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-6">
                            <div className="w-full max-w-xs" >
                                <Image width="400" height="400" src="https://i2.wp.com/madejandola.com/wp-content/uploads/2019/09/yoyolo.jpg?fit=400%2C400"  alt=""/>
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-6">
                            <div className="w-full max-w-xs" >
                                <Image width="400" height="87" src="https://i2.wp.com/madejandola.com/wp-content/uploads/2019/09/xanvil.jpg?fit=400%2C87"  alt=""/>
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-6">
                            <div className="w-full max-w-xs" >
                                <Image width="400" height="225" src="https://i1.wp.com/madejandola.com/wp-content/uploads/2019/09/ukatari.jpg?fit=400%2C225"   alt=""/>
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-6">
                            <div className="w-full max-w-xs" >
                                <Image width="400" height="150" src="https://i0.wp.com/madejandola.com/wp-content/uploads/2019/09/tics.jpg?fit=400%2C150"   alt=""/>
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-6">
                            <div className="w-full max-w-xs" >
                                <Image width="380" height="400" src="https://i1.wp.com/madejandola.com/wp-content/uploads/2019/09/tepeni.jpg?fit=380%2C400"   alt=""/>
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-6">
                            <div className="w-full max-w-xs" >
                                <Image width="390" height="400" src="https://i0.wp.com/madejandola.com/wp-content/uploads/2019/09/tandem-studio.jpg?fit=390%2C400"   alt=""/>
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-6">
                            <div className="w-full max-w-xs" >
                                <Image width="283" height="400" src="https://i1.wp.com/madejandola.com/wp-content/uploads/2019/09/sohuame-tlatzonkime.jpg?fit=283%2C400"   alt=""/>
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-6">
                            <div className="w-full max-w-xs" >
                                <Image width="400" height="134" src="https://i0.wp.com/madejandola.com/wp-content/uploads/2019/09/redes.jpg?fit=400%2C134"  alt=""/>
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-6">
                            <div className="w-full max-w-xs" >
                                <Image width="400" height="280" src="https://i0.wp.com/madejandola.com/wp-content/uploads/2019/09/punto-y-trama.jpg?fit=400%2C280"  alt=""/>
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-6">
                            <div className="w-full max-w-xs" >
                                <Image width="391" height="400" src="https://i0.wp.com/madejandola.com/wp-content/uploads/2019/09/mujeres-maya-mam.jpg?fit=391%2C400"  alt=""/>
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-6">
                            <div className="w-full max-w-xs" >
                                <Image width="400" height="268" src="https://i1.wp.com/madejandola.com/wp-content/uploads/2019/09/malacate.jpg?fit=400%2C268"  alt=""/>
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-6">
                            <div className="w-full max-w-xs" >
                                <Image width="400" height="147" src="https://i2.wp.com/madejandola.com/wp-content/uploads/2019/09/logo-original-.jpg?fit=400%2C147"   alt=""/>
                            </div>
                        </div>
                        <div className="flex items-center justify-center p-6">
                            <div className="w-full max-w-xs" >
                                <Image width="384" height="384" src="https://i1.wp.com/madejandola.com/wp-content/uploads/2019/09/montegabriela.jpg?fit=384%2C384"   alt=""/>
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </Layout>
    );
}
