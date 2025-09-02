import About from "@/app/sections/About";
import Contact from "@/app/sections/Contact";
import Footer from "@/app/sections/Footer";
import Hero from "@/app/sections/Hero";
import Navbar from "@/app/sections/Navbar";
import Projects from "@/app/sections/Projects";

export default function Home() {
  return (
    <>
      <main className="max-w-7xl mx-auto">
        {/* Background elements */}
        <div className="fixed inset-0 -z-50">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-60 right-20 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-1/2 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
