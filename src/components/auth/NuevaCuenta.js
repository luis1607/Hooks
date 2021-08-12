import React,{useState} from 'react';
import { Link } from 'react-router-dom'

const NuevaCuenta = () => {

    //Satate para iniciar Sesion
    const [usuario,guardarUsuario] = useState({
        nombre:'',
        email : '',
        password: '',
        confirmar:''
    })

    const { nombre,email,password,confirmar} = usuario

    const onChange = (e) => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }
    //ciando el usuario quiere iniciar sesion
    const onSubmit = e=>{
        e.preventDefault()

        // validar que no haya campos vacio

        //password minimo 6 caracteres

        //los dos password sean iguales

        //pasalo al action

    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Obtener Cuen</h1>
                <form
                onSubmit={onSubmit}
                >

<div className="campo-form">
                        <label htmlFor="nombre">
                            Nombre del usuario
                        </label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu Nombre"
                            value={nombre}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmar">
                            Confimar password
                        </label>
                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Repite password"
                            value={confirmar}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input 
                        type="submit" className="btn btn-primario btn-block"
                        value="Registrarme"
                        />
                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">
                    vovler iniciar sesion
                </Link>
            </div>
        </div>
    );
}

export default NuevaCuenta;