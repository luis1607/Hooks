import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

const Proyecto = ({proyecto}) => {

    //obtener state de proyectos

    const proyectosContext = useContext(proyectoContext);
    const { proyectoActual } = proyectosContext;

    //Obtener state de tareas 

    const tareasContext = useContext(TareaContext)
    const { obtenerTareas} = tareasContext

   const seleccionarProyecto = (proyectoId) =>{
    proyectoActual(proyectoId)
    obtenerTareas(proyectoId)
   }

    return ( 
        <li>
            <button
            type="button"
            className="btn btn-blank"
            onClick={() => seleccionarProyecto(proyecto.id)}
            >
            {proyecto.nombre}
            </button>
        </li>
     );
}
 
export default Proyecto;