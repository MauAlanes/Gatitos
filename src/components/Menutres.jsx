import React from 'react'
import "../styles/Menuno.css"

function Menutres() {
    return (
        <li><a href="c">Contactanos</a>
            <ul className='submenutre'>
                <li><a href="c">Solicita una visita</a></li>
                <li><a href="c">Visitanos</a></li>
            </ul>
        </li>
    )
}

export {Menutres}