import { skills } from '@/data/skills/skillsData'
import { project} from '@/interface/projectInterface'

export const featuredProjects: project[] = [
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
    },
    {
        title: 'MiniBlog',
        description: 'O MiniBlog é um projeto de um blog onde as pessoas podem se cadastrar para postar, ver, editar e excluir posts.',
        img: '/Projects/MiniBlog.png',
        technologies:[
            skills.html.img,
            skills.css.img,
            skills.javascript.img,
            skills.react.img,
            skills.vite.img,
            skills.firebase.img
        ],
        deploy:'',
        github:'https://github.com/Paulogsiqueira/MiniBlog-React',
        youtube: 'https://www.youtube.com/watch?v=e4bz8RGZ_KI'
    },

];