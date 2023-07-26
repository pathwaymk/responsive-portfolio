import { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import Content from './components/Content'
// Importing style
import './App.css'
import "./style/skills.css"
import "./style/project.css"
import "./style/navBar.css"
import './style/headPage.css'
import "./style/education.css"
import "./style/content.css"

function App() {
  const [size, setSize] = useState(window.innerWidth)
  const [mode, setLight] = useState(true)
  const [isVisible, setVisible] = useState(size < 956)
  const [displayNav, setDisplay] = useState(size < 956)

  useEffect(() => {
    const body = document.querySelector("body")
    body.className = mode ? "" : "black"
  }, [mode])

  useEffect(() => {
    setVisible(size < 956)
    window.addEventListener("resize", () => setSize(window.innerWidth))
  }, [size])

  const shift = () => {
    setDisplay((prev) => !prev)
  }

  return (
    <>
      {isVisible && 
        <div id="handBurger" onClick={shift} className={displayNav ? "clicked" : ""}>
            <div className={mode ? "hBlack" : "hWhite"} ></div>
            <div className={mode ? "hBlack" : "hWhite"} ></div>
            <div className={mode ? "hBlack" : "hWhite"} ></div>
        </div>}

      <NavBar
        isLight={mode}
        displayNav={displayNav}
        />

      <Content 
      isLight={mode}
      setLight={setLight}/>

    </>
  )
}
export default App