import { skills } from '@/data/skills/skillsData'
import { project} from '@/interface/projectInterface'

export const featuredProjects: project[] = [
    {
        title: 'Organizer',
        description: 'O Organizer é um projeto interativo que coloca em prática a metodologia KanBan',
        img: '/Projects/Organizer.png',
        technologies:[
            skills.html.img,
            skills.css.img,
            skills.javascript.img,
            skills.typescript.img,
            skills.react.img,
            skills.vite.img,
            skills.mysql.img,
            skills.node.img
        ],
        deploy:'https://organizer-liard.vercel.app/',
        github:'https://github.com/Paulogsiqueira/Organizer',
        youtube: ''
    },
     {
        title: 'Nike Shoes',
        description: 'E-commerce de tênis Nike com sistema de compras/carrinho e pagamento',
        img: '/Projects/NikeShoes.png',
        technologies:[
            skills.html.img,
            skills.css.img,
            skills.javascript.img,
            skills.react.img,
            skills.redux.img,
            skills.mui.img,
            skills.vite.img
        ],
        deploy:'https://nike-shoes-react.vercel.app/',
        github:'https://github.com/Paulogsiqueira/NikeShoes-React',
        youtube: ''
    },
    {
        title: 'AdoPet',
        description: 'Site para anunicar animais disponíveis para adoção e conectá-los com possíveis tutores',
        img: '/Projects/AdoPet.png',
        technologies:[
            skills.html.img,
            skills.css.img,
            skills.javascript.img,
        ],
        deploy:'https://adopet-front-end.vercel.app/',
        github:'https://github.com/Paulogsiqueira/adopet-front-end',
        youtube: ''
    }

];
