interface Skill {
  name: string;
  img: string;
}

interface Skills {
  [key: string]: Skill;
}


export const skills: Skills = {
  html:{ name: 'HTML', img: '/Skills/html5.png' },
  css:{ name: 'CSS', img: '/Skills/css3.png' },
  bootstrap:{ name: 'Bootstrap', img: '/Skills/bootstrap.png' },
  sass:{ name: 'Sass', img: '/Skills/sass.png' },
  javascript:{ name: 'JavaScript', img: '/Skills/javascript.png' },
  typescript:{ name: 'TypeScript', img: '/Skills/typescript.png' },
  php:{ name: 'PHP', img: '/Skills/php.png' },
  vue:{ name: 'Vue.js', img: '/Skills/vue.png' },
  react:{ name: 'React.js', img: '/Skills/react.png' },
  redux:{ name: 'Redux', img: '/Skills/redux.png' },
  mui:{ name: 'Material UI', img: '/Skills/mui.png' },
  mysql:{ name: 'MySQL', img: '/Skills/mysql.png' },
  firebase:{ name: 'FireBase', img: '/Skills/firebase.png' },
  git:{ name: 'Git', img: '/Skills/git.png' },
  jira:{ name: 'Jira', img: '/Skills/jira.png' },
  trello:{ name: 'Trello', img: '/Skills/trello.png' },
  figma:{ name: 'Figma', img: '/Skills/figma.png' },
  vite:{ name: 'Vite', img: '/Skills/vite.png' },
  bulma:{ name: 'Bulma', img: '/Skills/bulma.png' },
}