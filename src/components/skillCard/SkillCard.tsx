import {skill} from '@/interface/skillInterface'
import { ReactElement } from 'react'
import '@/styles/skillCard/SkillCard.sass'


interface SkillCardProps {
  skill: skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }): ReactElement => {

  return (
    <div className="card">
      <h4>{skill.name}</h4>
      <img src={skill.img} alt={skill.name} />
    </div>
  );
};

export default SkillCard;