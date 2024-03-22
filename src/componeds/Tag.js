import React from "react";
import "../componeds/Styel.css"
import Styel1 from "../componeds/Styel1.module.css" 

function Tag (){
    return <>
    <h1 style={{color:"black"}}>Jay Shrre Ram...</h1>
    <h1 style={{color:"black"}}>Jay Shrre Ram...</h1>
    <h1 style={{color:"black"}}>Jay Shrre Ram...</h1>
    </>
}
function Tag2(){
    return <>
    <h1 style={{color:"red"}}>Jay Murlidhar...</h1>
    <h1 style={{color:"red"}}>Jay Murlidhar...</h1>
    <h1 style={{color:"red"}}>Jay Murlidhar...</h1>
    </>
}

function Tag3(){
    return<>
    <p style={{backgroundColor:"yellow", border:"2px solid black"}}> A second common modern English style is to use no indenting, but add vertical white space to create "block paragraphs." On a typewriter, a double carriage return produces a blank line for this purpose; professional typesetters </p> 
    <p style={{backgroundColor:"yellow", border:"2px solid black"}}>A second common modern English style is to use no indenting, but add vertical white space to create "block paragraphs." On a typewriter, a double carriage return produces a blank line for this purpose; professional typesetters </p> 
    <p style={{backgroundColor:"yellow", border:"2px solid black"}}>A second common modern English style is to use no indenting, but add vertical white space to create "block paragraphs." On a typewriter, a double carriage return produces a blank line for this purpose; professional typesetters </p>
    <p style={{backgroundColor:"yellow", border:"2px solid black"}}>A second common modern English style is to use no indenting, but add vertical white space to create "block paragraphs." On a typewriter, a double carriage return produces a blank line for this purpose; professional typesetters </p>
    <p style={{backgroundColor:"yellow", border:"2px solid black"}}>A second common modern English style is to use no indenting, but add vertical white space to create "block paragraphs." On a typewriter, a double carriage return produces a blank line for this purpose; professional typesetters </p>
    </>
}
function Tag4(){
    return <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" style={{width:"1000px",height:"500px"}}/>
}
function Tag5(){
    return <ul>
            <li className={Styel1.abc}>Home</li>
            <li>Data</li>
            <li>Contact</li>
            <li>Blog</li>
        </ul>
}



export default Tag;
export {Tag2,Tag3,Tag4,Tag5}
