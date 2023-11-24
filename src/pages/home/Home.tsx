import '@/styles/home/Home.sass'
import perfil from '../../../public/Perfil.png'

const Home = () => {
  return (
    <div className='home-containers'>
      <div className='home-container'>
        <p>
          Olá! Sou Paulo Gustavo Siqueira, bacharel em Engenharia Mecânica e apaixonado por desenvolvimento Front-end com especialidade em HTML, CSS e JAVASCRIPT.
          <br/>
          <br/> Minha jornada no mundo do desenvolvimento começou em 2021, e desde então, tenho dedicado meu tempo ao aprimoramento constante. Sempre focando em otimização de código e na experiência do usuário.
          <br/>
          <br/>Que tal conhecer melhor meu trabalho?
        </p>
      </div>
      <div className='home-container'>
          <img src={perfil} alt="Foto de perfil"/>
      </div>
    </div>
  )
}

export default Home