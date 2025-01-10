import { useState, useEffect, ReactElement } from 'react';
import { typingEffect } from '@/methods/methods';
import { motion } from 'framer-motion';
import perfil from '/Perfil.jpeg'
import cv from '/Curriculo.pdf'
import '@/styles/home/Home.sass'


const Home: React.FC = (): ReactElement => {
  const [apresentation, setApresentation] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [position, setPosition] = useState<string>('');

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
