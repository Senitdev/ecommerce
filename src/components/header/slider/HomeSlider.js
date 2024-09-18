import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import React from 'react';
import slider1 from '../../../assets/images/slider/slider-1.png';
import slider2 from '../../../assets/images/slider/slider-2.png';
import '../slider/slider.css';
import { FormSubscribe } from '../subscribe/FormSubscribe';
export const HomeSlider=()=>{
    return<>
    <div className="HomeSlider">
    <CarouselProvider
        naturalSlideWidth={50}
        naturalSlideHeight={100}
        totalSlides={2}
        isPlaying
      >
        <Slider>
          <Slide index={0}>
            <div className='menuSlider'>
            <div className='slideText1'>
              <p id="slide1Text1">Don't miss amazing <br/>grocery deals</p>
              <p id="slide1Text2">Save up to 50% off your first order</p>
            </div>
            <div className='slideImage1'>
            <img src={slider1} alt='slide 1' className="imageSlide1"/>
            </div>
            </div>
            </Slide>
          <Slide index={1}>
          <div className='menuSlider'>
          <div className='slideText1'>
              <p id="slide1Text1">Fresh Végétables <br/> Big Discount</p>
              <p id="slide1Text2">Save up to 50% off your first order</p>
            </div>
            <div className='slideImage1'>
            <img src={slider2} alt='slide 1' className='imageSlide2'/>
            </div>
            </div>
            </Slide>
         
        </Slider>
        <div className="subscribe">
          <FormSubscribe/>
        </div>
        <ButtonBack className='btn-back'></ButtonBack>
        <ButtonNext className='btn-next'></ButtonNext>
      </CarouselProvider>
    </div>
    </>
}