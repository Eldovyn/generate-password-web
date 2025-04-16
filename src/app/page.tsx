'use client';
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-screen">
      <Navbar />

      <main className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Halo dari container 100vh!</h1>
          <p className="text-gray-600 mt-2">Ini adalah kontainer yang responsive dengan navbar di atasnya.</p>
        </div>
      </main>
    </div>
    </>
  );
}
