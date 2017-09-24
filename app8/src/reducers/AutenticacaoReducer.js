import {
    MODIFICA_EMAIL,
    MODIFICA_SENHA,
    MODIFICA_NOME,
    CADASTRO_USUARIO_SUCESSO,
    CADASTRO_USUARIO_ERRO,
    AUTENTICACAO_USUARIO_SUCESSO,
    AUTENTICACAO_USUARIO_ERRO,
    AUTENTICANDO,
    CADASTRANDO
} from '../actions/types';

const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    erroCadastro: '',
    erroAutenticacao: '',
    autenticando: false,
    cadastrando : false
}

export default (state = INITIAL_STATE, action) => {
    //console.log(action);
    switch (action.type) {
        case MODIFICA_EMAIL:
            return { ...state, email: action.payload };  
        case MODIFICA_SENHA:
            return { ...state, senha: action.payload };  
        case MODIFICA_NOME:
            return { ...state, nome: action.payload };  
        case CADASTRO_USUARIO_ERRO:
            return { ...state, erroCadastro: action.payload, cadastrando: false };  
        case CADASTRO_USUARIO_SUCESSO:
            return { ...state, nome: '', senha: '', cadastrando: false};
        case AUTENTICACAO_USUARIO_ERRO:
            return { ...state, erroAutenticacao: action.payload, autenticando: false };
        case AUTENTICANDO:
            return { ...state, autenticando: true};
        case CADASTRANDO:
            return { ...state, cadastrando: true};
        default:
            return state;
    }
};