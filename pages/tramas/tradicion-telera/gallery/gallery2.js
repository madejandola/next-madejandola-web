
import Image from "next/future/image";
import { SRLWrapper } from 'simple-react-lightbox';
import { OPTIONS } from '@/utils/lightbox';

export default function TradicionTeleraGallery1() {

    return (
        <SRLWrapper options={OPTIONS}>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {galeria.map((i) => {
                    return (
                        <div key={i.title} className="h-64 overflow-hidden sm:h-96">
                            <Image
                                alt={i.title}
                                placeholder='blur'
                                width={1600}
                                height="1200"
                                class="w-full h-full object-cover"
                                layout="intrinsic"
                                src={i.image}
                                blurDataURL={i.imageBlur} />
                        </div>
                    );
                })}
            </div>
        </SRLWrapper>
    );
}

export const galeria = [
    {
        title: "Choque Guzman",
        image: "https://res.cloudinary.com/djoqdhbiv/image/upload/c_scale,q_auto:good,w_1600/v1665276776/web/Tramas/Tradici%C3%B3n%20Telera/choque-guzman-27_v9xh5q.jpg",
        imageBlur: "https://res.cloudinary.com/djoqdhbiv/image/upload/c_scale,q_auto:good,w_5/v1665276776/web/Tramas/Tradici%C3%B3n%20Telera/choque-guzman-27_v9xh5q.jpg"
    },
    {
        title: "Choque Guzman",
        image: "https://res.cloudinary.com/djoqdhbiv/image/upload/c_scale,q_auto:good,w_1600/v1665276757/web/Tramas/Tradici%C3%B3n%20Telera/choque-guzman-26_d7icvw.jpg",
        imageBlur: "https://res.cloudinary.com/djoqdhbiv/image/upload/c_scale,q_auto:good,w_5/v1665276757/web/Tramas/Tradici%C3%B3n%20Telera/choque-guzman-26_d7icvw.jpg"
    },
    {
        title: "Choque Guzman",
        image: "https://res.cloudinary.com/djoqdhbiv/image/upload/c_scale,q_auto:good,w_1600/v1665276760/web/Tramas/Tradici%C3%B3n%20Telera/choque-guzman-25_yocrpc.jpg",
        imageBlur: "https://res.cloudinary.com/djoqdhbiv/image/upload/c_scale,q_auto:good,w_5/v1665276760/web/Tramas/Tradici%C3%B3n%20Telera/choque-guzman-25_yocrpc.jpg"
    },
    {
        title: "Choque Guzman",
        image: "https://res.cloudinary.com/djoqdhbiv/image/upload/c_scale,q_auto:good,w_1600/v1665276899/web/Tramas/Tradici%C3%B3n%20Telera/choque-guzman-24_esbhh7.jpg",
        imageBlur: "https://res.cloudinary.com/djoqdhbiv/image/upload/c_scale,q_auto:good,w_5/v1665276899/web/Tramas/Tradici%C3%B3n%20Telera/choque-guzman-24_esbhh7.jpg"
    },
    {
        title: "Choque Guzman",
        image: "https://res.cloudinary.com/djoqdhbiv/image/upload/c_scale,q_auto:good,w_1600/v1665276744/web/Tramas/Tradici%C3%B3n%20Telera/choque-guzman-22_f1svyn.jpg",
        imageBlur: "https://res.cloudinary.com/djoqdhbiv/image/upload/c_scale,q_auto:good,w_5/v1665276744/web/Tramas/Tradici%C3%B3n%20Telera/choque-guzman-22_f1svyn.jpg"
    },
    {
        title: "Choque Guzman",
        image: "https://res.cloudinary.com/djoqdhbiv/image/upload/c_scale,q_auto:good,w_1600/v1665276877/web/Tramas/Tradici%C3%B3n%20Telera/choque-guzman-18_m8muwe.jpg",
        imageBlur: "https://res.cloudinary.com/djoqdhbiv/image/upload/c_scale,q_auto:good,w_5/v1665276877/web/Tramas/Tradici%C3%B3n%20Telera/choque-guzman-18_m8muwe.jpg"
    },
    {
        title: "Choque Guzman",
        image: "https://res.cloudinary.com/djoqdhbiv/image/upload/c_scale,q_auto:good,w_1600/v1665276816/web/Tramas/Tradici%C3%B3n%20Telera/choque-guzman-42_f7whnn.jpg",
        imageBlur: "https://res.cloudinary.com/djoqdhbiv/image/upload/c_scale,q_auto:good,w_5/v1665276816/web/Tramas/Tradici%C3%B3n%20Telera/choque-guzman-42_f7whnn.jpg"
    },
    {
        title: "Choque Guzman",
        image: "https://res.cloudinary.com/djoqdhbiv/image/upload/c_scale,q_auto:good,w_1600/v1665276739/web/Tramas/Tradici%C3%B3n%20Telera/choque-guzman-19_iqkc4r.jpg",
        imageBlur: "https://res.cloudinary.com/djoqdhbiv/image/upload/c_scale,q_auto:good,w_5/v1665276739/web/Tramas/Tradici%C3%B3n%20Telera/choque-guzman-19_iqkc4r.jpg"
    },
    {
        title: "Choque Guzman",
        image: "https://res.cloudinary.com/djoqdhbiv/image/upload/c_scale,q_auto:good,w_1600/v1665276901/web/Tramas/Tradici%C3%B3n%20Telera/choque-guzman-21_apa267.jpg",
        imageBlur: "https://res.cloudinary.com/djoqdhbiv/image/upload/c_scale,q_auto:good,w_5/v1665276901/web/Tramas/Tradici%C3%B3n%20Telera/choque-guzman-21_apa267.jpg"
    },
];
