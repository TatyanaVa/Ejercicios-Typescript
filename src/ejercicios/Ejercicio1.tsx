import React from 'react'

export const Ejercicio1 = () => {
    const funcArea = function (lado1:number, lado2:number): number {
        return lado1 * lado2;
      }
      
  return (
    <div className="container">
    <h3>Ejercicio 1: </h3>
    <span>El área es: {funcArea(5,5)} </span>
    </div>
  )
}
