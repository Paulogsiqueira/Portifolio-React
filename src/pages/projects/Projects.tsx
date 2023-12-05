import ProjectCard from '@/components/projectCard/ProjectCard'
import '@/styles/project/Project.sass'
import { projects } from '@/data/projects/projectsData'
import { featuredProjects } from '@/data/projects/featuredProjectsData'
import { project} from '@/interface/projectInterface'
import { motion,useInView } from 'framer-motion';
import { useRef } from 'react';


interface ProjectsProps {
}

const Projects: React.FC<ProjectsProps> = () => {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <motion.div className='project' id="projects" ref={ref} animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -150 }} transition={{duration:1}}>
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