import React, { Component } from 'react'
import { ListCurso } from './list'
import { FromCurso } from './form'
import axios from 'axios'

const URL = 'http://localhost:3200/api/cursos'
export class CadastroCurso extends Component {

    initialState ={
        codigo: '',
        descricao: '',
        cargaHoraria: '',
        preco: '',
        categoria: 'ENGENHARIA',
        cursos: []
    }
    state = this.initialState
    constructor(props) {
        super(props);
        this.listar();
 }
 listar(){
    
  
    axios.get(URL).then(response => this.setState({cursos:
        response.data}))
    }
    
    //limpar(){
      //  this.setState(this.initialState)
    //}
    render() {
        return (
            <div className="row border-bottom">
                <div className="col-md-6">
                    <FromCurso />
                </div>
                <div className="col-md-6">
                    <ListCurso cursos={this.state.cursos} />
                </div>
            </div>
        )
    }


}