import React from 'react'


const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <a className="navbar-brand" href="#">Boulder Bike Tour 2020</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link" href="#">About</a>
                    <a className="nav-item nav-link" href="#">Pictures</a>
                    <a className="nav-item nav-link" href="#">Tracker</a>
                    <a className="nav-item nav-link" href="/riders">Riders</a>
                    <a className="nav-item nav-link btn btn-danger text-white ml-2 p-2">Slogan contest</a> 
                </div>
                
            </div>
        
        </nav>
    )
}

export default Navbar