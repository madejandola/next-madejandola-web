import Layout from "@/components/Layout";
import TramaVideo from "@/components/Trama/TramaVideo";

const PageTradicionTelera = () => {
    const title = "Volver al telar"
    const videoSrc = "https://vimeo.com/339257802?embedded=true&source=vimeo_logo&owner=97032917"
    return (
        <Layout title={title}>
            <TramaVideo title={title} video={videoSrc}>
                <p>Este cortometraje cuenta la historia de Eduardo Choque y su relación con el tejido en los Valles Calchaquíes. Habla de sus hijos, su herencia y cómo él, después de muchos años de trabajo fuera, volvió al telar.</p>
            </TramaVideo>
        </Layout >
    );
};

export default PageTradicionTelera;
