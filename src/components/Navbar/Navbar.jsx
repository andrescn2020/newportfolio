import "./Navbar.css";
import Logo from "../../assets/Logo.png";
import { IoMenuSharp, IoClose } from "react-icons/io5";
import useScreenSize from "../../hooks/useScreenSize";
import { useDispatch, useSelector } from 'react-redux';
import { changeMenu } from "../../redux/actions";

function Navbar() {

  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);
  const menu = useSelector((state) => state.menu);
  const { width } = useScreenSize();

  const handleMenu = () => {
    dispatch(changeMenu());
  };

  const Menu = () => {
    if (width < 1051 && menu === true) {
      return (
        <IoClose className="cross-icon" onClick={handleMenu} />
      );
    } else if (width < 1051) {
      return (
        <IoMenuSharp className="hamburguer-icon" onClick={handleMenu} />
      );
    } else {
      console.log("entre aca", menu);
      return (
        <div id="navbar" className="app__navbar-hamburguer">
          <ul className="app__navbar-hamburguer-list">
            <a href="#proyectos" onClick={handleMenu}>
              <li>{language === "en" ? "PROJECTS" : "PROYECTOS"}</li>
            </a>
            <a href="#sobremi" onClick={handleMenu}>
              <li>{language === "en" ? "ABOUT ME" : "SOBRE MÍ"}</li>
            </a>
            <a href="#tecnologias" onClick={handleMenu}>
              <li>{language === "en" ? "TECNOLOGIES" : "TECNOLOGÍAS"}</li>
            </a>
            <a href="https://github.com/andrescn2020">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="60px" height="60px"><path fill="#0288d1" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z" /><path fill="#fff" d="M14 19H18V34H14zM15.988 17h-.022C14.772 17 14 16.11 14 14.999 14 13.864 14.796 13 16.011 13c1.217 0 1.966.864 1.989 1.999C18 16.11 17.228 17 15.988 17zM35 24.5c0-3.038-2.462-5.5-5.5-5.5-1.862 0-3.505.928-4.5 2.344V19h-4v15h4v-8c0-1.657 1.343-3 3-3s3 1.343 3 3v8h4C35 34 35 24.921 35 24.5z" /></svg>
            </a>
            <a href="https://github.com/andrescn2020">
              <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="60px" height="60px"><path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z" /></svg>
            </a>
          </ul>
        </div>
      );
    } 
  };

  return (
    <nav id="navbar" className="app__nav">
      <div className="app__navbar">
        <div className="app__navbar-logo">
          <a href="https://www.linkedin.com/in/andrescapano/" target="_blank" rel="noopener noreferrer">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        <div className="app__navbar-list-container">
          <ul className="app__navbar-list">
            {/* <a href="#home">
              <li>HOME</li>
            </a> */}
            <a href="#proyectos">
              <li>{language === "en" ? "PROJECTS" : "PROYECTOS"}</li>
            </a>
            <a href="#sobremi">
              <li>{language === "en" ? "ABOUT ME" : "SOBRE MÍ"}</li>
            </a>
            <a href="#tecnologias">
              <li>{language === "en" ? "TECNOLOGIES" : "TECNOLOGÍAS"}</li>
            </a>
          </ul>
        </div>
        {width < 1051 && <Menu />}

        <div className="app__navbar-icons">
          <a href="https://www.linkedin.com/in/andrescapano/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="60px" height="60px"><path fill="#0288d1" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z" /><path fill="#fff" d="M14 19H18V34H14zM15.988 17h-.022C14.772 17 14 16.11 14 14.999 14 13.864 14.796 13 16.011 13c1.217 0 1.966.864 1.989 1.999C18 16.11 17.228 17 15.988 17zM35 24.5c0-3.038-2.462-5.5-5.5-5.5-1.862 0-3.505.928-4.5 2.344V19h-4v15h4v-8c0-1.657 1.343-3 3-3s3 1.343 3 3v8h4C35 34 35 24.921 35 24.5z" /></svg>
          </a>
          <a href="https://github.com/andrescn2020" target="_blank" rel="noopener noreferrer">
            <svg style={{ marginLeft: "3rem" }} fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="60px" height="60px"><path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z" /></svg>
          </a>
        </div>

      </div>

      {menu &&
        <div id="navbar" className="app__navbar-hamburguer">
          <ul className="app__navbar-hamburguer-list">
            <a href="#proyectos" onClick={handleMenu}>
              <li>{language === "en" ? "PROJECTS" : "PROYECTOS"}</li>
            </a>
            <a href="#sobremi" onClick={handleMenu}>
              <li>{language === "en" ? "ABOUT ME" : "SOBRE MÍ"}</li>
            </a>
            <a href="#tecnologias" onClick={handleMenu}>
              <li>{language === "en" ? "TECNOLOGIES" : "TECNOLOGÍAS"}</li>
            </a>
            <div className="app__navbar-svg-container">
              <a href="https://www.linkedin.com/in/andrescapano/" onClick={handleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="60px" height="60px"><path fill="#0288d1" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z" /><path fill="#fff" d="M14 19H18V34H14zM15.988 17h-.022C14.772 17 14 16.11 14 14.999 14 13.864 14.796 13 16.011 13c1.217 0 1.966.864 1.989 1.999C18 16.11 17.228 17 15.988 17zM35 24.5c0-3.038-2.462-5.5-5.5-5.5-1.862 0-3.505.928-4.5 2.344V19h-4v15h4v-8c0-1.657 1.343-3 3-3s3 1.343 3 3v8h4C35 34 35 24.921 35 24.5z" /></svg>
              </a>
              <a href="https://github.com/andrescn2020" onClick={handleMenu}>
                <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="60px" height="60px"><path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z" /></svg>
              </a>
            </div>
          </ul>
        </div>}

    </nav>

  );
}

export default Navbar;