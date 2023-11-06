import "./Mobile.css"
import imagen2 from './Imagenes/img/Foto2.png'
import imagen3 from './Imagenes/img/adidas.png'
import imagen4 from './Imagenes/img/diploma_demo.png'
const Mobile = () => {
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
                <button className="boton1">Responsivo</button>
                <button className="boton2">JavaScript</button>
                <button className="boton2">React</button>
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
                    <button className="boton3">Demo</button>
                    <button className="boton4">Code</button>
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