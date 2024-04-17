import React from "react";

export default function SkillItem({ skill }) {
  return (
    <li className="skill" style={{ backgroundColor: skill.color }}>
      <span>{skill.skill} </span> {/* you can also use the && operator here  */}
      <span>
        {skill.level === "beginner"
          ? "💪"
          : skill.level === "intermediate"
            ? "👍"
            : "😎"}
      </span>
    </li>
  );
}
