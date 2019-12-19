export  const dataOnChange = function (evento){
    return{
        type : 'ATUALIZA_DATA',
        value : evento.target.value
    }
}

export const nomeOnChange = function (evento){
    return{
        type:'ATUALIZA_NOME',
        value: evento.target.value
    }
    
}
export const emailOnChange = function (evento){
    return{
        type:'ATUALIZA_EMAIL',
        value: evento.target.value
    }
}