import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

const logoImg = require('../imgs/logo.png');
const bgImg = require('../imgs/bg.png');

export default props => (
    <Image style={{ flex: 1, width: null }} source={bgImg}>
        <View style={{ flex:1, padding: 15 }}>
            <View style={{ flex:2, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: '#fff' }}>Seja Bem-Vindo</Text>
                <Image source={logoImg} />
            </View>

            <View style={{ flex:1 }}>
                <Button 
                    title="Fazer Login" 
                    color='#115E54' 
                    onPress={() => Actions.formLogin()}
                />
            </View>
        </View>
    </Image>
);