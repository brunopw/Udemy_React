
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  Image,
  View
} from 'react-native';

class app3 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      escolhaUsuario: '',
      escolhaComputador: '',
      resultado: ''
    };
  }

  jokenpo(escolhaUsuarioParametro) {

    let numAleatorio = Math.floor(Math.random() * 3);

    let escolhaComputadorVariavel = '';

    switch (numAleatorio) {
      case 0: escolhaComputadorVariavel = 'PEDRA'; break;
      case 1: escolhaComputadorVariavel = 'PAPEL'; break;
      case 2: escolhaComputadorVariavel = 'TESOURA'; break;
    };

    let resultadoVariavel = '';

    if (escolhaComputadorVariavel == 'PEDRA') {
      if (escolhaUsuarioParametro == 'PEDRA') {
        resultadoVariavel = 'Empate!';
      } else if (escolhaUsuarioParametro == 'PAPEL') {
        resultadoVariavel = 'Você Ganhou!';
      } else {
        resultadoVariavel = 'O computador ganhou :(';
      }
    } else if (escolhaComputadorVariavel == 'PAPEL') {
      if (escolhaUsuarioParametro == 'PEDRA') {
        resultadoVariavel = 'O computador ganhou :(';
      } else if (escolhaUsuarioParametro == 'PAPEL') {
        resultadoVariavel = 'Empate!';
      } else {
        resultadoVariavel = 'Você Ganhou!';
      }
    } else if (escolhaComputadorVariavel == 'TESOURA') {
      if (escolhaUsuarioParametro == 'PEDRA') {
        resultadoVariavel = 'Você Ganhou!';
      } else if (escolhaUsuarioParametro == 'PAPEL') {
        resultadoVariavel = 'O computador ganhou :(';
      } else {
        resultadoVariavel = 'Empate!';
      }
    }

    this.setState({
      escolhaUsuario: escolhaUsuarioParametro,
      escolhaComputador: escolhaComputadorVariavel,
      resultado: resultadoVariavel
    });
  }

  render() {
    return (
      <View>

        <Topo></Topo>

        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}>
            <Button title="pedra" onPress={() => { this.jokenpo('PEDRA') }} />
          </View>

          <View style={styles.btnEscolha}>
            <Button title="papel" onPress={() => { this.jokenpo('PAPEL') }} />
          </View>

          <View style={styles.btnEscolha}>
            <Button title="tesoura" onPress={() => { this.jokenpo('TESOURA') }} />
          </View>
        </View>

        <View style={styles.palco}>
          <Text style={styles.txtResultado}> {this.state.resultado} </Text>

          <Text> Escolha do computador: {this.state.escolhaComputador} </Text>
          <Image source={require('./imgs/tesoura.png')}/>

          <Text> Escolha do usuário: {this.state.escolhaUsuario} </Text>
          <Image source={require('./imgs/tesoura.png')}/>
        </View>

      </View>

    );
  }
}

class Topo extends Component {
  render() {
    return (
      <View>
        <Image source={require('./imgs/jokenpo.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  btnEscolha: {
    width: 90
  },
  palco: {
    alignItems: 'center',
    marginTop: 10
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  }
});

AppRegistry.registerComponent('app3', () => app3);
