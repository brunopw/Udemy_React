import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';
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
} from './types';

export const modificaEmail = (texto) => {
    return {
        type: MODIFICA_EMAIL,
        payload: texto
    };
};

export const modificaSenha = (texto) => {
    return {
        type: MODIFICA_SENHA,
        payload: texto
    };
};

export const modificaNome = (texto) => {
    return {
        type: MODIFICA_NOME,
        payload: texto
    };
};

export const cadastraUsuario = ({ nome, email, senha }) => {
    return dispatch => {

        dispatch({ type: CADASTRANDO });

        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(user => {
                const emailB64 = b64.encode(email);

                firebase.database().ref(`/contatos/${emailB64}`)
                    .push({ nome })
                    .then(value => cadastroUsuarioSucesso(dispatch))
            })
            .catch(erro => cadastroUsuarioErro(erro, dispatch));
    }
};

const cadastroUsuarioSucesso = (dispatch) => {
    dispatch({ type: CADASTRO_USUARIO_SUCESSO });

    Actions.boasVindas();
};

const cadastroUsuarioErro = (erro, dispatch) => {
    dispatch({ type: CADASTRO_USUARIO_ERRO, payload: erro.message });
};

export const autenticaUsuario = ({ email, senha }) => {
    return dispatch => {

        dispatch({ type: AUTENTICANDO });

        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(value => autenticaUsuarioSucesso(dispatch))
            .catch(erro => autenticaUsuarioErro(erro, dispatch));
    }
};

const autenticaUsuarioSucesso = (dispatch) => {
    dispatch({ type: AUTENTICACAO_USUARIO_SUCESSO });

    Actions.principal();
};

const autenticaUsuarioErro = (erro, dispatch) => {
    dispatch({ type: AUTENTICACAO_USUARIO_ERRO, payload: erro.message });
};