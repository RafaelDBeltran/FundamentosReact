import "./App.css";
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Random from './components/basicos/MakeRandom'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'
import Gerador from './components/Megasena/Gerador'
import Mega from './components/Megacorrecao/Mega'

export default _ => 
        <div className="App">
            <h1>Fundamentos React (Arrow)</h1>

            <div className="Cards">

                <Card titulo="#14 - Mega Correção" color="#cdd422">
                    <Mega/>
                </Card>

                <Card titulo="#13 - Minha Mega" color="#ff3a22">
                    <Gerador/>
                </Card>

                <Card titulo="#12 - Contador" color="#0db4b9">
                    <Contador numeroInicial={10}/>
                </Card>
                <Card titulo="#11 - Componente Controlado" color="#68d388">
                    <Input/>
                </Card>
                 <Card titulo="#10 - Indireta Pai" color="#ff1d58">
                    <IndiretaPai/>
                </Card>

                <Card titulo="#09 - Comunicação Direta" color="#39a0ca">
                    <DiretaPai/>
                </Card>

                <Card titulo="#08 - Renderização Condicional (Par ou Impar)" color="#a28089">
                   <ParOuImpar numero={20}/>
                   <UsuarioInfo usuario={{nome: 'Fernando'}}/>
                   <UsuarioInfo usuario={{email: 'fer@nando.com'}}/>
                </Card>
                <Card titulo="#07 - Lista de produtos" color="#354458">
                    <TabelaProdutos/>
                </Card>

                <Card titulo="#06 - Lista de alunos" color="#FF4C65">
                    <ListaAlunos/>
                </Card>

                <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                    <Familia sobrenome="Stark">
                        <FamiliaMembro nome="Tony"/>
                        <FamiliaMembro nome="Pepper"/>
                        <FamiliaMembro nome="Morgan"/>
                    </Familia>
                </Card>

                <Card titulo="#04 - Desafio Aleatório (CARD)" color="#FA6900">
                    <Random max={100} min={1}/>
                </Card>

                <Card titulo="#03 - Fragmento (CARD)" color="#E94C6F">
                    <Fragmento />
                </Card>

                <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
                    <ComParametro 
                        titulo="Situação do Aluno"
                        aluno="Pedro" nota={9.3}/>
                </Card>

                <Card titulo="#01 - Primeiro Componente" color="#588C73">
                    <Primeiro/>
                </Card>
            </div>       

        </div>
