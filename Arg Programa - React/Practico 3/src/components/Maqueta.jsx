import React, {useState} from 'react';
import foto from '../assets/producto.jpg'
import "./Maqueta.css"

function Maqueta(props) {

    const [buyed, setBuyed] = useState(false)
    const [msg, setMsg] = useState("")

    const handleClick = () => {
        setBuyed(!buyed);
        setMsg("Gracias por su compra! :D")
    }

    return (  
        <div className="container">
            <div className="wrapper">
                <h2 className='titulo'> {props.nombre}</h2>
                <div className="img-wrapper">
                    <img src={foto} alt="producto"  className='img-producto'/>
                </div>    
                <div className='info-wrapper'>
                    <b>disponibles: {props.stock}</b>
                    <b className="precio">{props.precio}$</b>
                </div>
                <p>{props.descripcion}</p>
                <p className='sdk'><b>SKD: &nbsp;</b><u>{props.sdk}</u></p>
                <div className="btn-wrapper">
                    <button type="button" className='buy-btn' onClick={() => handleClick()} disabled={buyed}> Comprar </button>
                    <h3 className="buy-msg" id="buy-msg">{msg}</h3>
                </div>
            </div>
        </div>
    );
}

export default Maqueta ;