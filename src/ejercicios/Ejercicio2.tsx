import React from 'react'


export const Ejercicio2 = () => {
    const sumArreglo = (arreglo: number[]): number => {
        const suma = arreglo.reduce((total, numero) => total + numero, 0);
        return suma;
    };
        const arregloEj = [2,4,6,8];
    return (
        <div className="container"> 
            <h3>Ejercicio 2: </h3>
                <p>El arreglo es: [{arregloEj.join(', ')}]</p>
                <p>La suma de los elementos del arreglo es: {sumArreglo(arregloEj)}</p>
        </div>
            )
}

