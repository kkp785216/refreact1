import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <div id='navbar' className="n-wrapper">
            <div className="n-left">
                <div className="n-name">KRisHnA</div>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <li>
                            <Link spy={true} to='navbar' smooth={true} activeClass='activeClass'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link spy={true} to='services' smooth={true}>
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link spy={true} to='experience' smooth={true}>
                                Experience
                            </Link>
                        </li>
                        <li>
                            <Link spy={true} to='portfolio' smooth={true}>
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link spy={true} to='testimonials' smooth={true}>
                                Testimonials
                            </Link>
                        </li>
                    </ul>
                </div>
                <button className="button n-button">
                    Contact
                </button>
            </div>
        </div>
    )
}

export default Navbar