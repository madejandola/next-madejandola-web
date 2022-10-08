import Image from "next/image";

export default function Home({ title, subtitle }) {
  return (
    <div className="relative w-full py-32 text-center text-gray-100 bg-zinc-900">
      <span className="font-sans text-base font-bold uppercase lg:text-2xl">{subtitle}</span>
      <h1 className="my-3 font-sans text-4xl font-bold tracking-widest lg:text-7xl">{title}</h1>
    </div>
  );
}
