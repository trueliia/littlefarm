import ContactForm from "./ContactForm";
import image from './assets/form.png';

function Contact(){
    return(
    <div className="form">
        <h1>FEEL FREE TO CONTACT US ANY TIME!</h1>
        <ContactForm/>
        <img className="bottomPicture" src={image} width="" alt="vegetables"/>
    </div>
    )
}

export default Contact