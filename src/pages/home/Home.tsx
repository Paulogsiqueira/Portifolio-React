import '@/styles/home/Home.sass'
import perfil from '/Perfil.png'
import { useState, useEffect } from 'react';
import { typingEffect } from '@/methods/methods';



const Home = () => {
  const [apresentation, setApresentation] = useState('');
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');

  useEffect(() => {
    const interval1 = typingEffect("Olá, eu sou o", setApresentation);
    const interval2 = setTimeout(() => typingEffect("Paulo Gustavo Siqueira", setName), 1800);
    const interval3 = setTimeout(() => typingEffect("Desenvolvedor Front-End", setPosition), 4200);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  return (
    <div className='home-containers'>
      <div className='home-container'>
        <h1>{apresentation} <br/><span>{name}</span></h1>
        <h4>{position}</h4>
      </div>
      <div className='home-container'>
          <img src={perfil} alt="Foto de perfil"/>
      </div>
    </div>
  )
}

export default Home