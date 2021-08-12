import React,{useContext} from 'react';
import TareaContext from '../../context/tareas/tareaContext';
import proyectoContext from '../../context/proyectos/proyectoContext';


const Tarea = ({ tarea }) => {

    

    const proyectosContext = useContext(proyectoContext)
    const {proyecto} = proyectosContext

    const tareasContext = useContext(TareaContext);
    const { eliminarTarea,obtenerTareas,cambiarEstadoTarea } = tareasContext
    
    const [proyectoActual] = proyecto

    const tareaEliminar = id =>{
        eliminarTarea(id);
        obtenerTareas(proyectoActual.id)

    }
    //funcion que modifica el estado de las tareas
    const cambiarEstado = tarea =>{
        if(tarea.estado){
            tarea.estado= false
        }else{
            tarea.estado = true
        }

        cambiarEstadoTarea(tarea)
    }

    return (
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>
            <div className="estado">
                {tarea.estado ?
                    (<button type="button"
                        className="completo"
                        onClick={()=>cambiarEstado(tarea)}
                    >
                        Completo
                    </button>)
                    :
                    (
                        <button type="button"
                            className="incompleto"
                            onClick={()=>cambiarEstado(tarea)}
                        >
                            Imcompleto
                        </button>
                    )}
            </div>

            <div className="acciones">
                        <button
                        type="button"
                        className="btn btn-primario"
                        >
                            Editar
                        </button>
                        <button
                        type="button"
                        className="btn btn-secundario"
                        onClick={()=>tareaEliminar(tarea.id)}
                        >
                            Eliminar
                        </button>
            </div>
        </li>
    );
}

export default Tarea;