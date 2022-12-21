import HeroText from "../../assets/HeroText3.png";
import "./Hero.css";

const Hero = () => {
  return (
    <header id="hero" className="app__hero">
      <div className="app__hero-container">
        <img className="app__hero-img" src={HeroText} alt="hero logo" /> 
        <h2 className="app__hero-text">FULL STACK DEVELOPER</h2>
        <div className="app__hero-link-container">
          <a className="app__hero-link" href="https://www.dropbox.com/s/vrqvoa499ws3u3v/CV-AndresCapano-FullStackDeveloper.pdf?dl=0" target="_blank" rel="noopener noreferrer">
            <button>Ver CV</button>
          </a>
        </div>
      </div>
    </header>
  )
};

export default Hero;