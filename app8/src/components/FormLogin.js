import React, { Component } from 'react';
import { View, Text, TextInput, Button, TouchableHighlight, Image, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, autenticaUsuario } from '../actions/AutenticacaoActions';

const bgImg = require('../imgs/bg.png'); 
const w1Img = require('../imgs/texture4.jpg'); 

class FormLogin extends Component {

    _autenticaUsuario() {
        const { email, senha } = this.props;

        this.props.autenticaUsuario({ email, senha });
    }

    renderBtnAcessar() {

        if(this.props.autenticando) {
            return (
                <ActivityIndicator size="large" />
            );
        }
        return (
            <Button 
                title="Acessar"
                color="#115E54" 
                onPress={() => this._autenticaUsuario()} 
            />
        );
    }

    render() {
        return (
            <Image style={{ flex: 1, width: null }} source={bgImg}>
                <View style={{ flex: 1, padding: 10 }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 25, backgroundColor: 'transparent', color: '#fff' }}>WhatsApp Clone</Text>
                    </View>
                    <View style={{ flex: 2 }}>
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

                        <Text style={{ color: '#ff0000', fontSize: 18 }}>
                            {this.props.erroAutenticacao}
                        </Text>

                        <TouchableHighlight onPress={() => Actions.formCadastro()}>
                            <Text style={{ fontSize: 16, color: '#fff' }} >Ainda não tem cadstro? Cadastre-se</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{ flex: 2 }}>
                        {this.renderBtnAcessar()}
                    </View>
                </View>
            </Image>
        )
    }
};


const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroAutenticacao: state.AutenticacaoReducer.erroAutenticacao,
        autenticando: state.AutenticacaoReducer.autenticando
    }
);

export default connect(mapStateToProps,
    { 
        modificaEmail,
        modificaSenha,
        autenticaUsuario
    }
)(FormLogin);