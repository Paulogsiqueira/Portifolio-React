import '@/styles/projectCard/ProjectCard.sass'

interface Project {
    title: string;
    subtitle: string;
    img: string;

}

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {

    return (
        <div className="project-card">
            <div className='project-card__img'>
                <img src={project.img} alt={project.title} />
                <h4>{project.title}</h4>
            </div>
            <p>{project.subtitle}</p>
        </div>
    );
};

export default ProjectCard;