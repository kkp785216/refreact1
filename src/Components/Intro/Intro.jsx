import React, { useContext } from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vecror1 from '../../img/Vector1.png'
import Vecror2 from '../../img/Vector2.png'
import Boy from '../../img/boy.png'
import Thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import Glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context/Context'
import { motion } from 'framer-motion'

const Intro = () => {
    const theme = useContext(themeContext);
    const { darkMode, transition } = theme.state;
    const ftransition = { duration: 2, type: "spring" }
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{ transition: transition, color: darkMode ? 'white' : '' }}>Hy! I am</span>
                    <span>Krishna Prajapati</span>
                    <span>Frontend Developer with hegh level of experience in web designing and development, producting the Quality work</span>
                </div>
                <button className="i-button button">Hire me</button>
                <div className="i-icons">
                    <img src={Github} alt="" />
                    <img src={LinkedIn} alt="" />
                    <img src={Instagram} alt="" />
                </div>
                <div className="blur i-blur" style={{ background: 'rgba(238 210 255)', zIndex: '-9' }}></div>
                <div className="blur" style={{ background: 'rgb(193, 245, 255)', zIndex: '-9' }}></div>
            </div>
            <div className="i-right">
                <img src={Vecror1} alt="" />
                <img src={Vecror2} alt="" />
                <img src={Boy} alt="" />

                <motion.img
                    initial={{ left: '-36%' }}
                    whileInView={{ left: '-24%' }}
                    transition={ftransition}
                    src={Glassesimoji} alt=""
                />

                <motion.div
                    initial={{ right: '-10rem' }}
                    whileInView={{ right: '-3rem' }}
                    transition={ftransition}
                    className="floating-div">
                    <FloatingDiv image={Crown} text1={'Web'} text2={'Developer'} />
                </motion.div>

                <motion.div
                    initial={{ left: '-7rem' }}
                    whileInView={{ left: '0rem' }}
                    transition={ftransition}
                    style={{ top: '23rem' }}
                    className="floating-div">
                    <FloatingDiv image={Thumbup} text1={'Best Design'} text2={'Award'} />
                </motion.div>

                {/* Blur divs */}
                <div className="blur" style={{ background: 'rgba(238 210 255)', zIndex: '-9' }}></div>
                <div className="blur" style={{
                    background: '#c1f5ff',
                    top: '17rem',
                    left: '-9rem',
                    width: '21rem',
                    height: '11rem',
                    zIndex: '-9'

                }}></div>
            </div>
        </div>
    )
}

export default Intro