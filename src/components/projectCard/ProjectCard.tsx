import '@/styles/projectCard/ProjectCard.sass'

interface Project {
    title: string;
    description: string;
    img: string;
    technologies: string[];
}

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const technologies = project.technologies

    return (
        <div className="project-card">
            <div className='project-card__img'>
                <img src={project.img} alt={project.title} />
            </div>
            <div className='project-card__description'>
                {technologies.map((tecno: string,index:number) =>(
                    <img className='project-card__technologies' key={index} src={tecno} alt={tecno}/>
                ))}
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                
            </div>
        </div>
    );
};

export default ProjectCard;