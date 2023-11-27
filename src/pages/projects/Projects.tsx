import ProjectCard from '@/components/projectCard/ProjectCard'
import '@/styles/project/project.sass'

interface project {
  title: string;
  description: string;
  img: string;

}

interface ProjectsProps {
}

const Projects: React.FC<ProjectsProps> = () => {
  const projects: project[] = [
    { title: 'Nike Shoes', description:'E-commerce de tênis Nike', img: '/public/Projects/NikeShoes.png' },


  ];

  return (
    <div className='project'>
      <h2>Projetos</h2>
      <div className='project-list'>
        {projects.map((project: project, index: number) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;