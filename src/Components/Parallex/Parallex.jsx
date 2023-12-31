import React, { useRef } from "react"
import './parallex.scss';
import { motion, useScroll, useTransform } from "framer-motion";

const Parallex = ({type}) => {

const ref = useRef();
const {scrollYProgress} = useScroll({
  target:ref,
 offset : ['start start', "end start"]
});
const yText = useTransform(scrollYProgress,[0, 1], ["0%", "200%"]);
const ybg = useTransform(scrollYProgress,[0, 1], ["0%", "100%"])


  return (
    <div className="parallex" ref={ref} style={{background:type==="services" ? "linear-gradient(180deg, #111132, #0c0c1d)" : "linear-gradient(180deg, #111132, #505064)"}}>
      <motion.h1 style={{y:yText}}  >{type === "services" ? "What I Do?": "What I Did? "}</motion.h1>
      <motion.div   className="mountains"></motion.div>
      <motion.div  className="planets" style={{backgroundImage : `url(${type === 'services' ? "/planets.png": "/sun.png"})`, y:yText}}></motion.div>
      <motion.div  style={{x: ybg}}  className="stars"></motion.div>
    </div>
  )
};

export default Parallex;
