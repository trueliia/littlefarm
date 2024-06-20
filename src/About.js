import SliderComponent from './SliderComponent';
import video from './assets/farmhands.mp4';

function About(){
    return (<div className="container">
        <div className="cont">
        <video autoPlay muted loop>
         <source src={video} type="video/mp4" />
      </video>
      <h1>ABOUT US</h1>
      </div>
      <div className="container">
        <h3>Welcome to our little farm store!</h3>
      
        <h3>We are Anna & Fred Klassen, a family dedicated to bringing freshness and quality to your table. <br/>
        Our journey began with a love for the land and a commitment to providing you with natural, fresh products straight from our farm in Southern Manitoba. <br/>
        Proudly cultivating a wide range of fresh vegetables, fruits, and other high-quality products, our farm store is more than just a place to shop. It's a place where each product carries the care and warmth of our family. We strive to maintain exceptional standards of quality and honesty at every stage of our operation.<br/>
        Always committed to sustainable farming practices, we invite you to experience the difference of farm-fresh goodness. Thank you for being a part of our farm family journey!</h3>
      
        <h3>Sincerely, <br/> Anna and Fred Klassen</h3>
      </div>
      <div>
      <SliderComponent/>
      </div>

      </div>
      
    )
}
export default About;