import '@/styles/skillCard/SkillCard.sass'

interface Skill {
  name: string;
  img: string;
}

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {

  return (
    <div className="card">
      <h4>{skill.name}</h4>
      <img src={skill.img} alt={skill.name} />
    </div>
  );
};

export default SkillCard;