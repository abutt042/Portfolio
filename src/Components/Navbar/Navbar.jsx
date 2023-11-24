import './Navbar.scss';
import { motion } from 'framer-motion';
import CV from './cv.pdf';
const Navbar = () => {

    return(

<div className='navbar'>
    <div className="wrapper">
        <motion.span initial = {{opacity : 0, scale : 0.5}} animate = {{opacity : 1, scale : 1}} transition = {{duration:0.5}}>Abdullah Bin Tariq</motion.span>
        <div className="social">
            <a href={CV} target='_blank' download >
        <button >Download My CV</button>
        </a>
            <a href='https://github.com/abutt042' target='_blank'><img src='/github_64.png' alt=''/></a>
            <a href='https://www.facebook.com/abdullah.butt.73307634' target='_blank'><img src='/facebook.png' alt=''/></a>
            <a href='https://www.instagram.com/ab_here_1/' target='_blank'><img src='/instagram.png' alt=''/></a>
            <a href='https://www.linkedin.com/in/abdullah-bin-tariq-1775391a7/' target='_blank'><img src='/linkedin.png' alt=''/></a>

        </div>
    </div>

</div>

    )
}
export default Navbar

