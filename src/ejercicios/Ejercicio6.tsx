import React, { useState } from 'react'
import { Alumno } from '../interface/Alumno';

export const Ejercicio6 = () => {
    const [alumnos, setAlumnos] = useState<Alumno[]>([
        {
            name: "Viviana",
            edad: 19,
            calificacion: 10,
        },
        {
            name: "Wendy",
            edad: 20,
            calificacion: 8,
        },
        {
            name: "Gerson",
            edad: 18,
            calificacion: 9,
        }
    ]);

        const promedio = (): number => {
        const totalPromedio = alumnos.reduce((acumulador, alumno) => acumulador + alumno.calificacion, 0);
        return totalPromedio / alumnos.length;
    };

    return (
    <div className="container">
        <h3>Ejercicio 6:</h3>
        <p>El promedio de calificaciones es: {promedio()}</p>

    </div>
    )
}
