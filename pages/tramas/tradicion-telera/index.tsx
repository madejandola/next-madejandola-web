import Layout from "@/components/Layout";
import PageTrama from "@/components/Trama/PageTrama";
import Gallery1 from "./gallery/gallery1";
import Image from "next/future/image";

const PageTradicionTelera = () => {
    const title = "Tradición Telera"
    const city = "Seclantás, Argentina"
    const image = "https://i1.wp.com/madejandola.com/wp-content/uploads/2019/09/choque-guzman-002.jpg?fit=1600%2C1200"
    const imageBlur = "https://i1.wp.com/madejandola.com/wp-content/uploads/2019/09/choque-guzman-002.jpg?fit=16%2C12"
    return (
        <Layout title={title}>
            <PageTrama title={title} city={city} image={image} imageBlur={imageBlur}>
                <p>Los Choque/Guzmán son una familia de tradición tejedora o telera como se le llama en la región de los Valles Calchaquíes de Salta (Arg.). Eduardo Choque contrajo matrimonio con Ester Guzmán y criaron 9 hijos entre hilos y tejidos. Su casa se encuentra al costado del llamado “Camino de los Artesanos”, el cual va desde El Colte hasta Seclantás. Ahí</p>
                <p>Al lado de ellos, viven las hermanas de Ester: Marcela y Silvia y al igual que ellos, todos los días, salen a tejer a su pequeño taller, hecho de una estructura de madera y cañas. Durante los días de tejido, los teleros se acompañan del sonido de la radio, del viento y del ritmo de los telares al moverse.</p>
                <Gallery1 />
                <p>En esta región se teje principalmente con lana de oveja y llama y algunas veces con pelo de vicuña en los distintos tipos de telar que manejan. El más chico es el telar que Marcela usa para crear fajas y cintos. Éste utiliza dos lisos angostos, manipulados por pedales de palo.</p>
                <iframe className="mx-auto aspect-video" src="https://onelineplayer.com/player.html?autoplay=false&amp;loop=false&amp;autopause=false&amp;muted=false&amp;url=https%3A%2F%2Fdrive.google.com%2Fuc%3Fauthuser%3D0%26id%3D142veXr2Xwb8D3x4rcnero45awO1F_oHm%26export%3Ddownload&amp;poster=https%3A%2F%2Fdrive.google.com%2Fuc%3Fauthuser%3D0%26id%3D1wKXhbs9NPVdgIOgQBCaz28He9bRMUyyW%26export%3Ddownload&amp;time=true&amp;progressBar=true&amp;playButton=true&amp;overlay=true&amp;muteButton=true&amp;fullscreenButton=true&amp;style=light&amp;logo=false&amp;quality=720p" width="860" height="484"  ></iframe>
                <p>El segundo es el más rudimentario y tradicional: el telar horizontal. Es el más parecido al telar de cintura, ya que no utiliza lisos sino que el levantamiento de los hilos se hace manualmente con palos y cañas de distintos grosores. En él, Silvia teje una ruana en lana marrón.</p>
                <iframe className="mx-auto aspect-video" src="https://onelineplayer.com/player.html?autoplay=false&amp;loop=false&amp;autopause=false&amp;muted=false&amp;url=https%3A%2F%2Fdrive.google.com%2Fuc%3Fauthuser%3D0%26id%3D1B9Y1WhylypEEDOGLfjF3HjDvw7Y42j-u%26export%3Ddownload&amp;poster=http%3A%2F%2Fmadejandola.com%2Fwp-content%2Fuploads%2F2019%2F09%2FDSCN9309.jpg&amp;time=true&amp;progressBar=true&amp;playButton=true&amp;overlay=true&amp;muteButton=true&amp;fullscreenButton=true&amp;style=light&amp;logo=false&amp;quality=720p" width="860" height="484"  ></iframe>
                <p>Y mientras, Eduardo teje de pie en el telar criollo o de pedales. Este telar, en la mayor parte del continente, es manipulado por hombres ya que su estructura es muy pesada y requiere un esfuerzo físico mayor que los otros tipos de telar. Éste es en el que se teje la prenda más conocida de la zona: el poncho salteño.</p>
                <p>
                    Eduardo es un experto en ponchos. Como todos los teleros del valle, tiene su pala (madera para apretar el tejido, también conocido como machete) especial para tejer el poncho y se enorgullece de ella.</p>
                <Gallery1 />
                <p>Las herramientas de trabajo siempre están conectadas al entorno. La pala de Eduardo está hecha de madera de quebracho colorado, un árbol que se da en el norte de Argentina, en Paraguay y Brasil principalmente. Es necesario que la pala sea pesada y estable para poder dar al tejido firmeza suficiente.
                </p>
                <p>Un buen poncho debe estar hecho de hilos delgados de llama o vicuña y el tejido debe ser compacto y firme para no dejar pasar el viento y el agua por su tela. Es una prenda típica de los gauchos que lo protege de las inclemencias del clima.

                </p>
                <div className="w-full h-screen">
                    <Image alt="choque guzman" width={1600} height="1200" className="object-cover w-full h-screen" src="http://madejandola.com/wp-content/uploads/2019/09/choque-guzman-030.jpg" />
                </div>
                <p>El diseño del poncho salteño es simple y elegante. Está compuesto de dos lienzos rojos con una franja negra en cada costado y unidos al centro con una fina costura. Las terminaciones incluyen flecos en los bordes y un moño negro en el escote.</p>
                <p>El aprendizaje del tejido pasa por la herencia y la relación del artesano con la técnica durante toda la vida. Eduardo recuerda ser llamado por su madre para sostener las madejas de lana entre sus brazos y ella poder ovillarlas, práctica común entre las tejedoras de generaciones anteriores. Es por ello que hoy en día en este lugar, al madejero de madera, que cumple la misma función que los niños en otras épocas, se les llama cariñosamente muchachos.
                </p>
                <Gallery1 />
            </PageTrama>
        </Layout >
    );
};

export default PageTradicionTelera;
