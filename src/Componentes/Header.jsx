import imagen1 from './Imagenes/img/Foto1.png'
import "./Header.css"

const Header = () => {
    return <header>
        <div className="Contenedorheader">
            <div className="header__2"> <img src={imagen1} alt="" /></div>
            <div className="header__3">
                <div className="contenedorcaja2">
                    <div>
                        <h1>Nombre</h1>
                        <p className="parrafo1">Front-end developer</p>
                    </div>
                    <div className="iconos">
                    <div className='icono1'>
                       <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                        </svg> <b>ejemplo@gmail.com</b></p> </div>
                        <div className='icono2'>
                            <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg> <b>+5491112345678</b></p></div>
                    </div>
                </div>
                <div>
                <div className='parrafo2'>
                    <p>Self-motivated developer, who is willing to learn and create
                        outstanding UI applications.</p></div>
                <div className='parrafomedia'> <p>Donex aliquam est dui, vel vestibulum diam sollicitudin id. Quisque
                    feugiat malesuada molestie.</p></div>
                    </div>
            </div>
        </div>
    </header>
};

export default Header;