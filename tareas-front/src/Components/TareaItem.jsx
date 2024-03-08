import { useDispatch } from 'react-redux'
import { deleteTarea } from '../Features/Tareas/tareaSlice'

const TareaItem = ({ tarea }) => {
  const dispatch = useDispatch()

  return (
    <div className='tarea'>
      <div>
        <p>{new Date(tarea.createdAt).toLocaleString('es-MX')}</p>
      </div>
      <h3>{tarea.descripcion}</h3>
      <button onClick={() => dispatch(deleteTarea(tarea._id))} className='close'>X</button>
    </div>
  )
}

export default TareaItem
