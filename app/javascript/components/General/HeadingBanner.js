import React from 'react'
import '../../../assets/stylesheets/styles.scss'
import './HeadingBanner.css'


function HeadingBanner (props) {
    
        const styles = {
        backgroundImage: "url(" + props.image + ")"
   }
    
    return (
        <div style={styles} className="headingbanner">
            <h1 className="bg-shade d-flex justify-content-center align-items-center text-white"> {props.heading} </h1>
            
        </div>
    )
}

export default HeadingBanner