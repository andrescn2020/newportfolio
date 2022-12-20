import Navbar from "../src/components/Navbar/Navbar.jsx"
import Hero from "../src/components/Hero/Hero.jsx";
import Projects from "../src/components/Projects/Projects.jsx";
import Aboutme from "../src/components/Aboutme/Aboutme.jsx";
import Technologies from "../src/components/Technologies/Technologies.jsx";
import Contact from "../src/components/Contact/Contact.jsx";
import Footer from "../src/components/Footer/Footer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Aboutme />
      <Technologies />
      <Contact />
      <Footer />
    </div >
  );
}

export default App;
