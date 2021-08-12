import React, { useContext,useState } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {

    const [tarea,guardarTarea] = useState({
        nombre: ''
    })

    const {nombre} = tarea

    const proyectosContext = useContext(proyectoContext);
    const {proyecto} = proyectosContext

    const tareasContext = useContext(TareaContext);
    const {agregarTarea,errortarea,validarTarea,obtenerTareas} = tareasContext;

    if(!proyecto) return null

    const [ proyectoActual] = proyecto

    const onSubmit = e =>{
        e.preventDefault()

        if(nombre.trim() === ''){
            validarTarea();
            return;
        }

        //guardarmos la tarea
        tarea.proyectoId = proyectoActual.id
        tarea.estado = false
        agregarTarea(tarea)

        obtenerTareas(proyectoActual.id)

        guardarTarea({
            nombre: ''
        })

        

    }

    const handleChange = e =>{
        guardarTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }

    return ( 
        <div className="formulario">
            <form 
            onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input
                    type="text"
                    className="input-text"
                    placeholder="Nombre Tarea..."
                    name="nombre"
                    value={nombre}
                    onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input
                    type="submit"
                    className="btn btn-primario btn-submit btn-block"
                    value="Agregar Tarea"
                    />
                </div>
            </form>
            {errortarea ? <p className="mensaje error">El nombre dela tarea es obligatorio</p>: null}
        </div>
     );
}
 
export default FormTarea;