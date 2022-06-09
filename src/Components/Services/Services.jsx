import React, { useContext } from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './Resume.pdf'
import { themeContext } from '../../Context/Context'
import { motion } from 'framer-motion'

const Services = () => {
    const theme = useContext(themeContext);
    const { darkMode, transition } = theme.state;
    const ftransition = { duration: 2, type: "spring" }
    return (
        <div id='services' className="services">
            {/* left side */}
            <div className="awesome">
                <span style={{ transition: transition, color: darkMode ? 'white' : '' }}>My Awesome</span>
                <span>Services</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus  dolorem
                    <br />
                    enim molestiae sapiente voluptate ea excepturi?</span>
                <a href={Resume} download><button className="button s-button">Download CV</button></a>
                <div className="blur s-blur1" style={{ background: 'rgb(193, 245, 255)', zIndex: '-9' }}></div>
                <div className="blur s-blur2" style={{ background: 'Var(--purple)', zIndex: '-9' }}></div>
            </div>

            {/* right side */}
            <div className="cards">

                <motion.div
                    initial={{ left: '24.5rem' }}
                    whileInView={{ left: '17.5rem' }}
                    transition={ftransition}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        details={'Figma, Sketch, Photoshop, Adome Xd'}
                    />
                </motion.div>

                <motion.div
                    initial={{ left: '-9rem' }}
                    whileInView={{ left: '-4rem' }}
                    transition={ftransition}
                    style={{ top: '12rem' }}>
                    <Card
                        emoji={Glasses}
                        heading={'Developer'}
                        details={'Html, CSS, JavaScript, React'}
                    />
                </motion.div>

                <motion.div
                    initial={{ left: '22rem' }}
                    whileInView={{ left: '15rem' }}
                    transition={ftransition}
                    style={{ top: '21rem' }}>
                    <Card
                        emoji={Humble}
                        heading={'UI/UX'}
                        details={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, aliquid!'}
                    />
                </motion.div>

            </div>
        </div>
    )
}

export default Services