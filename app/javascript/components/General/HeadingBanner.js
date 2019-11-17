import React from 'react'


function HeadingBanner (props) {
    
        const styles = {
        minHeight: "20vh",
        backgroundImage: "url(" + props.image + ")",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
   }
    
    return (
        <div style={styles} className="jumbotron jumbotron-fluid">
            <h1 className="d-flex justifiy-content-center align-items-center"> {props.heading} </h1>
            
        </div>
    )
}

export default HeadingBanner