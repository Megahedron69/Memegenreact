import React from "react"

export default function Header(){
    return(
        <nav>
        <div className="brandlogo">
        <img src="../images/troll-face.png" alt="logo"/>
        <span className="brand">Meme Generator</span>
        </div>
        <div className="title">
            <p>React Course - Project 3</p>
        </div>
        </nav>
    )
}