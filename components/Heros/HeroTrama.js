import Image from "next/future/image";

export default function Home({ title, subtitle, image, imageBlur }) {
  return (
    <div
      className="relative flex items-center justify-center w-full min-h-screen overflow-hidden text-center bg-zinc-900 "
    >
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="flex flex-col items-center justify-center p-2 text-6xl text-center text-white">{title}</h1>
        <p className="text-2xl text-center text-white">{subtitle}</p>
      </div>
      <Image
        alt={title}
        width={1600}
        height="1200"
        placeholder='blur'
        blurDataURL={imageBlur}
        className="absolute inset-0 z-0 object-cover w-full h-screen opacity-50"
        src={image}
        layout="fill"
      />
    </div>
  );
}
