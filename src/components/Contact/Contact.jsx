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
    <form id='contacto' className='app__form' onSubmit={handleSubmit(sendEmail)}>
      <div className='app__form-title'>
        <h1>Contacto</h1>
        <h2>No dudes en contactarme!</h2>
      </div>
      <div className='app__form-container'>
        <div className='app__form-inputs'>
          <div className="app-form-group-name">
            <input className="app-form-control" name='nombre' type="text" placeholder="Nombre" {...register("nombre", {
              required: true,
              maxLength: 16
            })} />
            {/* {errors.nombre ? <p style={{ color: "red" }}>Este campo es obligatorio debe tener un maximo de 16 caracteres</p> : null} */}
          </div>
          <div className="app-form-group-mail">
            <input className="app-form-control" name='mail' type="text" placeholder="Email" {...register("email", {
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
            })} />
            {/* {errors.email ? <p style={{ color: "red" }}>Este campo no cumple con el formato requerido</p> : null} */}
          </div>
        </div>
        <div className="app-form-group-message">
          <textarea className="app-form-control-message" name='mensaje' type="text" placeholder="Mensaje" {...register("descripcion")} />
        </div>
      </div>
      <div className="app-form-group-buttons">
        <input type="submit" value="Enviar" className="app-form-button" />
      </div>
    </form>
  )
};

export default Contact;