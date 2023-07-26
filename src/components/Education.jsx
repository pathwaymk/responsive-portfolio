import React from "react";
import school from "../assets/school.svg"
import college from "../assets/college.svg"



export default ({isLight}) => {

    const education = [
        {
            icon : college,
            education : "UNDERGRADUATION AT UCEK",
            year : "2019 - 2023",
            remarks : "I have completed my UG degree at UCEK in MECH (Mechanical Engineering), with a current cgpa of <strong> 8.0 </strong>"
        },

        {
            icon : school,
            education : "HIGHER EDUCATION",
            year : "2018 - 2019",
            remarks : "I have completed my HSC from SGAMHS with major subjects as Physics,Chemistry & Maths with <strong> 70% </strong> merit in TAMIL NADU board."
        },

        {
            icon : school,
            education : "HIGHER EDUCATION",
            year : "2016 - 2017",
            remarks : "I have completed my SSLC from SGAMHS with <strong> 92% </strong> merit in TAMIL NADU board."
        }
    ]

    const eduContent = education.map((data) => {
        return (
            <div className="education">
                <div className={data.icon == college ? "imageIcon college" : "imageIcon"}>
                    <img src={data.icon} alt=""/>
                </div>
                <div className={isLight ? "eduDetails" : "eduDetails black"}>
                    <h3>{data.education} <span>{data.year}</span></h3>
                    <p dangerouslySetInnerHTML={{ __html: data.remarks }} />
                </div>
            </div>
        )
    })
    return(
        <section className="myJourney" id="education">
            <h2 className="lighterHeading">
                My journey
            </h2>

            <section className={isLight ? "educationContent shadow" : "educationContent shadow sback"}>
                {eduContent}
            </section>
        </section>
    )
}