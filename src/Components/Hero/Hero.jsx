import React from "react"
import './Hero.scss'
import {motion} from 'framer-motion';

const textVariants = {
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition :{
            duration : 1,
            staggerChildren:0.1,
        }
    },
    scrollbutton:{
        y:10,
        opacity:0,
        transition :{
            duration : 2,
            repeat:Infinity,
        }
    }
}

const sliderVariants = {
    initial:{
        x:0,
        
    },
    animate:{
        x:'-200%',
       
        transition :{
            repeat:Infinity,
            repeatType : "mirror",
            duration : 20,
                    }
    },
}

const Hero = (props) => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textcontainer" variants = {textVariants} initial='initial' animate='animate'>
                    <motion.h2 variants = {textVariants}>Abdullah Bin Tariq</motion.h2>
                    <motion.h1 variants = {textVariants}>Front End Web Developer</motion.h1>
                    <motion.div variants = {textVariants} className="buttons">
                        <motion.button variants = {textVariants}>See the Latest Works</motion.button>
                        <a id="Contact">
                        <motion.button  variants = {textVariants}>Contact Me</motion.button>
                        </a>

                    </motion.div>
                    <motion.img src="./scroll.png" animate='scrollbutton' alt="" variants = {textVariants}  />
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial ='initial' animate = 'animate'>

                Writer Content Creator Influencer
            </motion.div>
            <div className="imagecontainer">
                <img src="./mypic.png" alt=""></img>
            </div>
        </div>
    )
};

export default Hero;
