import About from "./About";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import Skills from "./Skills";

export default function HomeLayout() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
    </div>
  );
}
