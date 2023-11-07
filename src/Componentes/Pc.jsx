import "./Pc.css"
import imagen1 from './Imagenes/img/Foto2.png'
import Botones from"./Botones"
import ExperienciaAjax from "./ExperienciaAjax"
import CertificadosAjax from "./CertificadosAjax"
import { useEffect, useState } from "react"

const Pc = () => { 
    const [pro, setPro] = useState([]);
    const [carga, setCarga] = useState("/proyectos2");
    const [colorBtn, setColor] = useState('#2f80ed');
    const [btn1, setBtn1] = useState({
        background: 'white', color: 'black'});
    const [btn2, setBtn2] = useState({
        background: '#2f80ed', color: 'white'});
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
//

    const [otrosBotones, setOtrosbotones] = useState({
        desktop6__5: {background: 'white', color: 'white'},
        desktop6__6: {background: 'white', color: 'white'}
    });
    const handleButtonClick2 = (buttonId2) => {
        const updateColors2 = {
            desktop6__5: {background: 'white', color: 'white'},
            desktop6__6: {background: 'white', color: 'white'}
        };
        updateColors2[buttonId2]= { background: colorBtn, color: 'white'};
        setOtrosbotones(updateColors2);
    };
    useEffect(()=> {
        handleButtonClick2('desktop6__5')
    }, []);
    //
    const [colorBotones, setColorBotones] = useState({
        desktop5__2: {background: 'white', color: 'black' },
        desktop5__3: {background: 'white', color: 'black'},
        desktop5__4: {background: 'white', color: 'black'}
    });
    const handleButtonClick = (buttonId) => {
        const updateColors = {
            desktop5__2: {background: colorBtn, color: 'white' },
            desktop5__3: {background: 'white', color: 'black' },
            desktop5__4: {background: 'white', color: 'black' },
        };
        updateColors.desktop5__2= {background: 'white', color: 'black'}
        updateColors[buttonId] = { background: colorBtn, color: 'white'};
        setColorBotones(updateColors);
    }
    useEffect(()=>{
        handleButtonClick('desktop5__2')
    }, []);
    //
    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}${carga}`)
        .then(response => {
            if (!response.ok) throw "hubo un error";
            return response.json();
        })
        .then((pro) => setPro(pro))
        .catch((err) => ("error", err));
    }, [carga]);
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
                <Botones texto ="Demo"
                btnStyle= "desktop3__4"></Botones>
                <Botones texto="Code"
                btnStyle= "desktop3__5"></Botones>
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
        <section className="evento">
        <section className="pc__4">
            <section className="desktop5">
                <h2>Proyectos(3)</h2>
                <div className="desktop5__1">
                    <Botones texto="Responsivo"
                     botonClick={() =>{
                        setColor('#2f80ed')
                         setCarga("/Proyectos2");
                         handleButtonClick('desktop5__2'); } }
                    estilosBtn={{backgroundColor: colorBotones.desktop5__2.background}}
                    colorTexto={{ color: colorBotones.desktop5__2.color }}
                     btnStyle= 'desktop5__3'></Botones>
                    <Botones texto="JavaScript" 
                     botonClick={() => 
                        {setCarga("/Proyectos3");
                        handleButtonClick('desktop5__3'); }}
                        estilosBtn={{backgroundColor: colorBotones.desktop5__3.background}}
                        colorTexto={{ color: colorBotones.desktop5__3.color }}
                        btnStyle= 'desktop5__3'></Botones>
                    <Botones texto= "React"
                    botonClick={() => {
                        setCarga("/Proyectos5");
                        handleButtonClick('desktop5__4'); }}
                        estilosBtn={{backgroundColor: colorBotones.desktop5__4.background}}
                        colorTexto={{ color: colorBotones.desktop5__4.color }}
                        btnStyle={'desktop5__4'}
                    ></Botones>
                </div>
            </section>
        </section>
        <section>
            <section className="desktop6">
            {pro.map((pro) => (
            <section key={pro.id} className="desktop6__separador">
                <div className="desktop6__1">
                    <img src={imagen1} alt="" />
                    <h3 className="desktop6__2"> {pro.subtitulo} </h3>
                    <h2> {pro.nombre} </h2>
                    <p className="desktop6__3"> {pro.Lorem} </p>
                    <div className="desktop6__4">
                        <Botones texto="Demo" btnStyle = "desktop6__5" 
                        botonClick={()=> {
                            handleButtonClick2('desktop6__5')}}
                            estilosBtn={{backgroundColor: otrosBotones.desktop6__5.background}}
                            colorTexto2={{color: otrosBotones.desktop6__5}}></Botones>
                        <Botones texto="Code" btnStyle = "desktop6__6"
                        botonClick={()=> {
                            handleButtonClick2('desktop6__6')}}
                            estilosBtn={{backgroundColor: otrosBotones.desktop6__6.background}}
                            colorTexto2={{color: otrosBotones.desktop6__6}}></Botones>
                    </div>
                </div>
            </section>
        ))}
            </section>
            <section className="desktop7"> <Botones texto="🡠" btnStyle={"desktop7__1"}></Botones>
                <Botones texto={"1"} btnStyle={"desktop7__2"}
                estilosBtn={{backgroundColor: btn1.background, color: btn1.color}}
                botonClick={() => {handleButtonClick3("desktop7__2"); setCarga("/Proyectos2");}}></Botones>
                <Botones texto={"2"} btnStyle={"desktop7__3"}
                estilosBtn={{backgroundColor: btn2.background, color: btn2.color}}
                botonClick={() => {handleButtonClick4("desktop7__3"); setCarga("/Proyectos3") ;}}></Botones>
                <Botones texto={"3"} btnStyle={"desktop7__4"}
                estilosBtn={{backgroundColor: btn3.background, color: btn3.color}}
                botonClick={() => {handleButtonClick5("desktop7__4"); setCarga("/Proyectos5")}}></Botones>
                <section>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <circle cx="4" cy="4" r="4" fill="#4F4F4F"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <circle cx="4" cy="4" r="4" fill="#4F4F4F"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <circle cx="4" cy="4" r="4" fill="#4F4F4F"/>
                    </svg>
                </section>
                <Botones texto={"10"} btnStyle={"desktop7__5"}></Botones>
                <Botones texto={"🡢"} btnStyle={"desktop7__5"}></Botones></section>
        </section>
        <div></div>
        </section>
    </section>
}

export default Pc