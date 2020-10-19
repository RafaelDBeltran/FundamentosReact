import './Generator.css'
import React from 'react'

import FormGenerator from './FormGenerator'

export default class Contador extends React.Component{

    state ={
        numero: this.props.numeroInicial || 6
    }

    setNumero = (novoNumero) => {
        this.setState({
            numero: novoNumero
        })
    }

    generate(vals){
        var listOfvals = []
        
        for (var i = 0; i < vals; i++){
            var randomNumber = Math.floor(Math.random() * (60 - 1) ) + 1
            if (listOfvals.includes(randomNumber)){
                this.generate(vals - 1)
            }else{
                listOfvals.push(randomNumber)
                console.log(randomNumber)
            }
        }
        return listOfvals
    }

    render(){
        return(
            <div className="Gerador">
                <FormGenerator numero={this.state.numero} setNumero={this.setNumero}/>
                Números: 
                <div className="Lista">
                    {
                    this.generate(this.state.numero).map((number) => 
                        <div className="GeradorI">
                            <li key={number}>{number}</li>
                        </div>
                    )}
                </div>
            </div>
        )
    }


}
