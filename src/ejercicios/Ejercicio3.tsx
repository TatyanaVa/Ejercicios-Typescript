import React from 'react'

export const Ejercicio3 = () => {
    const arreglo: number[] = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

    const dividirArreglo: number[] = arreglo.map(numero => numero / 5);
return (
    <div className="container">
        <h3>Ejercicio 3:</h3>
            <p>Arreglo original: [{arreglo.join(', ')}]</p>
            <p>Arreglo dividido por 5: [{dividirArreglo.join(', ')}]</p>
    </div>
) 
}
