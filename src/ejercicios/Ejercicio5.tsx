import React from 'react'

export const Ejercicio5 = () => {
    const ejemplo: (number | string)[] = [7, 5, "sistemas", "hola", "adios", 2];

    const numeros: number[] = [];
    const texto: string[] = [];

    ejemplo.forEach(tipoDato => {
    if (typeof tipoDato === 'number') {
        numeros.push(tipoDato);
    } else {
        texto.push(tipoDato);
    }
});

    const textoMayor: string = texto.reduce((mayor, texto) => texto.length > mayor.length ? texto : mayor, '');

    const suma: number = numeros.reduce((total, num) => total + num, 0);
    const resta: number = numeros.reduce((resultado, num) => resultado - num);
    const multiplicacion: number = numeros.reduce((resultado, num) => resultado * num, 1);
    const division: number = numeros.reduce((resultado, num) => resultado / num);

  return (
    <div className="container">
        <h3>Ejercicio 5:</h3>
            <p>El texto más largo es: {textoMayor}</p>
            <p>La suma es: {suma}</p>
            <p>La Resta es: {resta}</p>
            <p>La Multiplicación es: {multiplicacion}</p>
            <p>La División es: {division}</p>
            
    </div>
  )
}
