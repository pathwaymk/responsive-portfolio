import React from "react";

export default () => {

    const headStyle = {
        padding : "0rem 0rem 1rem 0rem",
        fontSize : "1.17rem",
        letterSpaceing : "0.1rem"
    }
    
    return (
        <section className="about" id="about">
            <h2 className="lighterHeading">ABOUT ME</h2>
            <h3 style={headStyle}> WHO AM I ?</h3>
            <p>My name is <b>MANOJ KUMAR M</b>. I am pursuing my degree in Bachelor of Engineering in Mechanical Engineering from University College Of Engineering Kanchipuram. I am much interested in developing new things which excite me a lot.</p>
            <p>I love exploring new technologies and being a practitioner, I like to stay on top of latest trends. I try to leave every line of code I write more readable, accessible, and modular.</p>
        </section>
        
    )
}