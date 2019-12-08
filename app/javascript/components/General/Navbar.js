import React from 'react'
import {NavLink} from 'react-router-dom'


const Navbar = () => {
    
        return(
            <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-transparent">
                <NavLink className="navbar-brand" to="/">Boulder Bike Tour 2020</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-item nav-link" to="/#about">About</NavLink>
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