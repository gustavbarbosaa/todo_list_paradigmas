import { FaEquals, FaPlus } from 'react-icons/fa'
import './index.css'
import Tarefa from '../Tarefa'

export default function Listagem({ tarefas, onAlteraStatus, onAdicionaTarefa, onRemoveTarefa, novaTarefa, setNovaTarefa, setFiltro }) {
  return (
    <div className="listagem-container">
      <div className="listagem">
        <div className="listagem-header">
          <input
            type="text"
            name="nomeTarefa"
            id="nomeTarefa"
            placeholder="O que você precisa fazer?"
            value={novaTarefa}
            onChange={(event) => setNovaTarefa(event.target.value)}
          />
          <button className="listagem-button" onClick={() => onAdicionaTarefa()}>
            <FaPlus />
          </button>
        </div>

        <div className="listagem-filter">
          <div className="listagem-filter-item">
            <span className="listagem-filter-span" onClick={() => setFiltro("todos")}>Todas</span>
            <span className="listagem-filter-span" onClick={() => setFiltro("pendentes")}>Pendentes</span>
            <span className="listagem-filter-span" onClick={() => setFiltro("concluidas")}>Concluídas</span>
          </div>

          <FaEquals className="listagem-filter-icon" />
        </div>

        <div className="tarefas-container">
          {tarefas.map(tarefa => (
            <Tarefa
              key={tarefa.id}
              tarefa={tarefa}
              onAlteraStatus={onAlteraStatus}
              onRemoveTarefa={onRemoveTarefa}
            />
          ))}
        </div>

      </div>
    </div>
  )
}
