import React, { Component } from 'react'
import { ListCurso } from './list'
import { FromCurso } from './form'
import axios from 'axios'

const URL = 'http://localhost:3200/api/cursos'
export class CadastroCurso extends Component {

    initialState = {
        codigo: '123',
        descricao: '',
        cargaHoraria: '',
        preco: '',
        categoria: 'ENGENHARIA',

    }
    state = { ...this.initialState, cursos: [] }
    constructor(props) {
        super(props);
        this.listar();
    }
    listar() {


        axios.get(URL).then(response =>{ this.setState({ cursos: response.data})
    }
        )
    }
    codigoChange(e) {
        this.setState({ codigo: e.target.value });
    }
    descricaoChange(html) {
        this.setState({ descricao: html.target.value });
    }
    cargaHorariaChange(html) {
        this.setState({ cargaHoraria: html.target.value });
    }

    precoChange(html) {
        this.setState({ preco: html.target.value });
    }
    categoriaChange(html) {
        this.setState({ categoria: html.target.value });
    }
    adicionar(evento) {
       evento.preventDefault()
       
       const {codigo, descricao, cargaHoraria, categoria, preco} = this.state
       const body ={codigo,
        descricao,
        cargaHoraria,
        categoria,
        preco}
        
       axios.post(URL, body).then(_ =>{
            this.listar()
            this.limpar()
            alert('Curso adicionado')
        })
        .catch(error =>{
            alert('Ocorreu erro ao adicionar curso')
            console.log(error)
        })
            
    }

    limpar(){
        this.setState(this.initialState)
    }
    render() {
        return (
            <div className="row border-bottom">
                <div className="col-md-6">
                    <FromCurso
                        codigo={this.state.codigo}
                        codigoChange={this.codigoChange.bind(this)}
                        descricao={this.state.descricao}
                        descricaoChange={this.descricaoChange.bind(this)}
                        cargaHoraria={this.state.cargaHoraria}
                        cargaHorariaChange={this.cargaHorariaChange.bind(this)}
                        preco={this.state.preco}
                        precoChange={this.precoChange.bind(this)}
                        categoria={this.state.categoria}
                        categoriaChange={this.categoriaChange.bind(this)}
                        adicionar={this.adicionar.bind(this)} />

                        
                </div>
                <div className="col-md-6">
                    <ListCurso cursos={this.state.cursos} />
                </div>
            </div>
        )
    }


}