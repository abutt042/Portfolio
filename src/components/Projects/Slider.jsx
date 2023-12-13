import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';
import mepco from'../../images/Mepco.PNG';
import citizenmoniter from '../../images/citizen.PNG';
import eops from '../../images/e-Operations.png';
let data = [
    {
        img : mepco,
        disc : "MEPCO smart is a web application developed in React with backend API's in.Net and SQL Server. This web app offers smart Meter consumers features: realtime monitoring of load, consumption and payment status, energy advisor etc.. and customerservices, duplicatebill and online payment",
        url: 'http://117.20.28.178:8040/'
      },
    {
        img : citizenmoniter,
        disc : "An admin portal to display hierarchical dashboard stats of theft case along with role based operations on the submitted electricity theft case developed during the anti-theft campaign launched by ministry of energy (MoE) power division of Pakistan.",
        url: 'http://117.20.28.178:8044/'
      },
    {
        img : eops,
        disc : "e-Ops is web portal is developed in React.js and backend in DotNet with SQL Server. This portal is used by field operations staff in all 10 Discos customer support centers to process consumers’ requests: new connection applications, change of attributes, meter reading correction, complaints, opt for smart meter etc",
        url: 'http://117.20.28.178:8037/'
      },
    {
        img : "https://res.cloudinary.com/ghazni/image/upload/v1661323980/Yt-portfolio/ui3_akynn4.png",
        disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
    },
   
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 2,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`