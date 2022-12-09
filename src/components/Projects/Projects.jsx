import { proyectos } from "../../constants/constants.js";
import "./Projects.css";



const Projects = () => {

  return (
    <div id="projectos" className="app__projects">
      <div className="app__projects-title">
        <h1>Proyectos</h1>
      </div>
      <div className="app__projects-container">
        {proyectos.map((project) => (
          <div className="app__projects-card-container" key={project.id}>
            <img src={project.image} alt={project.title} />
            <div className="app__projects-text-container">
              <h3>{project.title}</h3>
              <div></div>
              <h4>{project.description}</h4>
              <div className="tags">
                {project.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
              <div>
                <a href={project.github}>
                  <button>Código</button>
                </a>
                <a href={project.deployPage}>
                  <button>Página</button>
                </a>
              </div>
            </div>

          </div>
        ))}

      </div>
      
    </div>
  )
};

export default Projects;