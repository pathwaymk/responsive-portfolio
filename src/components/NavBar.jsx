import React from "react";
import dp from "../assets/self.jpg"
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import instagram from '../assets/instagram.svg'
import email from '../assets/email.png'
export default ({isLight, displayNav}) => {

    const data = ["#programer_life", "#hello_world", "#coding"]
    const mail = "manojmk27@outlook.com"
    const navEle = ["home", "about", "education", "skills", "projects"]
    const socialImg = [
        {
            icon : github,
            link : "https://github.com/pathwaymk"
        },
        {
            icon : linkedin,
            link : "https://www.linkedin.com/in/manoj-kumar-m-82707a219/"
        },
        {
            icon : instagram,
            link : "https://www.instagram.com/__manoj.mk__/?hl=en"
        }
    ]
    const socialIcons = socialImg.map(image => <a href={image.link}><img src={image.icon} alt="" className={!isLight && "svgBlack"}/></a>)

    const content = data.map((value) => <p>{value}</p>)
    const Name = ({name}) => <h1>{name}</h1>
    const navElements = navEle.map(value => <a href={`#${value}`}>{value}</a>) 

    return(
        <nav className={isLight ? "" : "black"} id={displayNav && "show"}>
            <div className="context">
                {content}
            </div>
            <Name 
                name={"Manoj Kumar M"}
            />
            <div className="profile">
                <img src={dp} alt="Display image" />
            </div>
            <div className="mail">
                <img src={email} alt="" className={!isLight && "svgBlack"}/>
                <span className="mail">{mail}</span>
            </div>
            <div className="navContent">
                {navElements}
            </div>
            <div className="socialIcons">
                {socialIcons}
            </div>
            <a href="mailto:manojmk27@outlook.com">
                <button className="btnColor">Get touch</button>
            </a>
        </nav>
    )
}