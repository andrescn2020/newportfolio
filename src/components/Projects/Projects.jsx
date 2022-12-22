import { proyectos } from "../../constants/constants.js";
import "./Projects.css";



const Projects = () => {

  return (
    <div id="proyectos" className="app__projects">
      <div className="app__projects-title">
        <h1>Proyectos</h1>
      </div>
      <div className="app__projects-container">
        {proyectos.map((project) => (
          <div className="app__projects-card-container" key={project.id}>
            <div className="img-container">
              <img src={project.image} alt={project.title} />
            </div>
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
                {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <button>Código</button>
                </a>}
                {project.deployPage && <a href={project.deployPage} target="_blank" rel="noopener noreferrer">
                  <button>Página</button>
                </a>}
              </div>
            </div>

          </div>
        ))}

      </div>

    </div>
  )
};

export default Projects;