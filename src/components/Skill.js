import React from "react";
import SkillItem from "./SkillItem";



export default function Skill () {
  return <ul className="skill-list">
  <SkillItem item="css" skillStyle="red" emoji="🤴"/>
  <SkillItem item="javascript" skillStyle="orange" emoji="👩‍🦲" />
  <SkillItem item="html" skillStyle="blue" emoji="👳‍♂️"/>
  <SkillItem item="sass" skillStyle="green" emoji="👼"/>
  <SkillItem item="php" skillStyle="pink" emoji="👳‍♀️"/>
    </ul>
}