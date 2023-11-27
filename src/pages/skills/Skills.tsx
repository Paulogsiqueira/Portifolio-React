import SkillCard from '@/components/skillCard/SkillCard'
import '@/styles/skill/Skill.sass'

interface Skill {
  name: string;
  img: string;
}

interface SkillsProps {
}

const Skills: React.FC<SkillsProps> = () => {
  const skills: Skill[] = [
    { name: 'HTML', img: '/public/Skills/html5.png' },
    { name: 'CSS', img: '/public/Skills/css3.png' },
    { name: 'Bootstrap', img: '/public/Skills/bootstrap.png' },
    { name: 'Sass', img: '/public/Skills/sass.png' },
    { name: 'JavaScript', img: '/public/Skills/javascript.png' },
    { name: 'TypeScript', img: '/public/Skills/typescript.png' },
    { name: 'Vue.js', img: '/public/Skills/vue.png' },
    { name: 'React.js', img: '/public/Skills/react.png' },
    { name: 'Redux', img: '/public/Skills/redux.png' },
    { name: 'Material UI', img: '/public/Skills/mui.png' },
    { name: 'MySQL', img: '/public/Skills/mysql.png' },
    { name: 'Git', img: '/public/Skills/git.png' },
    { name: 'Jira', img: '/public/Skills/jira.png'},
    { name: 'Trello', img: '/public/Skills/trello.png'},
    { name: 'Figma', img: '/public/Skills/figma.png'},
  ];

  return (
    <div className='skill'>
      <h2>Habilidades</h2>
      <div className='skill-list'>
        {skills.map((skill: Skill, index: number) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;