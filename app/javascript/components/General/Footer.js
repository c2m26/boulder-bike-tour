import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Footer.css"


const Footer = () =>{
    

    return (
        <footer id="footer">
            <div className="d-flex justify-content-center align-items-center">
                <a id="icon-color" className="nav-item nav-link" href="http://youtube.com" target="_blank"><FontAwesomeIcon icon={['fab','youtube']}/></a>
                <a id="icon-color" className="nav-item nav-link" href="http://instagram.com" target="_blank"><FontAwesomeIcon icon={['fab','instagram']}/></a>
                <a  id="icon-color" className="nav-item nav-link" href="http://twitter.com" target="_blank"><FontAwesomeIcon icon={['fab','twitter']}/></a>
            </div>
        </footer>
    )
}

export default Footer