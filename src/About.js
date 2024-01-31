import video from './farmhands.mp4';
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
      <div className="flyer-group">
      <img className="flyer" src="https://images.unsplash.com/photo-1624720114708-0cbd6ee41f4e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Greenhouse"/>
      <img className="flyer" src="https://images.unsplash.com/photo-1573426667638-18ccdd988a39?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Vegatables"/>
      <img className="flyer" src="https://plus.unsplash.com/premium_photo-1669122601993-449a0a3b70c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Carrots"/>
      </div>
      <div className="flyer-group">
      <img className="flyer" src="https://images.unsplash.com/photo-1486328228599-85db4443971f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cabbage"/>
      <img className="flyer" src="https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Tomatoes"/>
      <img className="flyer" src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Pig"/>
      </div>

      </div>
      
    )
}
export default About;