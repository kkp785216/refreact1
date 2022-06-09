import React, {useContext} from 'react'
import './Toggle.css'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import { themeContext } from '../../Context/Context'

const Toggle = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const handleClick = () => {
        theme.dispatch({type:'toggle'})
    }
    return (
        <div className="toggle">
            <Moon onClick={handleClick}/>
            <Sun onClick={handleClick}/>
            <div className="t-button"
            style={darkMode? {left:'2px'}: {left:'50%'}}></div>
        </div>
    )
}

export default Toggle