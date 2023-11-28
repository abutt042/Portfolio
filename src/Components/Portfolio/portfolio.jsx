import React, { useRef } from "react"
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Mepco from "../../mepcosmart.jpeg";
import eops from "../../e-Operations.png";
import citizen from "../../CitizenMoniter.png"

const Portfoilio = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"], })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });
    const items = [{
        id: 1,
        title: "Mepco Smart",
        img: Mepco,
        des: "MEPCO smart is a web application developed in React with backend API's in.Net and SQL Server. This web app offers smart Meter consumers features: realtime monitoring of load, energy profiles, consumption and payment status,outage, energy advisor, bill estimator with 44 tariffs and initiation of customerservices (new connection, change of attributes, bill correction, meter reading correction, complaints, meter change request, opt for smart meter), duplicatebill and online payment",
        link : "http://117.20.28.178:8040/"
    
    },
    {
        id: 2,
        title: "Citizen Moniter (Web Portal)",
        img: eops,
        des: "An admin portal to display hierarchical dashboard stats of theft case along with role based operations on the submitted electricity theft case developed during the anti-theft campaign launched by ministry of energy (MoE) power division of Pakistan.",
        link : "http://117.20.28.178:8044/"
    },
    {
        id: 3,
        title: "e-Ops (Smart Services Plateform)",
        img: citizen,
        des: "e-Ops is web portal is developed in React.js and backend in DotNet with SQL Server. This portal is used by field operations staff in all 10 Discos customer support centers to process consumers’ requests: new connection, change of attributes, bill correction, meter reading correction, complaints, meter change request, opt for smart meter etc.",
        link : "http://117.20.28.178:8037/"
   
    },


    ]

    const Single = ({ item }) => {
        const ref = useRef()
        const { scrollYProgress } = useScroll({ target: ref,  })
        const y = useTransform(scrollYProgress, [0, 1], [-400, 400])

        return (<section  >
            <div className="container">
            <div className="wrapper">
                <div className="imagecontainer" ref={ref}>

                <img src={item.img} alt='' />

                </div>
                <motion.div className="textcontainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.des}</p>
                    <a href={item.link} target="_blank">
                    <button>See Demo</button>
                    </a>
                </motion.div>
            </div>
        </div></section>)
    }
    return (
        <div className="portfolio" ref={ref} >
            <div className="progress">
                <h1>Projects</h1>
                <motion.div style={{ scaleX }} className="progressbar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            )

            )}

        </div>
    )
};

export default Portfoilio;
