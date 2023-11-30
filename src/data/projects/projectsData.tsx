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
    title: 'Secret Word',
    description: 'Jogo de advinhação, onde é informado para o usuário uma categoria e ele deve descobrir a palavra secreta que pertence a essa categoria',
    img: '/Projects/SecretWord.png',
    technologies: [
      skills.html.img,
      skills.css.img,
      skills.javascript.img,
      skills.react.img
    ],
    deploy: 'https://secret-word-react-eight.vercel.app/',
    github: 'https://github.com/Paulogsiqueira/SecretWord-React',
    youtube: ''
  },
  {
    title: 'Make Your Burguer',
    description: 'Site de hamburgueria, com funções de montar o lanche, acompanhar o pedido e enviar mensagem a hamburgueria.',
    img: '/Projects/MakeYourBurguer.png',
    technologies: [
      skills.html.img,
      skills.css.img,
      skills.typescript.img,
      skills.vue.img
    ],
    deploy: 'https://paulogsiqueira.github.io/HamburguerDistCode/contato',
    github: 'https://github.com/Paulogsiqueira/Hamburgueria-Vue',
    youtube: 'https://www.youtube.com/watch?v=1V_nxOO8Ho4'
  },
  {
    title: 'Controle de Estudos',
    description: 'Projeto para adicionar tema que precisam ser estudados, e calcular o tempo gasto com cada tame',
    img: '/Projects/ControleDeEstudos.png',
    technologies: [
      skills.html.img,
      skills.css.img,
      skills.typescript.img,
      skills.vue.img
    ],
    deploy: 'https://controle-para-estudo-vue.vercel.app/#/',
    github: 'https://github.com/Paulogsiqueira/ControleParaEstudo-Vue',
    youtube: ''
  },
  {
    title: 'Easy Bank',
    description: 'Pagina inicial de um banco digital chamado Easy Bank',
    img: '/Projects/EasyBank.png',
    technologies: [
      skills.html.img,
      skills.css.img,
      skills.typescript.img,
      skills.vue.img
    ],
    deploy: 'https://easy-bank-vue.vercel.app/',
    github: 'https://github.com/Paulogsiqueira/EasyBank-Vue',
    youtube: ''
  },
  {
    title: 'Replica Pichau',
    description: 'Site desenvolvido se baseando no site da Pichau',
    img: '/Projects/Pichau.png',
    technologies: [
      skills.html.img,
      skills.css.img,
      skills.php.img
    ],
    deploy: '',
    github: 'https://github.com/Paulogsiqueira/PichauPHP',
    youtube: 'https://www.youtube.com/watch?v=UQvpWp_-we0'
  },
  {
    title: 'Alura Books',
    description: 'Pagina inicial de uma biblioteca chamada Alura Books',
    img: '/Projects/AluraBooks.png',
    technologies: [
      skills.html.img,
      skills.css.img,
      skills.javascript.img,
    ],
    deploy: 'https://paulogsiqueira.github.io/Projeto-AluraBook/',
    github: 'https://github.com/Paulogsiqueira/Projeto-AluraBook',
    youtube: ''
  },
  {
    title: 'Apeperia',
    description: 'Site para encomendar aplicativos sob medida',
    img: '/Projects/Apeperia.png',
    technologies: [
      skills.html.img,
      skills.css.img,
    ],
    deploy: 'https://paulogsiqueira.github.io/Site-Apeperia-Alura/',
    github: 'https://github.com/Paulogsiqueira/Site-Apeperia-Alura',
    youtube: ''
  }


];