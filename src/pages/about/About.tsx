import '@/styles/about/About.sass'
import { ReactElement } from 'react'

const About: React.FC = (): ReactElement => {
    return (
        <div className='about-container' id="about">
            <h2>Sobre mim</h2>
            <p>
                Graduado em Engenharia Mecânica e atualmente cursando Análise e Desenvolvimento de Sistemas. Desenvolvedor Front-End com experiência em React.js, Redux, JavaScript, TypeScript, Sass, Material UI e consumo de APIs REST. Possuo experiência profissional também com Metodologias Ágeis. No momento busco por oportunidades de ingressar no mercado como desenvolvedor. 
            </p>

        </div>

    )
}

export default About
