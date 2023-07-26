import React from "react";

export default ({isLight}) => {
    const projectData = [
        {
            title: "CRYPTO PRICE ALERT SYSTEM",
            discription : "A Python project that sends call and SMS alerts to users when cryptocurrencies in their watchlist reach a target price. Utilizing APIs and libraries, the project continuously monitors crypto prices and triggers notifications based on user-defined thresholds. Enhancing convenience and enabling timely actions, this project empowers users to stay updated on their crypto investments."
        },
        {
            title: "DYNAMIC MOVIE DISPLAY",
            discription : "An interactive web application that randomly showcases different movies with a click of a button. Users can explore movie details like title, genre, release year, and overview. The visually appealing interface is designed using HTML, CSS, and JavaScript. It offers an engaging and unpredictable movie browsing experience."
        }
    ]

    const projects = projectData.map((data) => {
        return(
            <div className={isLight ? "project shadow" : "project shadow sback"}>
                <h3>{data.title}</h3>
                <p>{data.discription}</p>
            </div>
        )
    })
    return(
        <section className="projects" id="projects">
            <h2 className="lighterHeading">
                project
            </h2>
            <p className="bold">Creative endeavors gallery</p>
            <div className="projectslist">
                {projects}
            </div>
        </section>
    )
}