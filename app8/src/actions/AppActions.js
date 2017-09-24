import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';
import {
    MODIFICA_ADICIONA_CONTATO_EMAIL
} from './types';

export const modificaAdicionaContatoEmail = (texto) => {
    return {
        type: MODIFICA_ADICIONA_CONTATO_EMAIL,
        payload: texto
    };
};

/*
export const adicionaContato = ({ email }) => {
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

const adicionaContatoSucesso = (dispatch) => {
    dispatch({ type: AUTENTICACAO_USUARIO_SUCESSO });

    Actions.principal();
};

const adicionaContatoErro = (erro, dispatch) => {
    dispatch({ type: AUTENTICACAO_USUARIO_ERRO, payload: erro.message });
};

*/