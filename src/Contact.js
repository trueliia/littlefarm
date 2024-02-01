import ContactForm from "./ContactForm";
import image from './form.png';

function Contact(){
    return(
    <div className="form">
        <h1>SEND YOUR ORDER TO US TODAY!</h1>
        <ContactForm/>
        <img className="bottomPicture" src={image} width="" alt="vegetables"/>
    </div>
    )
}

export default Contact