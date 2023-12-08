import { featuredProjects } from '@/data/projects/featuredProjectsData'
import { motion, useInView } from 'framer-motion';
import { projects } from '@/data/projects/projectsData'
import { project } from '@/interface/projectInterface'
import { useRef, ReactElement } from 'react';
import ProjectCard from '@/components/projectCard/ProjectCard'
import '@/styles/project/Project.sass'

const Projects: React.FC = (): ReactElement => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView: boolean = useInView(ref)

  return (
    <motion.div className='project' id="projects" ref={ref} animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -150 }} transition={{ duration: 1 }}>
      <h2>Projetos</h2>
      <p className='project-subtitle'>Projetos pessoais desenvolvidos para praticar conceitos e ajudar a fixá-los</p>
      <div className='featured'>
        <h3>Destaques</h3>
        <div className='project-list'>
          {featuredProjects.map((project: project, index: number) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      <div className='allProjects'>
        <h3>Todos os projetos</h3>
        <div className='project-list'>
          {projects.map((project: project, index: number) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

    </motion.div>
  );
};

export default Projects;