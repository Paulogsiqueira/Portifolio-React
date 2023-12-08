import { motion, useInView } from 'framer-motion';
import { skills } from '@/data/skills/skillsData'
import { useRef, ReactElement } from 'react';
import SkillCard from '@/components/skillCard/SkillCard'
import '@/styles/skill/Skill.sass'


const Skills: React.FC = (): ReactElement => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView: boolean = useInView(ref)

  function mapObject<T>(
    obj: Record<string, T>,
    callback: (value: T, key: string) => React.ReactNode
  ): React.ReactNode[] {
    return Object.keys(obj).map((key) => callback(obj[key], key));
  }

  return (
    <motion.div className='skill' id="skills" ref={ref} animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -150 }} transition={{ duration: 1 }}>
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