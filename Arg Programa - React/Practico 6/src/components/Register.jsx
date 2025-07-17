import React from 'react';
import "./Register.css";

function Register () {
    return ( 
        <div className="container">
            <form className="wrapper">
                <label htmlFor="nombre">Nombre: &nbsp;</label>
                <input type="text" name="nombre" id="nombre"/>
                <label htmlFor="apellido">Apellido: &nbsp;</label>
                <input type="text" name="apellido" id="apellido"/>
                <label htmlFor="mail">Email: &nbsp;</label>
                <input type="email" name="mail" id="mail"/>
                <label htmlFor="telefono">Teléfono: &nbsp;</label>
                <input type="text" name="telefono" id="telefono"/>
                <label htmlFor="contraseña">Contraseña: &nbsp;</label>
                <input type="password" name="contraseña" id="contraseña" />
                <label htmlFor="confirmacion">Confirmar contraseña: &nbsp;</label>
                <input type="password" name="confirmacion" id="confirmacion" />
            </form>
        </div>
    );
}

export default Register;