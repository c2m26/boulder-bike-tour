import React from 'react'

const ButtonLinks = () => {
    
    const styleParent = {
        margin: "2rem auto",
        
    }

    return (
    
        <div style={styleParent} className="container row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 d-flex justify-content-center">
                <a className="btn btn-primary" href="#">Pictures</a>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 d-flex justify-content-center">
                <a className="btn btn-primary" href="#">Tracker</a>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 d-flex justify-content-center">
                <a className="btn btn-primary" href="#">Riders</a>
            </div>
        </div>
    )
}

export default ButtonLinks