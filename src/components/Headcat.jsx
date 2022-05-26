import React from 'react'
import "../styles/Headcat.css"
import { Menuno } from './Menuno'
import { Menudos } from './Menudos' 
import { Menutres } from './Menutres'

function Headcat() {
    return (
        <div className='contenedor'>
            <ul>
                <Menuno/>
                <Menudos/>
                <Menutres/>
            </ul>
        </div>
    )
}

export {Headcat}