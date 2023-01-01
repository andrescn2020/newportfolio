import { react, nextjs, typescript, sequelize, redux, aws, nodejs, postgresql, mongodb, figma, git, css, js, html, firebase } from "../../constants/constants.js";
import { useSelector } from 'react-redux';
import "./Technologies.css";

const Technologies = () => {

  const language = useSelector((state) => state.language);

  return (
    <div id="tecnologias">
      <div className="app__technologies-title">
        <h1>{language === "en" ? "Tecnologies" : "Tecnologías"}</h1>
      </div>
      <div className="app__technologies-container">
        <div className="app__technologies-icon-container">
          <img src={react} alt="react icon" className="icon" />
          <h4>React</h4>
        </div>
        <div className="app__technologies-icon-container">
          <img src={redux} alt="redux icon" className="icon" />
          <h4>Redux</h4>
        </div>
        <div className="app__technologies-icon-container">
          <img src={aws} alt="aws icon" className="icon" />
          <h4>AWS</h4>
        </div>
        <div className="app__technologies-icon-container">
          <img src={nodejs} alt="nodejs icon" className="icon" />
          <h4>NodeJs</h4>
        </div>
        <div className="app__technologies-icon-container">
          <img src={postgresql} alt="postgresql icon" className="icon" />
          <h4>PostgreSQL</h4>
        </div>
        <div className="app__technologies-icon-container">
          <img src={mongodb} alt="mongodb icon" className="icon" />
          <h4>MongoDB</h4>
        </div>
        <div className="app__technologies-icon-container">
          <img src={figma} alt="figma icon" className="icon" />
          <h4>Figma</h4>
        </div>
        <div className="app__technologies-icon-container">
          <img src={git} alt="git icon" className="icon" />
          <h4>Git</h4>
        </div>
        <div className="app__technologies-icon-container">
          <img src={css} alt="css icon" className="icon" />
          <h4>CSS</h4>
        </div>
        <div className="app__technologies-icon-container">
          <img src={js} alt="javascript icon" className="icon" />
          <h4>JavaScript</h4>
        </div>
        <div className="app__technologies-icon-container">
          <img src={firebase} alt="firebase icon" className="icon" />
          <h4>Firebase</h4>
        </div>
        <div className="app__technologies-icon-container">
          <img src={html} alt="html icon" className="icon" />
          <h4>HTML</h4>
        </div>
        <div className="app__technologies-icon-container">
          <img src={typescript} alt="typescript icon" className="icon" />
          <h4>TypeScript</h4>
        </div>
        <div className="app__technologies-icon-container">
          <img src={sequelize} alt="sequelize icon" className="icon" />
          <h4>Sequelize</h4>
        </div>
        <div className="app__technologies-icon-container">
          <img src={nextjs} alt="nextjs icon" className="icon" />
          <h4>NextJs</h4>
        </div>
      </div>
    </div>

  )
};

export default Technologies;