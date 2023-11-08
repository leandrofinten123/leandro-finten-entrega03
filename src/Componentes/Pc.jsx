import "./Pc.css"
import imagen1 from './Imagenes/img/Foto2.png'
import Botones from"./Botones"
import ExperienciaAjax from "./ExperienciaAjax"
import CertificadosAjax from "./CertificadosAjax"
import { useState } from "react"
import ProyectosAjax from "./ProyectosAjax"
const Pc = () => { 
    const [btn4, setBtn4] = useState({
        background: '#2f80ed', color: 'white'});
    const [btn5, setBtn5] = useState({
        background: 'white', color: '#2f80ed'})
    
    const handleButtonClick6 = () => {
            setBtn4({ background: '#2f80ed', color: 'white' });
            setBtn5({ background: 'white', color: '#2f80ed' });
            };
    const handleButtonClick7 = () => {
            setBtn4({ background: 'white', color: '#2f80ed' });
            setBtn5({ background: '#2f80ed', color: 'white' });
        };
//

    return <section className="pc">
        <section className="pc__1">
        <section className="pc__2">
        <section>
            <div className="desktop1">
            <h2>Skills</h2>
            <div className="desktop1__separador">
                <div className="desktop1__1">
                    <p>HTML</p>
                    <div className="desktop1__2">
                        <div className="desktop1__3"></div>
                    </div>
                </div>
                <div className="desktop1__1">
                    <p>CSS</p>
                    <div className="desktop1__4">
                        <div className="desktop1__5"></div>
                    </div>
                </div>
                <div className="desktop1__1">
                    <p>JS</p>
                    <div className="desktop1__6">
                    <div className="desktop1__3"></div>
                    </div>
                </div>
                <div className="desktop1__1">
                <p>React</p>
                <div className="desktop1__2">
                <div className="desktop1__5"></div>
                </div>
                </div>
            </div>
            </div>
        </section>
        <section>
            <div className="desktop2">
                <h2>Certificados</h2>
                <CertificadosAjax></CertificadosAjax>
            </div>
        </section>
        </section>
        <section className="pc__3">
            <div className="desktop3">
            <img src={imagen1} alt="" />
            <h3 className="desktop3__1">#HTML #CSS #responsive</h3>
            <h2>Título</h2>
            <p className="desktop3__2"> in this project, I work with HTML and CSS to create a responsive page.
                The design is from devchallenge.io. Donec aliquam est dui, vel 
                vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
                <div className="desktop3__3">
                <Botones texto={"Demo"} btnStyle={"desktop3__4"}
                estilosBtn={{backgroundColor: btn4.background, color: btn4.color}}
                botonClick={() => {handleButtonClick6("desktop3__4");}}></Botones> 
                <Botones texto={"Code"} btnStyle={"desktop3__5"}
                estilosBtn={{backgroundColor: btn5.background, color: btn5.color}}
                botonClick={() => {handleButtonClick7("desktop3__5");}}></Botones>
                </div>
            </div>
            <section>
                <div className="desktop4">
                    <h2>Experiencia</h2>
                    <ExperienciaAjax></ExperienciaAjax>
                </div>
            </section>
        </section>
        </section>
         <ProyectosAjax></ProyectosAjax>
    </section>
}

export default Pc