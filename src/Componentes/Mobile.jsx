import "./Mobile.css"
import imagen2 from './Imagenes/img/Foto2.png'
import imagen3 from './Imagenes/img/adidas.png'
import imagen4 from './Imagenes/img/diploma_demo.png'
import Botones from "./Botones"
import { useState } from "react"

const Mobile = () => {
    const [btn1, setBtn1] = useState({
        background: '#2f80ed', color: 'white'});
    const [btn2, setBtn2] = useState({
        background: 'white', color: 'black'});
    const [btn3, setBtn3] = useState({
        background: 'white', color: 'black'});
        const handleButtonClick3 = () => {
            setBtn1({ background: '#2f80ed', color: 'white'});
            setBtn2({ background: 'white', color: 'black' });
            setBtn3({ background: 'white', color: 'black' });
            };
        const handleButtonClick4 = () => {
            setBtn1({ background: 'white', color: 'black' });
            setBtn2({ background: '#2f80ed', color: 'white' });
            setBtn3({ background: 'white', color: 'black' });
            };
        const handleButtonClick5 = () => {
            setBtn1({ background: 'white', color: 'black' });
            setBtn2({ background: 'white', color: 'black' });
            setBtn3({ background: '#2f80ed', color: 'white' });
            };
    const [btn4, setBtn4] = useState({
        background: '#2f80ed', color: 'white'});
    const [btn5, setBtn5] =useState({
        background: 'white', color: '#2f80ed'});

    const handleButtonClick6 = () => {
        setBtn4({background: '#2f80ed', color: 'white'});
        setBtn5({background: 'white', color: '#2f80ed'});}

     const handleButtonClick7 = () => {
            setBtn4({background: 'white', color: '#2f80ed'});
            setBtn5({background: '#2f80ed', color: 'white'}); } 
    
    return <section className="mobile">
            <section>
                <div className="box3">
                <h2>Skills</h2>
                <div className="skills">
                    <div className="htmlcss">
                        <p>HTML</p>
                        <div className="background">
                            <div className="colorazul"></div>
                        </div>
                    </div>
                    <div className="htmlcss">
                        <p>CSS</p>
                        <div className="background2">
                            <div className="colorazul2"></div>
                        </div>
                    </div>
                    <div className="htmlcss">
                        <p>JS</p>
                        <div className="background3">
                        <div className="colorazul"></div>
                        </div>
                    </div>
                    <div className="htmlcss">
                        <p>React</p>
                        <div className="background">
                            <div className="colorazul2"></div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            <section>
                <div className="box4">
                <h2>Proyectos(3)</h2>
                <div className="botones">
                <Botones botonClick={() => {handleButtonClick3("boton1");}}
                texto={"Responsivo"} btnStyle={"boton1"}
                estilosBtn={{backgroundColor: btn1.background, color: btn1.color}}
                ></Botones>
                <Botones botonClick={() => {handleButtonClick4("boton2");}}
                texto={"JavaScript"} btnStyle={"boton2"}
                estilosBtn={{backgroundColor: btn2.background, color: btn2.color}}
                ></Botones>
                <Botones botonClick={() => {handleButtonClick5("boton2");}}
                texto={"React"} btnStyle={"boton2"}
                estilosBtn={{backgroundColor: btn3.background, color: btn3.color}}
                ></Botones>
                </div>
                </div>
            </section>
            <section>
                <div className="box5">
                <img className="box5__img" src={imagen2} alt="" />
                <h3 className="parrafo3">#HTML #CSS #responsive</h3>
                <h2>Título</h2>
                <p className="parrafo4">in this project, I work with HTML and CSS to create a responsive page.
                    The design is from devchallenge.io. Donec aliquam est dui, vel 
                    vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
                    <div className="botones2">
                    <Botones botonClick={() =>handleButtonClick6("boton3")}
                    texto={"Demo"} btnStyle={"boton3"}
                    estilosBtn={{backgroundColor: btn4.background, color: btn4.color}}></Botones>
                    <Botones botonClick={() =>handleButtonClick7("boton4")}
                    texto={"Demo"} btnStyle={"boton4"}
                    estilosBtn={{backgroundColor: btn5.background, color: btn5.color}}></Botones>
                    </div>
                </div>
            </section>
            <section>
                <div className="box6">
                    <h2>Experiencia</h2>
                    <div className="cajasection3">
                        <div className="contenidosection3"> 
                        <img className="imagenadidas" src={imagen3} alt="" />
                        <div className="parrafo5">
                            <p>Feb 2022 - Actualidad</p>
                            <h3>Front-end Developer</h3></div>
                            </div>
                            <div className="parrafo6">
                            <p> Lorem, ipsum dolor sit amet consectetur. Eget nulla eu cursus cursus
                                pretium eu. Eget vestibulum quam aliquet</p>
                            </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="box7">
                <h2 className="certificados">Certificados</h2>
                <div className="cajasection4">
                     <img className="box7__img" src={imagen4} alt="" />
                    <div className="parrafo7">
                        <h3>Front-end Developer</h3>
                        <p className="parrafo8">Feb 2020 - Feb 2021</p>
                    </div>
                </div>
                </div>
            </section>
    </section>
}

export default Mobile