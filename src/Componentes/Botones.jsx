
 

// eslint-disable-next-line react/prop-types
const Botones = ({texto, btnStyle, estilosBtn, botonClick}) => {
    return(
        <button onClick = {botonClick}
        style={estilosBtn}
        className={`button ${btnStyle}`}>
            {texto}
        </button>
    )
}
export default Botones;