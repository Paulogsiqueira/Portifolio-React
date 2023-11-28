import { skills } from '@/data/skills/skillsData'

interface project {
    title: string;
    description: string;
    img: string;
    technologies: string[];
    deploy: string;
    github: string;
    youtube: string;
    
}

export const projects: project[] = [
    {
        title: 'Make Your Burguer',
        description: 'Site de hamburgueria, com funções de montar o lanche, acompanhar o pedido e enviar mensagem a hamburgueria.',
        img: '/public/Projects/MakeYourBurguer.png',
        technologies:[
            skills.html.img,
            skills.css.img,
            skills.javascript.img,
            skills.typescript.img,
            skills.vue.img
        ],
        deploy:'https://paulogsiqueira.github.io/HamburguerDistCode/contato',
        github:'https://github.com/Paulogsiqueira/Hamburgueria-Vue',
        youtube: 'https://www.youtube.com/watch?v=1V_nxOO8Ho4'
    },


];