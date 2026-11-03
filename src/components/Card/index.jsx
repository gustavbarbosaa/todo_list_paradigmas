import './index.css'

export default function Card({ quantidade, subtitulo }) {
  return (
    <div className="card">
      <h2 className="card-title">{quantidade}</h2>
      <span className="card-subtitle">{subtitulo}</span>
    </div>
  )
}