
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

import Topo from './src/components/topo';
import Icone from './src/components/icone';

class app3 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      escolhaUsuario: '',
      escolhaComputador: '',
      resultado: ''
    };
  }

  jokenpo(escolhaUsuario) {
    const numAleatorio = Math.floor(Math.random() * 3);

    let escolhaComputador = '';

    switch (numAleatorio) {
      case 0: escolhaComputador = 'PEDRA'; break;
      case 1: escolhaComputador = 'PAPEL'; break;
      case 2: escolhaComputador = 'TESOURA'; break;
      default: escolhaComputador = '';
    }

    let resultado = '';

    if (escolhaComputador === 'PEDRA') {
      if (escolhaUsuario === 'PEDRA') {
        resultado = 'Empate!';
      } else if (escolhaUsuario === 'PAPEL') {
        resultado = 'Você Ganhou!';
      } else {
        resultado = 'Você perdeu :(';
      }
    } else if (escolhaComputador === 'PAPEL') {
      if (escolhaUsuario === 'PEDRA') {
        resultado = 'Você perdeu :(';
      } else if (escolhaUsuario === 'PAPEL') {
        resultado = 'Empate!';
      } else {
        resultado = 'Você Ganhou!';
      }
    } else if (escolhaComputador === 'TESOURA') {
      if (escolhaUsuario === 'PEDRA') {
        resultado = 'Você Ganhou!';
      } else if (escolhaUsuario === 'PAPEL') {
        resultado = 'Você perdeu :(';
      } else {
        resultado = 'Empate!';
      }
    }

    this.setState({ escolhaUsuario, escolhaComputador, resultado });
  }

  render() {
    return (
      <View>

        <Topo />

        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}>
            <Button title="pedra" onPress={() => { this.jokenpo('PEDRA'); }} />
          </View>

          <View style={styles.btnEscolha}>
            <Button title="papel" onPress={() => { this.jokenpo('PAPEL'); }} />
          </View>

          <View style={styles.btnEscolha}>
            <Button title="tesoura" onPress={() => { this.jokenpo('TESOURA'); }} />
          </View>
        </View>

        <View style={styles.palco}>
          <Text style={styles.txtResultado}> {this.state.resultado} </Text>
          <Icone escolha={this.state.escolhaComputador} jogador='Computador' />
          <Icone escolha={this.state.escolhaUsuario} jogador='Você' />
        </View>

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
