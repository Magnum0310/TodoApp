import React from "react"

function Footer(){

    const currentYear = new Date().getFullYear();
    console.log(currentYear)

    return <footer className="footer">Copyright © {currentYear}</footer>
}

export default Footer;