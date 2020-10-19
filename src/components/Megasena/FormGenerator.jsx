import React from 'react'

export default (props) =>{
    return(
        <div>
            <label htmlFor="valorInput">Número de sorteios:</label>
            <input 
            type="number" 
            id="valorInput"
            value={props.numero}
            onChange={e => props.setNumero(+e.target.value)}
            />

        </div>
    )
}