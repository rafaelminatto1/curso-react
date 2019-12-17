import React from 'react';
import { Cabecalho } from '../../componentes/cabecalhos'
import {CadastroCurso} from './cadastro'
export  class CursoIndex extends React.Component  {
    render(){
        return (
            <div className ="container">
            <Cabecalho titulo ='Curso' subtitulo =' Cadastro'/>
            <CadastroCurso/>
            </div>
        )

    }
    
}

//>