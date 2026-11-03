import Cabecalho from './components/Cabecalho'
import Card from './components/Card'
import './App.css'
import Listagem from './components/Listagem'
import { useState } from 'react'

function App() {

  const [novaTarefa, setNovaTarefa] = useState("")
  const [listaTarefas, setListaTarefas] = useState([])
  const [filtro, setFiltro] = useState("todos");

  const listaFiltrada = listaTarefas.filter(tarefa => {
    if (filtro === "concluidas") return tarefa.concluida
    if (filtro === "pendentes") return !tarefa.concluida

    return true
  })

  const listaCards = [
    {quantidade: listaFiltrada.length, subtitulo: 'Total'},
    {quantidade: listaFiltrada.filter(tarefa => tarefa.concluida).length, subtitulo: 'Concluídas'},
    {quantidade: listaFiltrada.filter(tarefa => !tarefa.concluida).length, subtitulo: 'Pendentes'},
  ]

  function handleAdicionaTarefa() {
    if (novaTarefa === "") {
      alert("Campo obrigatório!!")
      return
    }

    const tarefa = {
      id: crypto.randomUUID(),
      titulo: novaTarefa,
      concluida: false
    }

    setListaTarefas(tarefasAtuais => [...tarefasAtuais, tarefa])

    setNovaTarefa("")
  }

  function handleAlteraStatusTarefa(id) {
    setListaTarefas(tarefasAtuais =>
      tarefasAtuais.map(tarefa =>
        tarefa.id === id
        ? { ...tarefa, concluida: !tarefa.concluida }
        : tarefa
      )
    )
  }

  function handleRemoveTarefa(id) {
    const novasTarefas = listaTarefas.filter((tarefa) => tarefa.id !== id);

    setListaTarefas(novasTarefas)
  }

  return (
    <div className="container">
      <Cabecalho />

      <div className="cards-container">
        {listaCards.map((card) => (
          <Card
            key={card.subtitulo}
            quantidade={card.quantidade}
            subtitulo={card.subtitulo}
          />
        ))}
      </div>

      <Listagem
        tarefas={listaFiltrada}
        onAlteraStatus={handleAlteraStatusTarefa}
        onAdicionaTarefa={handleAdicionaTarefa}
        onRemoveTarefa={handleRemoveTarefa}
        novaTarefa={novaTarefa}
        setNovaTarefa={setNovaTarefa}
        setFiltro={setFiltro}
      />
    </div>
  )
}

export default App
