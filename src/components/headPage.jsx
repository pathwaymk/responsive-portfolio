import React from "react";
import lightModeImg from "../assets/hello.jpg"
import darkModeImg from "../assets/pencile.jpg"
import download from "../assets/download.svg"
import resume from "../assets/Manoj kumar.pdf"


export default ({setLight, isLight}) => {
    const style = {
        backgroundImage : `url(${isLight ? darkModeImg :lightModeImg})`
    }

    const toggle = () => {
        setLight((prev) => !prev)
    }

    return(
        <main style={style} id="home">

            <div className={isLight ? "toggle" : "toggle active"} onClick={toggle}>{isLight ? "Light mode" : "Dark mode"}</div>
            {isLight && <h1 className="hello">HELLO...</h1>}
            <div className="nameNcv">
                <h1>I'm manoj</h1>
                <a href={resume} target="__blank"> <button className="btnColor">View CV <img src={download} alt=""/> </button> </a>
            </div>
        </main>
    )
}