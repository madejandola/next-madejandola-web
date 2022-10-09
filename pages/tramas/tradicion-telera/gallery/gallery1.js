
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
        image: "https://res.cloudinary.com/djoqdhbiv/image/upload/c_scale,q_auto:good,w_1600/v1665276679/web/Tramas/Tradici%C3%B3n%20Telera/choque-guzman-10_zrc735.jpg",
        imageBlur: "https://res.cloudinary.com/djoqdhbiv/image/upload/c_scale,q_auto:good,w_5/v1665276679/web/Tramas/Tradici%C3%B3n%20Telera/choque-guzman-10_zrc735.jpg"
    },
    {
        title: "Choque Guzman",
        image: "https://res.cloudinary.com/djoqdhbiv/image/upload/c_scale,q_auto:good,w_1600/v1665276677/web/Tramas/Tradici%C3%B3n%20Telera/choque-guzman-8_lfvzcw.jpg",
        imageBlur: "https://res.cloudinary.com/djoqdhbiv/image/upload/c_scale,q_auto:good,w_5/v1665276677/web/Tramas/Tradici%C3%B3n%20Telera/choque-guzman-8_lfvzcw.jpg"
    },
    {
        title: "Choque Guzman",
        image: "https://i1.wp.com/madejandola.com/wp-content/uploads/2019/09/choque-guzman-010.jpg?fit=1600%2C1200",
        imageBlur: "https://i1.wp.com/madejandola.com/wp-content/uploads/2019/09/choque-guzman-010.jpg?fit=16%2C12"
    },
    {
        title: "Choque Guzman",
        image: "https://i0.wp.com/madejandola.com/wp-content/uploads/2019/09/choque-guzman-004.jpg?fit=1600%2C1200",
        imageBlur: "https://i0.wp.com/madejandola.com/wp-content/uploads/2019/09/choque-guzman-004.jpg?fit=16%2C12"
    },
    {
        title: "Choque Guzman",
        image: "https://i2.wp.com/madejandola.com/wp-content/uploads/2019/09/choque-guzman-001.jpg?fit=1600%2C2133",
        imageBlur: "https://i2.wp.com/madejandola.com/wp-content/uploads/2019/09/choque-guzman-001.jpg?fit=16%2C21"
    },
    {
        title: "Choque Guzman",
        image: "https://i1.wp.com/madejandola.com/wp-content/uploads/2019/09/choque-guzman-005.jpg?fit=1600%2C1200",
        imageBlur: "https://i1.wp.com/madejandola.com/wp-content/uploads/2019/09/choque-guzman-005.jpg?fit=16%2C12"
    },
    {
        title: "Choque Guzman",
        image: "https://i1.wp.com/madejandola.com/wp-content/uploads/2019/09/choque-guzman-007.jpg?fit=1600%2C1200",
        imageBlur: "https://i1.wp.com/madejandola.com/wp-content/uploads/2019/09/choque-guzman-007.jpg?fit=16%2C12"
    },
    {
        title: "Choque Guzman",
        image: "https://i2.wp.com/madejandola.com/wp-content/uploads/2019/09/choque-guzman-003.jpg?fit=1600%2C1200",
        imageBlur: "https://i2.wp.com/madejandola.com/wp-content/uploads/2019/09/choque-guzman-003.jpg?fit=16%2C12"
    },
    {
        title: "Choque Guzman",
        image: "https://i1.wp.com/madejandola.com/wp-content/uploads/2019/09/choque-guzman-002.jpg?fit=1600%2C1200",
        imageBlur: "https://i1.wp.com/madejandola.com/wp-content/uploads/2019/09/choque-guzman-002.jpg?fit=16%2C12"
    },
];
