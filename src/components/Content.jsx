import React from "react";
import About from "./about";
import Education from "./Education";
import Skills from "./Skills";
import Project from "./projects";
import HeadPage from "./headPage";


export default ({isLight, setLight}) => {

    return(
        <section className="mainPage long">
            <HeadPage 
            isLight={isLight}
            setLight={setLight}
            />

            <section className="mainContent">
                <About />
                <Education 
                isLight={isLight}/>
                <Skills 
                isLight={isLight}/>
                <Project 
                isLight={isLight}/>
            </section>
        </section>
    )
}