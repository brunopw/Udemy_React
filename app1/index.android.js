import React from 'react';
import { Text, View, Button, AppRegistry } from 'react-native';

const geraNumeroAleatorio = () => {
  let numeroAleatorio = Math.random();

  numeroAleatorio = Math.floor(numeroAleatorio * 10);
  alert(numeroAleatorio);
};

const App = () => {

  return(
    <View>
      <Text>Gerador de números randômicos</Text>
      <Button 
        title= "Gerar número randômico"
        onPress={geraNumeroAleatorio}
      />
    </View>
  ); 
};

AppRegistry.registerComponent('app1', () => App);