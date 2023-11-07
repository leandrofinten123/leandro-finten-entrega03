
 

// eslint-disable-next-line react/prop-types
const Botones = ({texto, btnStyle, estilosBtn, botonClick, colorTexto}) => {
    return(
        <button onClick = {botonClick}
        style={{...estilosBtn, ...colorTexto}}
        className={`button ${btnStyle}`}>
            {texto}
        </button>
    )
}
export default Botones;