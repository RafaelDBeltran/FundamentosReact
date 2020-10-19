import React from 'react';

export default (props) =>{

    return( 
        <div>
            <p> {Math.floor(Math.random() * (props.max - props.min)) + props.min} </p>
        </div>
    )
}