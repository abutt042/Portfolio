import React, { useRef } from "react"
import './Services.scss'
import { color, motion, useInView } from "framer-motion";

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,

    },
    animate: {

        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren : 0.1,
        }
    }
}

const Services = () => {
    const isMobile = window.innerWidth <= 768;
    
    return (
        <motion.div className="services" variants ={variants}
        
        initial={isMobile ? "visible" : "initial"}
      whileInView={isMobile ? {} : "animate"}>
            <motion.div className="textcontainer" variants ={variants}>
                <p>I focus on helping your brand grow <br /> and move forward</p>
                <hr />
            </motion.div>
            <motion.div className="titlecontainer" variants ={variants}>
                <div className="tilte">
                    <img src="/people.webp" alt="" />
                    <h1><motion.b whileHover={{color:'orange'}}>Unique</motion.b> Ideas</h1>

                </div>
                <div className="tilte">
                    <h1><motion.b whileHover={{color:"orange"}}>Find Your</motion.b> Business.</h1>
                    <button>WHAT I DO?</button>

                </div>

            </motion.div>
            <motion.div className="listcontainer" variants ={variants}>
                <motion.div whileHover={{ backgroundColor: 'grey', color: 'black' }} className="box">
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem praesentium repellendus deserunt omnis, similique nobis est, beatae ea?</p>
                    <button>Go</button>
                </motion.div>
                <motion.div whileHover={{ backgroundColor: 'grey', color: 'black' }} className="box">
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem praesentium repellendus deserunt omnis, similique nobis est, beatae ea?</p>
                    <button>Go</button>
                </motion.div>
                <motion.div whileHover={{ backgroundColor: 'grey', color: 'black' }} className="box">
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem praesentium repellendus deserunt omnis, similique nobis est, beatae ea?</p>
                    <button>Go</button>
                </motion.div>
                <motion.div whileHover={{ backgroundColor: 'grey', color: 'black' }} className="box">
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem praesentium repellendus deserunt omnis, similique nobis est, beatae ea?</p>
                    <button style={{marginTop:'5%'}}>Go</button>
                </motion.div>
                </motion.div>

        </motion.div>
    )
};

export default Services;
