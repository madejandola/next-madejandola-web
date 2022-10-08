export default function Home({ title }) {
  return (
    <div className="w-full py-24 mb-12 text-center text-gray-100 bg-stone-700">
      <h1 className="font-mono text-4xl font-bold tracking-widest lg:text-7xl">{title}</h1>
    </div>
  );
}
