import "./footer.css"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import React from "react"

const Footer = () => {
    return (
        <div className="footer">
            <div className="fText"><h2 className="text-light">©2023 Dream Booking</h2></div>
            <div className="redesSociais">
                <FaFacebook />
                <FaLinkedin />
                <FaTwitter />
                <FaInstagram />
            </div>
        </div>

    )
}

export default Footer