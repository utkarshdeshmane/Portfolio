import { About } from "./components/About"
import { HeroSection } from "./components/HeroSection"
import { Navbar } from "./components/Navbar"
import { Technologies } from "./components/Technologies"
import { Experience } from "./components/Experience"
import { Project } from "./components/Project"
import { Contact } from "./components/Contact"


export default function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased
     selection:bg-cyan-200 selection:te{} selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center
       px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      
      <div className="container mx-auto px-8">
        <Navbar />
        <HeroSection />
        <About />
        <Technologies />
        <Experience />
        <Project />
        <Contact />
      </div>
       
    </div>
  )
}