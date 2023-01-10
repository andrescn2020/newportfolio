import { useSelector } from 'react-redux';
import HeroText from "../../assets/HeroText3.png";
import "./Hero.css";

const Hero = () => {

  const language = useSelector((state) => state.language);
  const menu = useSelector((state) => state.menu);

  return (
    <header id="hero" className="app__hero">
      <div className="app__hero-container">
        <img className="app__hero-img" src={HeroText} alt="hero logo" />
        <h2 className="app__hero-text">FULL STACK DEVELOPER</h2>
       {menu ? null : <div className="app__hero-link-container" >
          {language === "en"
            ? <a href="https://www.dropbox.com/s/dv77w8btllu9l3j/Resume-AndresCapano-FullStackDeveloper.pdf?dl=0" target="_blank" rel="noopener noreferrer" download>
            <button>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Resume
            </button>
            </a>
            : <a href="https://www.dropbox.com/s/vrqvoa499ws3u3v/CV-AndresCapano-FullStackDeveloper.pdf?dl=0" target="_blank" rel="noopener noreferrer" download>
            <button>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Ver CV
            </button>
            </a>
            }
        </div>}
      </div>
    </header>
  )
};

export default Hero;