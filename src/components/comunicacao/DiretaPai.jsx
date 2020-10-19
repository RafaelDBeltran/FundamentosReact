import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return(
        <div>
            <DiretaFilho nome="Hulk" idade={20} nerd="true"></DiretaFilho>
            <DiretaFilho nome="Ant-Man" idade={36} nerd="false"></DiretaFilho>

        </div>
    )
}