
 

// eslint-disable-next-line react/prop-types
const Botones = ({texto, btnStyle, estilosBtn, botonClick, colorTexto, colorTexto2}) => {
    return(
        <button onClick = {botonClick}
        style={{...estilosBtn, ...colorTexto, ...colorTexto2}}
        className={`button ${btnStyle}`}>
            {texto}
        </button>
    )
}
export default Botones;