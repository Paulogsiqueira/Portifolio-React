interface Skill {
  name: string;
  img: string;
}

interface Skills {
  [key: string]: Skill;
}


export const skills: Skills = {
  html:{ name: 'HTML', img: '/public/Skills/html5.png' },
  css:{ name: 'CSS', img: '/public/Skills/css3.png' },
  bootstrap:{ name: 'Bootstrap', img: '/public/Skills/bootstrap.png' },
  sass:{ name: 'Sass', img: '/public/Skills/sass.png' },
  javascript:{ name: 'JavaScript', img: '/public/Skills/javascript.png' },
  typescript:{ name: 'TypeScript', img: '/public/Skills/typescript.png' },
  vue:{ name: 'Vue.js', img: '/public/Skills/vue.png' },
  react:{ name: 'React.js', img: '/public/Skills/react.png' },
  redux:{ name: 'Redux', img: '/public/Skills/redux.png' },
  mui:{ name: 'Material UI', img: '/public/Skills/mui.png' },
  mysql:{ name: 'MySQL', img: '/public/Skills/mysql.png' },
  git:{ name: 'Git', img: '/public/Skills/git.png' },
  jira:{ name: 'Jira', img: '/public/Skills/jira.png' },
  trello:{ name: 'Trello', img: '/public/Skills/trello.png' },
  figma:{ name: 'Figma', img: '/public/Skills/figma.png' },
}