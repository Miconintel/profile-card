import React from "react";


export default function SkillItem ({item, skillStyle,emoji}){
    // return <li className="skill" style={{color:${skillStyle}}}>{item}</li>
    return <li className="skill" style={{backgroundColor:skillStyle}} >{item} {emoji}</li>
}