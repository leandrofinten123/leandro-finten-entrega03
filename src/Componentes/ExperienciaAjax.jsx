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
        {exp.map((exp) => (
           <div key={exp.id} className="desktop4__2">
                <div key={exp.id2} className="desktop4__3"> <img key={exp.id3} className="imagenadidas" src={imagen1} alt="" />
                <div key={exp.id4} className="desktop4__4"> <p key={exp.id5}> {exp.titulo} </p>
                <h3 key={exp.id6}> {exp.Subtitulo} </h3></div>
                </div>
                <div key={exp.id7} className="desktop4__5">
                    <p key={exp.id8}> {exp.Lorem} </p>
                </div>
            </div>
        ))}
    </div>);
}

export default ExperienciaAjax;