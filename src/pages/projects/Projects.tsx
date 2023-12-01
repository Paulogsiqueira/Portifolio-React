import ProjectCard from '@/components/projectCard/ProjectCard'
import '@/styles/project/Project.sass'
import { projects } from '@/data/projects/projectsData'
import { featuredProjects } from '@/data/projects/featuredProjectsData'
import { project} from '@/interface/projectInterface'


interface ProjectsProps {
}

const Projects: React.FC<ProjectsProps> = () => {

  return (
    <div className='project'>
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

    </div>
  );
};

export default Projects;