import React from 'react'
import { Cabecalho } from '../../componentes/cabecalhos'
import  ContatoForm  from './form'
import {connect} from 'react-redux'

class ContatoIndex extends React.Component {
    render() {
        return (
            <div className="container">
                <Cabecalho titulo ='Contato' subtitulo ={` Quere entrar em contato conosco-  ${this.props.nome}`}/>
                <ContatoForm/>
            </div>
        )
    }



}

const mapStateToProps = store =>({
    nome: store.contato.nome
})

const Connected = connect(mapStateToProps, null)(ContatoIndex)
export {Connected as ContatoIndex}
