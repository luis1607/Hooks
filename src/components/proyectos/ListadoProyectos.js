import React, { useContext, useEffect } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import Proyecto from './Proyecto';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const ListadoProyectos = () => {

    //Extraer proyectos de stateInicial
    const proyectosContext = useContext(proyectoContext);
    const { proyectos, obtenerProyectos } = proyectosContext;

    //Obtener proyectos cuando cargael componente
    useEffect(() => {
        obtenerProyectos()
    }, [])

    //revisar si proyectos tiene contenido
    if (proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>

    return (
        <ul className="listado-proyectos">
            <TransitionGroup>
                {proyectos.map(
                    proyecto => (
                        <CSSTransition 
                            key={proyecto.id}
                            timeout={200}
                            className="proyecto"
                            >
                            <Proyecto
                                proyecto={proyecto}
                            />
                        </CSSTransition>
                    )
                )
                }
            </TransitionGroup>
        </ul>
    );
}

export default ListadoProyectos;