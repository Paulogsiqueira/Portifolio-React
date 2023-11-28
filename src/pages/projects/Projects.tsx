import ProjectCard from '@/components/projectCard/ProjectCard'
import '@/styles/project/project.sass'
import { projects } from '@/data/projects/projectsData'
import { featuredProjects } from '@/data/projects/featuredProjectsData'

interface project {
  title: string;
  description: string;
  img: string;

}

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
            <ProjectCard key={index} project={project}/>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Projects;