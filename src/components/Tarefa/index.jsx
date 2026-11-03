import { FaCheck, FaEllipsisH, FaRegCircle } from "react-icons/fa";
import './index.css';

export default function Tarefa({ tarefa, onAlteraStatus, onRemoveTarefa }) {
  return (
    <div className="tarefa">
      <div className="tarefa-check" onClick={() => onAlteraStatus(tarefa.id)}>
        {tarefa.concluida ? (<FaCheck className="action-tarefa"/>) : (<FaRegCircle className="check-icon"/>)}

        <div className="text-tarefa">
          <strong className="title-tarefa">{tarefa.titulo}</strong>
        </div>
      </div>

      <FaEllipsisH className="action-tarefa" onClick={() => onRemoveTarefa(tarefa.id)}/>
    </div>
  )
}
