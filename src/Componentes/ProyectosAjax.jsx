import { useState, useEffect } from "react";
import Botones from "./Botones";
import imagen1 from './Imagenes/img/Foto2.png'
const ProyectosAjax = () => {
    
    const [pro, setPro] = useState([]);
    useEffect(() => {
        fetch("https://my-json-server.typicode.com/leandrofinten123/Leandro-Finten-entrega01/Proyectos2")
        .then(response => {
            if (!response.ok) throw "hubo un error";
            return response.json();
        })
        .then((pro) => setPro(pro))
        .catch((err) => ("error", err));
    }, []);
    return(
        pro.map((pro) => (
            <section key={pro.id} className="desktop6__separador">
                <div className="desktop6__1">
                    <img src={imagen1} alt="" />
                    <h3 className="desktop6__2"> {pro.subtitulo} </h3>
                    <h2> {pro.nombre} </h2>
                    <p className="desktop6__3"> {pro.Lorem} </p>
                    <div className="desktop6__4">
                        <Botones texto="Demo" btnStyle = "desktop6__5"></Botones>
                        <Botones texto="Code" btnStyle = "desktop6__6"></Botones>
                    </div>
                </div>
            </section>
        ))
    )
}

export default ProyectosAjax;