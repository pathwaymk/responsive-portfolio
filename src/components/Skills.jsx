import React from "react";
import java from "../assets/java.png"
import python from "../assets/python.png"
import sql from "../assets/sql.png"
import web from "../assets/web.png"


export default ({isLight}) => {
    const skillData = [
        {
            icon : java,
            name: "JAVA",
            remarks: "Java enthusiast continuously exploring innovative solutions through efficient code. Dedicated to expanding knowledge and skills in Java development."
        },

        {
            icon : web,
            name: "WEB DEVELOPMENT",
            remarks: "Front-end web developer learning and updating skills in ReactJS for scalable and interactive web applications, with a focus on enhancing user experiences."
        },

        {
            icon : python,
            name: "PYTHON",
            remarks: "Passionate about Python, continuously seeking innovative solutions through efficient coding to drive impactful results."
        },

        {
            icon : sql,
            name: "SQL",
            remarks: "SQL beginner eager to master database management and query execution. Committed to expanding skills and knowledge in SQL to develop efficient database solutions and extract valuable insights from data."
        }
    ]

    const skills = skillData.map((data) => {
        return(
            <div className="skillItems">
                <div className="skillImg">
                    <img src={data.icon} alt=""/>
                </div>
                <h3>{data.name}</h3>
                <p>{data.remarks}</p>
            </div>
        )
    })

    return(
        <section className="Skills" id="skills">
            <h2 className="lighterHeading">
                what i do ?
            </h2>
            <p className="bold">HERE ARE SOME OF MY EXPERTISE</p>
            <div className= {isLight ? "skillList shadow" : "skillList shadow sback"}>
                {skills}
            </div>
        </section>
    )
}