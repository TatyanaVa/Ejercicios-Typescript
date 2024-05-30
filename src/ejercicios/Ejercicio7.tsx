import React, { useState } from 'react'

export const Ejercicio7 = () => {
    const [acumulador, setAcumulador] = useState<number>(0);

    const incrementarAcumulador = () => {
        setAcumulador(incrementar => incrementar + 5);
    };

    const disminuirAcumulador = () => {
        setAcumulador(disminuir => disminuir - 5);
    };
    return (
        <div className="container">
            <h3>Ejercicio 7:</h3>
                <button className="btn btn-success"> {acumulador}</button>
                <br />
                <button className="btn btn-primary" onClick={incrementarAcumulador}>+5</button>
                <button className="btn btn-secondary" onClick={disminuirAcumulador}>-5</button>
        </div>
    )
}
