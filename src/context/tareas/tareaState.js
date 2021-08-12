import React,{useReducer} from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import {
    AGREGAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREAS_PROYECTO,
    TAREA_SELECCIONADA,
    VALIDAR_TAREA

} from '../../types';

const TareaState = props =>{

    const initialState = {
        tareas:  [
            { id:1, nombre: 'Elegir plataforma', estado: true, proyectoId: 1 },
            { id:2,nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
            { id:3,nombre: 'Elegir plataforma de pagos', estado: false,proyectoId: 3 },
            { id:4,nombre: 'Elegir Hosting', estado: true,proyectoId: 4 },
            { id:5,nombre: 'Elegir plataforma', estado: true, proyectoId: 1 },
            { id:6,nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
            { id:7,nombre: 'Elegir plataforma de pagos', estado: false,proyectoId: 3 },
            { id:8,nombre: 'Elegir Hosting', estado: true,proyectoId: 4 },
            { id:9,nombre: 'Elegir plataforma', estado: true, proyectoId: 4 },
            { id:10,nombre: 'Elegir Colores', estado: false, proyectoId: 4 },
            { id:11,nombre: 'Elegir plataforma de pagos', estado: false,proyectoId: 4 },
            { id:12,nombre: 'Elegir Hosting', estado: true,proyectoId: 4 },
        ],
        tareasproyecto:[],
        errortarea: false,
        tareaselecionada: null

    }

    //Crear dispatch y state
    const [state,dispatch] = useReducer(TareaReducer,initialState);

    //Crear funciones

    //Obtener las tareas de un proyecto
    const obtenerTareas = idProyecto => {
        dispatch({
            type : TAREAS_PROYECTO,
            payload: idProyecto
        })
    }

    const agregarTarea = tarea => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    const validarTarea = ()=>{
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    const eliminarTarea = tareaId=>{
        dispatch({
            type:ELIMINAR_TAREA,
            payload: tareaId
        })
    }

    //CAMBIA EL ESTAOD DE CADA TAREA
    const cambiarEstadoTarea = tarea =>{
        dispatch({  
            type:ESTADO_TAREA,
            payload: tarea
        })
    }

    const seleccionarTarea = TAREA =>{
        dispatch({
            type: TAREA_SELECCIONADA,
            
        })
    }

    return(
        <TareaContext.Provider
            value = {{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )

}

export default TareaState