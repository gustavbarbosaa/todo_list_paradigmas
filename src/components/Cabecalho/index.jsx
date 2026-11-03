import { FaAsterisk } from 'react-icons/fa'
import Logo from '../Logo'
import './index.css'

export default function Cabecalho() {
  return (
    <header className="cabecalho-container">
      <div className="cabecalho">
        <Logo />

        <div className="pill-container">
          <span className="pill-text">Meu Espaço</span>
        </div>
      </div>

      <div className="title-container">
        <span className="date-title">SEXTA-FEIRA, 16 DE OUTUBRO</span>
        <div className="title-icon-container">
           <h1 className="title">Minhas Tarefas</h1>
           <FaAsterisk className="title-icon" />
        </div>
        <span className="description">Organize seu dia, uma tarefa de cada vez.</span>
      </div>
    </header>
  )
}