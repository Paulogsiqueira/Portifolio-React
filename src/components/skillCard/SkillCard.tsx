import React from 'react';
import css from '/public/Skills/css3.png'

interface Skill {
  name: string;
  img: string;
}

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  console.log(skill);

  return (
    <div>
      <div>{skill.name}</div>
      <img src={skill.img} alt={skill.name} />
    </div>
  );
};

export default SkillCard;