import React from 'react'
import "../styles/Menuno.css"

function Menudos() {
    return (
        <li><a href="b">Informacion</a>
            <ul className='submenudos'>
                <li><a href="b">Sobre nuestro refugio EMI</a></li>
                <li><a href="b">Cuidado de animal</a></li>
            </ul>
        </li>
    )
}

export {Menudos}