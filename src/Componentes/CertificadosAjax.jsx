import { useEffect, useState } from "react";
import imagen1 from "./Imagenes/img/diploma_demo.png"
const CertificadosAjax = () => {
    const [cert, setCert] = useState([]);
    useEffect(() => {
        fetch("https://my-json-server.typicode.com/leandrofinten123/Leandro-Finten-entrega01/Certificados")
        .then(response => {
            if(!response.ok) throw "hubo un error";
            return response.json();
        })
        .then((cert) => setCert(cert))
        .catch((err) => ("error", err));
    }, []);
    return(
    <div className="desktop2__1">
        {cert.map((cert) => (
            <div key={cert.id} className="desktop2__2">
                <img src={imagen1} alt="" />
                <div  className="desktop2__3">
                    <h3 > {cert.Subtitulo} </h3>
                    <p  className="desktop2__4"> {cert.titulo} </p>
                </div>
            </div>
        ))}
    </div>)
}

export default CertificadosAjax;