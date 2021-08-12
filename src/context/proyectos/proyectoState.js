import React, { useReducer } from 'react';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { v4 as uuidv4 } from 'uuid'
import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
} from '../../types';





const ProyectoState = props => {

    const proyectos = [
        { id: 1, nombre: 'Tienda vortual' },
        { id: 2, nombre: 'Intranet' },
        { id: 3, nombre: 'Diseño sitios web' },
        { id: 4, nombre: 'Diseño sitios web 2' }
    ]


    const initialState = {
        formulario: false,
        proyectos: [],
        errorformulario: false,
        proyecto: null
    }

    //Dispacth para ejecutar las accion
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    //serie de funciones para el crud
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO,

        })
    }

    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    const agregarProyecto = proyecto => {
        proyecto.id = uuidv4();
        //Isertar el proyecto

        dispatch(
            {
                type: AGREGAR_PROYECTO,
                payload: proyecto
            }

        )

    }
    //valida el formulario por errores
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO,
        })
    }

    //Selecciona el prooyecto que el usuario dio click
    const proyectoActual = proyectoId =>{
        dispatch({
            type:PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }
    //Eliminar un proyecto
    const eliminarProyecto = proyectoId=>{
        dispatch({
            type:ELIMINAR_PROYECTO,
            payload :proyectoId
        })
    }

    return (
        <proyectoContext.Provider
            value={{
                formulario: state.formulario,
                proyectos: state.proyectos,
                errorformulario: state.errorformulario,
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto
            }}>
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;