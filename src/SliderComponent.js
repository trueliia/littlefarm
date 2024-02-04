import React from 'react';
import './App.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import previous from './assets/previous.png';
import next from './assets/next.png';

const SliderComponent = () => {
    const CustomNextArrow = (props) => (
        <div {...props} className="custom-arrow next">
            <img src={next} width="150px" alt="arrow"/>
        </div>
    );
    const CustomPrevArrow = (props) => (
        <div {...props} className="custom-arrow prev">
            <img src={previous} width="150px" alt="arrow"/>
        </div>
    );
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow/>,
        prevArrow: <CustomPrevArrow/>
    };

    
    return (
        <Slider {...settings}>
        <div className='cont'>
            <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  width="100%" alt="vegetables"/>
        </div>

        <div>
            <img src="https://images.unsplash.com/photo-1529859593319-f90e81f2db3b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="100%" alt="vegetables"/>
        </div>

        <div>
            <img src="https://images.unsplash.com/photo-1694076544200-08114d9f2ef6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="100%" alt="vegetables"/>
        </div>
        <div>
            <img src="https://images.unsplash.com/photo-1599907919655-46afff7d94b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="100%" alt="harvest"/>
        </div>
        <div>
            <img src="https://images.unsplash.com/photo-1643996322171-7a94b7acc9a7?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="100%" alt="oranges"/>
        </div>
        <div>
            <img src="https://images.unsplash.com/uploads/1411901100260f56b39b9/ab70b250?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="100%" alt="greenhouse"/>
        </div>
        </Slider>

    )
}

export default SliderComponent;