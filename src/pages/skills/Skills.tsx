import SkillCard from '@/components/skillCard/SkillCard'

interface Skill {
  name: string;
  img: string;
}

interface SkillsProps {
}

const Skills: React.FC<SkillsProps> = () => {

  const skills: Skill[] = [
    { name: 'CSS', img: '/public/Skills/css3.png' },
    { name: 'CSS', img: '/public/Skills/css3.png' },
    { name: 'CSS', img: '/public/Skills/css3.png' },
    { name: 'CSS', img: '/public/Skills/css3.png' },
    { name: 'CSS', img: '/public/Skills/css3.png' },
    { name: 'CSS', img: '/public/Skills/css3.png' },
    { name: 'CSS', img: '/public/Skills/css3.png' },
    
  ];

  return (
    <div>
      <h2>Habilidades</h2>
      <div>
        {skills.map((skill: Skill, index: number) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;