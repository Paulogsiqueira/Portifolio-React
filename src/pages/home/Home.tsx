import { useState, useEffect } from 'react';
import { typingEffect } from '@/methods/methods';
import perfil from '/Perfil.jpeg'
import cv from '/Download/Curriculo.pdf'
import '@/styles/home/Home.sass'
import { motion } from 'framer-motion';



const Home = () => {
  const [apresentation, setApresentation] = useState('');
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');

  useEffect(() => {
    typingEffect("Olá, eu sou o", setApresentation);
    setTimeout(() => typingEffect("Paulo Gustavo Siqueira", setName), 1800);
    setTimeout(() => typingEffect("Desenvolvedor Front-End", setPosition), 4200);

  }, []);

  return (
    <div className='home-containers' id="home">
      <div className='home-container description'>
        <h1>{apresentation} <br /><span>{name}</span></h1>
        <h4>{position}</h4>
        <a download={cv} href={cv}>Download CV</a>
      </div>
      <motion.div className='home-container home-img' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration:7}}>
        <img src={perfil} alt="Foto de perfil" />
      </motion.div>

    </div>
  )
}

export default Home