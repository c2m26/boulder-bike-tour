import React from 'react'
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HashLink as Link } from 'react-router-hash-link'


const Navbar = () => {
    
        return(
            <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-white">
                <NavLink className="navbar-brand" to="/">Boulder Bike Tour 2020</NavLink>
                <a id="icon-color" className="nav-item nav-link" href="http://youtube.com" target="_blank"><FontAwesomeIcon icon={['fab','youtube']}/></a>
                <a id="icon-color" className="nav-item nav-link" href="http://instagram.com" target="_blank"><FontAwesomeIcon icon={['fab','instagram']}/></a>
                <a  id="icon-color" className="nav-item nav-link" href="http://twitter.com" target="_blank"><FontAwesomeIcon icon={['fab','twitter']}/></a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link" to="/#about">About</Link>
                        <NavLink className="nav-item nav-link" to="/pictures">Pictures</NavLink>
                        <NavLink className="nav-item nav-link" to="/tracker">Tracker</NavLink>
                        <NavLink className="nav-item nav-link" to="/riders">Riders</NavLink>
                        <NavLink className="nav-item nav-link btn btn-warning text-dark ml-2 p-2" to="/api/v1/slogans/new">Slogan contest</NavLink> 
                    </div>
                    
                </div>
            </nav>
        )
    
}

export default Navbar