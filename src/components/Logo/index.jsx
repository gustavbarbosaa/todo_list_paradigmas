import { FaCheck } from "react-icons/fa";
import './index.css'

export default function Logo() {
  return (
    <div className="logo">
      <div className="logo-icon">
        <FaCheck />
      </div>
      <h2 className="logo-title">taskFlox.</h2>
    </div>
  )
}