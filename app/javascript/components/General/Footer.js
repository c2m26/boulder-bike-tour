import React from 'react'


const Footer = () =>{
    
const styles = {
    minHeight: "2.5rem",
    marginTop: "1.5rem",
}

    return (
        <footer style={styles}>
            <div className="d-flex justify-content-center">
                <a className="nav-item nav-link fab fa-youtube" href="http://youtube.com" target="_blank"></a>
                <a className="nav-item nav-link fab fa-instagram" href="http://instagram.com" target="_blank"></a>
                <a className="nav-item nav-link fab fa-twitter" href="http://twitter.com" target="_blank"></a>
            </div>
        </footer>
    )
}

export default Footer