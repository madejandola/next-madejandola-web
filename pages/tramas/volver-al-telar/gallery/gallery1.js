
import Image from "next/image";

export default function TradicionTeleraGallery1() {
    return (
        <div className="gap-2 columns-3">
            {galeria.map((i) => {
                return (
                    <div  key={i.title}>
                        <Image alt="choque guzman" width={1600} height="1200" class="w-full aspect-video mb-6" src={i.image} />
                    </div>
                );
            })}
        </div>
    );
}

export const galeria = [
    {
        title: "Choque Guzman",
        image: "https://i2.wp.com/madejandola.com/wp-content/uploads/2019/09/choque-guzman-044.jpg?fit=1600%2C1200"
    },
    {
        title: "Choque Guzman",
        image: "https://i1.wp.com/madejandola.com/wp-content/uploads/2019/09/choque-guzman-033.jpg?fit=1600%2C1200"
    },
    {
        title: "Choque Guzman",
        image: "https://i1.wp.com/madejandola.com/wp-content/uploads/2019/09/choque-guzman-010.jpg?fit=1600%2C1200"
    },
    {
        title: "Choque Guzman",
        image: "https://i0.wp.com/madejandola.com/wp-content/uploads/2019/09/choque-guzman-004.jpg?fit=1600%2C1200"
    },
    {
        title: "Choque Guzman",
        image: "https://i2.wp.com/madejandola.com/wp-content/uploads/2019/09/choque-guzman-001.jpg?fit=1600%2C2133"
    },
    {
        title: "Choque Guzman",
        image: "https://i1.wp.com/madejandola.com/wp-content/uploads/2019/09/choque-guzman-005.jpg?fit=1600%2C1200"
    },
    {
        title: "Choque Guzman",
        image: "https://i1.wp.com/madejandola.com/wp-content/uploads/2019/09/choque-guzman-007.jpg?fit=1600%2C1200"
    },
    {
        title: "Choque Guzman",
        image: "https://i2.wp.com/madejandola.com/wp-content/uploads/2019/09/choque-guzman-003.jpg?fit=1600%2C1200"
    },
    {
        title: "Choque Guzman",
        image: "https://i1.wp.com/madejandola.com/wp-content/uploads/2019/09/choque-guzman-002.jpg?fit=1600%2C1200"
    },
];
