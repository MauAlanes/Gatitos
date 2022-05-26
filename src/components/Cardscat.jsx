import React from 'react'
import "../styles/Cardscat.css"

function Cardscat({img, raza, color, edad, tamano, sexo}) {
    return (
        <div className='cards-cat'>
            <div className='imagenes-cat'>
                <img src={img} alt="Imagen mascota" />
            </div>
            <div className='informacion-cat'>
                <span>Raza:     {raza} </span>
                <span>Color:    {color} </span>
                <span>Edad:     {edad} </span>
                <span>Tamaño:   {tamano} </span>
                <span>Sexo:     {sexo} </span>
            </div>
        </div>
    )
}

export {Cardscat}