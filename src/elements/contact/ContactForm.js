import React , {useState} from 'react';
import emailjs from 'emailjs-com';

const Result = () => {
    return (
        <p className="success-message">Se ha enviado tu mensaje. Nos pondremos en contacto contigo.</p>
    )
}

function ContactForm({props , formStyle}) {
    const [ result,showresult ] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
        .sendForm(
            'service_p4x3hv8', 
            'template_jgfr42f', 
            e.target, 
            'user_jrfTH2e0Ely35ZCVFdT9S'
        )
        .then((result) => {
            console.log(result.text);
            }, 
            (error) => {
                console.log(error.text);
            }
        );
        e.target.reset();
        showresult(true);
    };

    setTimeout(() => {
        showresult(false);
    }, 5000);

    return (
        <form className={`${formStyle}`} action="" onSubmit={sendEmail}>
            <div className="form-group">
                <input 
                type="text"
                name="fullname"
                placeholder="Nombre"
                required
                />
            </div>

            <div className="form-group">
                <input 
                type="email"
                name="email"
                placeholder="Email"
                required
                />
            </div>

            <div className="form-group">
                <input 
                type="text"
                name="phone"
                placeholder="Celular"
                required
                />
            </div>


            <div className="form-group">
                <input 
                type="text"
                name="subject"
                placeholder="Motivo"
                required
                />
            </div>

            <div className="form-group">
                <textarea 
                name="message"
                placeholder="Inquietud"
                required
                >
                </textarea>
            </div>

            <div className="form-group">
                <button className="btn-default btn-large">Enviar</button>
            </div> 

            <div className="form-group">
                {result ? <Result /> : null}
            </div> 
        </form>
    )
}
export default ContactForm;
