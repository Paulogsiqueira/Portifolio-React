import { project} from '@/interface/projectInterface'
import { ReactElement } from 'react'
import github from '/Projects/Icons/github.png'
import deploy from '/Projects/Icons/deploy.png'
import youtube from '/Projects/Icons/youtube.png'
import '@/styles/projectCard/ProjectCard.sass'

interface ProjectCardProps {
    project: project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }): ReactElement => {
    const technologies: string[] = project.technologies

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
                <a href={project.github} target="_blank" rel="noopener noreferrer"><img src={github} alt="Icone Github"/>Repositório</a>
                {project.deploy != "" && <a href={project.deploy} target="_blank" rel="noopener noreferrer"><img src={deploy} alt="Icone Deploy"/>Deploy</a>}
                {project.youtube != "" && <a href={project.youtube} target="_blank" rel="noopener noreferrer"><img src={youtube} alt="Icone Youtube"/>Vídeo</a>}
            </div>
        </div>
    );
};

export default ProjectCard;