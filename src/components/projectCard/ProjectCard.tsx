import '@/styles/projectCard/ProjectCard.sass'
import github from '/Projects/Icons/github.png'
import deploy from '/Projects/Icons/deploy.png'
import youtube from '/Projects/Icons/youtube.png'
import { project} from '@/interface/projectInterface'

interface ProjectCardProps {
    project: project;
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
            <div className='project-card__links'>
                <a href={project.github}><img src={github}/>Repositório</a>
                {project.deploy != "" && <a href={project.deploy}><img src={deploy}/>Deploy</a>}
                {project.youtube != "" && <a href={project.youtube}><img src={youtube}/>Vídeo</a>}
            </div>
        </div>
    );
};

export default ProjectCard;