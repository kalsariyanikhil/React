import React from "react";
import "../componeds/Styel.css"
import Styel1 from "../componeds/Styel1.module.css" 
import img from "../img/about-6.jpg"

function Tag (){
    return <>
    <h1 style={{color:"black"}}>Jay Shrre Ram...</h1>
    <h2 style={{color:"black"}}>Jay Shrre Ram...</h2>
    <h3 style={{color:"black"}}>Jay Shrre Ram...</h3>
    </>
}
function Tag2(){
    return <>

    <h1 style={{color:"red"}}>Jay Murlidhar...</h1>
    <h2 style={{color:"red"}}>Jay Murlidhar...</h2>
    <h3 style={{color:"red"}}>Jay Murlidhar...</h3>
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
            <li className="mt-5 text-center text-red-600">Data</li>
            <li>Contact</li>
            <li>Blog</li>
        </ul>
}

function Tag6(){
    let style = {
        color:"red"
    }
    return <h1 style={style}>Nikhil</h1>
}


    // const A = new Date(2024,4,5,13)
    // let time = A.getHours();
    // let Timing ="";

    // if (time < 12) {
    //     Timing = "GooD Morning"
    // } else if (time >= 12 && time < 19) {
    //     Timing = "GooD AfterNoon"
    // }
    // else{
    //     Timing = "GooD Night"
    // }

    // function Tag7 (){
    //     return <div>
    //         <img src={img}/>
    //         <h1 className="text-yellow-500 bg-black font-bold text-2xl">
    //             Hello Mam -- {Timing}
    //         </h1>
    //     </div>
    // }



// export default Tag;
// export {Tag2,Tag3,Tag4,Tag5,Tag6}
