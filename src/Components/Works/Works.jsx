import React, { useContext } from 'react'
import './Works.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import Resume from './resume.pdf'
import { themeContext } from '../../Context/Context'
import { motion } from 'framer-motion'

const Works = () => {
    const theme = useContext(themeContext);
    const { darkMode, transition } = theme.state;
    const ftransition = { duration: 3.5, type: "spring" }
    return (
        <div className="works">
            {/* Left Side */}
            <div className="w-left">
                <span style={{ transition: transition, color: darkMode ? 'white' : '' }}>Works for All these</span>
                <span>Brands &amp; Clints</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus  dolorem
                    <br />
                    Lorem ipsum dolor sit amet consectetur.
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis?
                    <br />
                    Lorem ipsum dolor sit amet.
                </span>
                <a href={Resume} download><button className="button s-button">Download CV</button></a>
                <div className="blur s-blur1" style={{ background: 'rgb(193, 245, 255)', zIndex: '-9' }}></div>
            </div>

            {/* Right side */}
            <div className="w-right">

                <motion.div
                    initial={{ transform:'rotate(45deg)' }}
                    whileInView={{ transform:'rotate(0deg)' }}
                    transition={ftransition}
                    viewport={{margin:'-40px'}}
                    className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} style={{ width: '3rem' }} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                </motion.div>

                {/* Background circle */}
                <div className="backCircle blueCircle"></div>
                <div className="backCircle yellowCircle"></div>
                <div className="blur w-blur2" style={{ background: 'Var(--purple)', zIndex: '-9' }}></div>
            </div>
        </div>
    )
}

export default Works