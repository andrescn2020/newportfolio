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
          <a href="https://es.reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">
            <img src={react} alt="react icon" className="icon" />
          </a>
          <h4>React</h4>
        </div>
        <div className="app__technologies-icon-container">
          <a href="https://es.redux.js.org/" target="_blank" rel="noopener noreferrer">
            <img src={redux} alt="redux icon" className="icon" />
          </a>
          <h4>Redux</h4>
        </div>
        <div className="app__technologies-icon-container">
          <a href="https://docs.aws.amazon.com/" target="_blank" rel="noopener noreferrer">
            <img src={aws} alt="aws icon" className="icon" />
          </a>
          <h4>AWS</h4>
        </div>
        <div className="app__technologies-icon-container">
          <a href="https://nodejs.org/en/docs/" target="_blank" rel="noopener noreferrer">
            <img src={nodejs} alt="nodejs icon" className="icon" />
          </a>
          <h4>NodeJs</h4>
        </div>
        <div className="app__technologies-icon-container">
          <a href="https://www.postgresql.org/docs/" target="_blank" rel="noopener noreferrer">
            <img src={postgresql} alt="postgresql icon" className="icon" />
          </a>
          <h4>PostgreSQL</h4>
        </div>
        <div className="app__technologies-icon-container">
          <a href="https://www.mongodb.com/docs/" target="_blank" rel="noopener noreferrer">
            <img src={mongodb} alt="mongodb icon" className="icon" />
          </a>
          <h4>MongoDB</h4>
        </div>
        <div className="app__technologies-icon-container">
          <a href="https://www.figma.com/best-practices/guide-to-developer-handoff/" target="_blank" rel="noopener noreferrer">
            <img src={figma} alt="figma icon" className="icon" />
          </a>
          <h4>Figma</h4>
        </div>
        <div className="app__technologies-icon-container">
          <a href="https://git-scm.com/doc" target="_blank" rel="noopener noreferrer">
            <img src={git} alt="git icon" className="icon" />
          </a>
          <h4>Git</h4>
        </div>
        <div className="app__technologies-icon-container">
          <a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
            <img src={css} alt="css icon" className="icon" />
          </a>
          <h4>CSS</h4>
        </div>
        <div className="app__technologies-icon-container">
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
            <img src={js} alt="javascript icon" className="icon" />
          </a>
          <h4>JavaScript</h4>
        </div>
        <div className="app__technologies-icon-container">
          <a href="https://firebase.google.com/docs" target="_blank" rel="noopener noreferrer">
            <img src={firebase} alt="firebase icon" className="icon" />
          </a>
          <h4>Firebase</h4>
        </div>
        <div className="app__technologies-icon-container">
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
            <img src={html} alt="html icon" className="icon" />
          </a>
          <h4>HTML</h4>
        </div>
        <div className="app__technologies-icon-container">
          <a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noopener noreferrer">
            <img src={typescript} alt="typescript icon" className="icon" />
          </a>
          <h4>TypeScript</h4>
        </div>
        <div className="app__technologies-icon-container">
          <a href="https://sequelize.org/docs/v6/getting-started/" target="_blank" rel="noopener noreferrer">
            <img src={sequelize} alt="sequelize icon" className="icon" />
          </a>
          <h4>Sequelize</h4>
        </div>
        <div className="app__technologies-icon-container">
          <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">
            <img src={nextjs} alt="nextjs icon" className="icon" />
          </a>
          <h4>NextJs</h4>
        </div>
      </div>
    </div>

  )
};

export default Technologies;