import { useEffect, useState } from "react";
import imagen1 from './Imagenes/img/adidas.png'

const ExperienciaAjax = () => {
    const [exp, setExp] = useState([]);
    useEffect(()=>{
        fetch("https://my-json-server.typicode.com/leandrofinten123/Leandro-Finten-entrega01/Experiencias")
        .then(response =>{
            if(!response.ok) throw "hubo un error";
            return response.json();
        })
        .then((exp) => setExp(exp))
        .catch((err) =>("error", err));
    }, []);
    return(
    <div className="desktop4__1">
        {exp.map((exp, i) => (
           <div key={`experiencia-${i}`} className="desktop4__2">
                <div  className="desktop4__3"> <img  className="imagenadidas" src={imagen1} alt="" />
                <div  className="desktop4__4"> <p> {exp.titulo} </p>
                <h3 > {exp.Subtitulo} </h3></div>
                </div>
                <div  className="desktop4__5">
                    <p > {exp.Lorem} </p>
                </div>
            </div>
        ))}
    </div>);
}

export default ExperienciaAjax;