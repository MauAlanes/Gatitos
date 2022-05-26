import React from 'react'
import "../styles/Bodycat.css"
import { Cardscat } from './Cardscat'
import imcat1 from "../images/arnold.jpg"
import imcat2 from "../images/babe.jpg"
import imcat3 from "../images/baileys.jpg"
import imcat4 from "../images/bambu.jpg"
import imcat5 from "../images/cersei.jpg"
import imcat6 from "../images/Lamar.jpg"
import imcat7 from "../images/marte.jpg"
import imcat8 from "../images/mayo.jpg"
import imcat9 from "../images/pekas.jpg"
import imcat10 from "../images/shock.jpg"

const cards = [
    {
        id:"1",
        img: imcat1,
        raza: "Bombay",
        color: "Negro",
        edad: "1 año",
        tamano: "Pequeño",
        sexo: "Macho"
    },
    {
        id:"2",
        img: imcat2,
        raza: "American wirehair",
        color: "Blanco con manchas negras y cafes",
        edad: "2 años",
        tamano: "Mediano",
        sexo: "Hembra"
    },
    {
        id:"3",
        img: imcat3,
        raza: "Burmes",
        color: "Cafe claro",
        edad: "1 año",
        tamano: "Pequeño",
        sexo: "Macho"
    },
    {
        id:"4",
        img: imcat4,
        raza: "Cymric",
        color: "Negro con blanco",
        edad: "1 año",
        tamano: "Grande",
        sexo: "Macho"
    },
    {
        id:"5",
        img: imcat5,
        raza: "American wirehair",
        color: "Cafe con manchas blancas y negras",
        edad: "3 meses",
        tamano: "Pequeño",
        sexo: "Hembra"
    },
    {
        id:"6",
        img: imcat6,
        raza: "Ocicat",
        color: "Plomo con manchas negras",
        edad: "1 año",
        tamano: "Mediano",
        sexo: "Macho"
    },
    {
        id:"7",
        img: imcat7,
        raza: "Cornish rex",
        color: "Cade con manchas negras",
        edad: "4 años",
        tamano: "Mediano",
        sexo: "Macho"
    },
    {
        id:"8",
        img: imcat8,
        raza: "American wirehair",
        color: "Cafe oscuro con blanco",
        edad: "3 meses",
        tamano: "Pequeño",
        sexo: "Hembra"
    },
    {
        id:"9",
        img: imcat9,
        raza: "Selkirk rex",
        color: "Blanco con manchas negras",
        edad: "1/2 año",
        tamano: "Mediano",
        sexo: "Macho"
    }, 
    {
        id:"10",
        img: imcat10,
        raza: "Korat",
        color: "Plomo con cafe",
        edad: "2 años",
        tamano: "Grande",
        sexo: "Macho"
    }
]

function Bodycat() {
    return (
        <div className='cont-cat'> 
            {
                cards.map(card => (
                    <Cardscat img={card.img} raza={card.raza} color={card.color} edad={card.edad} tamano={card.tamano} sexo={card.sexo} />
                ))
            }
        </div>
    )
}

export {Bodycat}