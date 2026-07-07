export default function Home() {
  return (
    <main className="min-h-screen bg-[#ffffff] text-[#1d1d1f] antialiased selection:bg-black selection:text-white">
      {/* Espacio reservado para la Navbar */}
      
      {/* Sección Principal (Hero) */}
      <section className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl">
          Pablo Abad Goldsmith
        </h1>
        <p className="mt-4 text-xl text-gray-500 max-w-md font-medium">
          Desarrollador Front-End
        </p>
      </section>
    </main>
  );
}