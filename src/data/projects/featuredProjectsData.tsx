import { skills } from '@/data/skills/skillsData'

interface project {
    title: string;
    description: string;
    img: string;
    technologies: string[];
    
}

export const featuredProjects: project[] = [
    {
        title: 'Nike Shoes',
        description: 'E-commerce de tênis Nike com sistema de compras/carrinho e pagamento',
        img: '/public/Projects/NikeShoes.png',
        technologies:[
            skills.html.img,
            skills.css.img,
            skills.javascript.img,
            skills.react.img,
            skills.redux.img
        ]


    },


];