const INITIAL_STATE = {
    
        data: '05-05-1992',
            nome :'Rafael',
            email : 'rafael.minatto@yahoo.com.br',
            telefone: '11975451019',
            assunto: 'assunto teste'
    }
            export default function (state = INITIAL_STATE, action) {
                switch(action.type){
                    case 'ATUALIZAR_DATA': return {...state,data:action.value}
                    case 'ATUALIZA_NOME':  return {...state,nome : action.value}
                    case 'ATUALIZA_EMAIL':  return {...state,email : action.value}
                    default : return state
                }
                
            
    
}