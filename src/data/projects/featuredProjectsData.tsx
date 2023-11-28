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
            skills.redux.img,
            skills.mui.img
        ],
        deploy:'https://nike-shoes-react.vercel.app/',
        github:'https://github.com/Paulogsiqueira/NikeShoes-React',
        youtube: ''
    },
    {
        title: 'AdoPet',
        description: 'Site para anunicar animais disponíveis para adoção e conectá-los com possíveis tutores',
        img: '/public/Projects/AdoPet.png',
        technologies:[
            skills.html.img,
            skills.css.img,
            skills.javascript.img,
        ],
        deploy:'https://adopet-front-end.vercel.app/',
        github:'https://github.com/Paulogsiqueira/adopet-front-end',
        youtube: ''
    },

];