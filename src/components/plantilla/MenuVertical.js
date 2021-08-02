import React from 'react'
import CrearProyecto from '../proyectos/CrearProyecto'
import MostrarProyecto from '../proyectos/MostrarProyectos'
const MenuVertical = () => {
    return (
        <aside className = "text-center p-4">
            <h1 id="h1" className = " fst-blood-italic text-light bg-dark fw-bold"> Gestor<a className="text-success"> Proyectos</a></h1>
           <CrearProyecto/>
           <MostrarProyecto/>
        </aside>
    )
}

export default MenuVertical

