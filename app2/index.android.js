//Imports
import React from 'react';
import { Text, View, Image, AppRegistry, TouchableOpacity, Alert } from 'react-native';

//Formatações
const Estilos = {
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20,
    borderRadius: 10
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
};

const gerarNovaFrase = () => {
  let numeroAlearotio = Math.random();
  numeroAlearotio = Math.floor(numeroAlearotio * 6);
  if (numeroAlearotio > 5) numeroAlearotio = 5;

  let frases = Array();
  frases[0] = 'Estou sempre alegre.';
  frases[1] = 'O tempo dura bastante para aqueles que sabem ...';
  frases[2] = 'Se você encontrar um caminho sem obstáculos, será um caminho sem obstáculos =D';
  frases[3] = 'Não existe um caminho para a felicidade, Então desista ;D';
  frases[4] = 'Você nunca sabe a força que tem. Até que precise saber.';
  frases[5] = 'É nóis magnata!';

  let fraseEscolhida = frases[numeroAlearotio];

  Alert.alert(fraseEscolhida);
}

//Criar o componente
const App = () => {

  const { principal, botao, textoBotao } = Estilos;
  
  return(
    <View style={ principal }>

      <Image source={ require('./imgs/logo.png') }/>
      
      <TouchableOpacity onPress={gerarNovaFrase} style={ botao }>
        <Text style={textoBotao}>Nova Frase</Text>
      </TouchableOpacity>
      
    </View>
  ); 
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('app2', () => App);