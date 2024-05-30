import React from 'react'

export default function Ejercicio4() {
    const arregloNumeros: number[] = [1, 2, 3, 4];
    const arregloResult: string[] = arregloNumeros.map(numero => {
        return numero % 2 === 0 ? 'par' : 'impar';
    });
return (
    <div className="container">
        <h3>Ejercicio 4:</h3>
            <p>Números: [{arregloNumeros.join(', ')}]</p>
            <p>Resultado: [{arregloResult.join(', ')}]</p>
    </div>
)
}
