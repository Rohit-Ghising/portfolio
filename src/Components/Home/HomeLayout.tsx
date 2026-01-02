import About from "./About";
import Blogs from "./Blogs";
import Contact from "./Contact";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Works from "./Works";

export default function HomeLayout() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
}
