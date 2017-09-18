import React, { Component } from 'react';
import { View, TextInput, Button, Image } from 'react-native';
import { connect } from 'react-redux';
import {
    modificaEmail,
    modificaSenha,
    modificaNome,
    cadastraUsuario
} from '../actions/AutenticacaoActions';

const bgImg = require('../imgs/bg.png');

class formCadastro extends Component {

    _cadastraUsuario() {
        const { nome, email, senha } = this.props;
        this.props.cadastraUsuario({ nome, email, senha });
    }

    render() {
        return (
            <Image style={{ flex: 1, width: null }} source={bgImg}>
                <View style={{ flex: 1, padding: 10 }}>
                    <View style={{ flex: 4, justifyContent: 'center' }}>
                        <TextInput
                            value={this.props.nome}
                            style={{ fontSize: 20, height: 45 }}
                            placeholder='Nome'
                            placeholderTextColor='#fff'
                            onChangeText={texto => this.props.modificaNome(texto)}
                        />
                        <TextInput
                            value={this.props.email}
                            style={{ fontSize: 20, height: 45 }}
                            placeholder='E-mail'
                            placeholderTextColor='#fff'
                            onChangeText={texto => this.props.modificaEmail(texto)}
                        />
                        <TextInput
                            secureTextEntry={true}
                            value={this.props.senha}
                            style={{ fontSize: 20, height: 45 }}
                            placeholder='Senha'
                            placeholderTextColor='#fff'
                            onChangeText={texto => this.props.modificaSenha(texto)}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Button
                            title="Cadastrar"
                            color='#115E54'
                            onPress={() => this._cadastraUsuario()}
                        />
                    </View>
                </View>
            </Image>
        )
    };
};

const mapStateToProps = state => (
    {
        nome: state.AutenticacaoReducer.nome,
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
    }
);

export default connect(mapStateToProps,
    {
        modificaEmail,
        modificaSenha,
        modificaNome,
        cadastraUsuario
    }
)(formCadastro);