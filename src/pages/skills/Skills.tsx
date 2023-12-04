import SkillCard from '@/components/skillCard/SkillCard'
import '@/styles/skill/Skill.sass'
import { skills } from '@/data/skills/skillsData'
import { motion,inView } from 'framer-motion';

interface Skill {
  name: string;
  img: string;
}

interface Skills {
  [key: string]: Skill;
}

interface SkillsProps {
}

const Skills: React.FC<SkillsProps> = () => {
  function mapObject<T>(
    obj: Record<string, T>,
    callback: (value: T, key: string) => React.ReactNode
  ): React.ReactNode[] {
    return Object.keys(obj).map((key) => callback(obj[key], key));
  }

  return (
    <motion.div className='skill' id="skills" initial={{ opacity: 0, x:-150 }} animate={{ opacity: 1, x:0 }} transition={{ duration:2}}>
      <h2>Habilidades</h2>
      <div className='skill-list'>
        {mapObject(skills, (skill, key) => (
          <SkillCard key={key} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;