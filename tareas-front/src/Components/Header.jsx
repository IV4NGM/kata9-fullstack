import { FaSignInAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>App de Tareas</Link>
      </div>
      <ul>
        <li>
          <Link to='/login'>
            <FaSignInAlt /> Iniciar Sesión
          </Link>
        </li>
        <li>
          <Link to='/register'>
            <FaUser /> Registrarse
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
