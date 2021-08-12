import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';
import { CSSTransition,TransitionGroup} from 'react-transition-group';

const ListadoTareas = () => {



    //extraer proyectos del state inicial
    const proyectosContext = useContext(proyectoContext)
    const { proyecto, eliminarProyecto } = proyectosContext;

     //Extraer Tareas del 
     const tareasContext = useContext(TareaContext)
     const { tareasproyecto } = tareasContext
     console.log('Aqui llegan las tareas en lista de tareas', tareasproyecto)

    //si no hay proyecto selecionado
    if (!proyecto) return <h2>Seleccione un proyecto</h2>

    //aRray destructuring para extraer el objeto 
    const [proyectoActual] = proyecto

    //Eliminar un proyecto
    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id)
    }
   


    return (
        <Fragment>
            <h2>Proyecto:{proyectoActual.nombre}</h2>
            <ul className="listado-tareas">
                {tareasproyecto.length === 0
                    ?
                    (<li className="tareas">No hay tareas</li>)
                    :
                    <TransitionGroup>
                      {  (tareasproyecto.map(tarea => (
                        <CSSTransition
                        key={tarea.id}
                        timeout={200}
                        className="tarea"
                        >
                            <Tarea
                            tarea={tarea}
                        />
                        </CSSTransition>
                    )))}
                    </TransitionGroup>
                    
                }
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
                onClick={onClickEliminar}
            >
                Eliminar Proyecto &times;
            </button>
        </Fragment>
    );
}

export default ListadoTareas;