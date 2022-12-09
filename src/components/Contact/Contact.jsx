import { useForm } from 'react-hook-form';
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import "./Contact.css";

const MySwal = withReactContent(Swal);

const Contact = () => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const sendEmail = (data, event) => {
    event.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_EMAIL_ID, process.env.REACT_APP_TEMPLATE_ID, event.target, process.env.REACT_APP_ACCES_KEY)
      .then(response => {
        MySwal.fire({
          title: "",
          html: <i>Mensaje Enviado!</i>,
          icon: 'success'
        })
      })
      .catch(error => {
        MySwal.fire({
          title: "Ocurrio un error",
          html: <i>Por favor vuelva a intentarlo</i>,
          icon: "error"
        })
      })
    reset();
  };

  return (
    <form className='app__form' onSubmit={handleSubmit(sendEmail)}>
      <h1 className='app__form-title'>Contacto</h1>
      <div className='app__form-container'>
        <div className='app__form-text'>
          <p>Pongamosnos en contacto!</p>
        </div>
        <div className='app__form-inputs'>
          <div className="app-form-group-name">
            <input className="app-form-control" name='nombre' type="text" placeholder="Nombre" {...register("nombre", {
              required: true,
              maxLength: 16
            })} />
            {errors.nombre ? <p style={{ color: "red" }}>Este campo es obligatorio debe tener un maximo de 16 caracteres</p> : null}
          </div>
          <div className="app-form-group-mail">
            <input className="app-form-control" name='mail' type="text" placeholder="Email" {...register("email", {
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
            })} />
            {errors.email ? <p style={{ color: "red" }}>Este campo no cumple con el formato requerido</p> : null}
          </div>
        </div>
        <div className="app-form-group-message">
          <textarea className="app-form-control-message" name='mensaje' type="text" placeholder="Mensaje" {...register("descripcion")} />
        </div>
        <div className="app-form-group-buttons">
          <input type="submit" value="Enviar" className="app-form-button" />
        </div>
      </div>
      {/* <h1 className='app__form-title'>Contacto</h1>
      <div className='app__form-container'>
        <div className='app__form-text'>
          <p>Si tienes alguna consulta sobre mi que no se encuentre por aqui o quieres charlar conmigo para acordar entrevistas o un proyecto a desarrollar acorde a mi perfil no dudes en escribirme!</p>
        </div>
        <div className='separator-line'></div>
        <div className='app__form-inputs'>
          <div className="app-form-group-name">
            <input className="app-form-control" name='nombre' type="text" placeholder="Nombre" {...register("nombre", {
              required: true,
              maxLength: 16
            })} />
            {errors.nombre ? <p style={{ color: "red" }}>Este campo es obligatorio debe tener un maximo de 16 caracteres</p> : null}
          </div>
          <div className="app-form-group-mail">
            <input className="app-form-control" name='mail' type="text" placeholder="Email" {...register("email", {
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
            })} />
            {errors.email ? <p style={{ color: "red" }}>Este campo no cumple con el formato requerido</p> : null}
          </div>
          <div className="app-form-group-message">
            <input className="app-form-control" name='mensaje' type="text" placeholder="Mensaje" {...register("descripcion")} />
          </div>
          <div className="app-form-group-buttons">
            <input type="submit" value="Enviar" className="app-form-button" />
          </div>
        </div>
      </div> */}
    </form>
  )
};

export default Contact;