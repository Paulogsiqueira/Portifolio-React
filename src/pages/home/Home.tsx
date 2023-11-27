import '@/styles/home/Home.sass'
import perfil from '../../../public/Perfil.png'

const Home = () => {
  return (
    <div className='home-containers'>
      <div className='home-container'>
        <h1>Olá, eu sou o <br/><span>Paulo Gustavo Siqueira</span></h1>
        <h4>Desenvolvedor Front-End</h4>
      </div>
      <div className='home-container'>
          <img src={perfil} alt="Foto de perfil"/>
      </div>
    </div>
  )
}

export default Home