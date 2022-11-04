
import Image from "next/future/image";
export default function TramaGalleryItem({ title, image, imageBlur }) {
    return (
        <div className="h-64 overflow-hidden sm:h-96">
            <Image
                alt={title}
                placeholder='blur'
                width={1600}
                height="1200"
                class="w-full h-full object-cover"
                layout="intrinsic"
                src={image}
                blurDataURL={imageBlur} />
        </div>
    );
}
