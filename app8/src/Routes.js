import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import boasVindas from './components/BoasVindas';
import principal from './components/Principal'
import AdicionarContato from './components/AdicionarContato';

export default props => (
    <Router navigationBarStyle={{ backgroundColor: '#115E54' }} titleStyle={{ color: '#fff' }} >
        <Scene key="root">
            <Scene key='formLogin' component={FormLogin} title="Login" hideNavBar  />
            <Scene key='formCadastro' component={FormCadastro} title="Cadastro" />
            <Scene key='boasVindas' component={boasVindas} title="Bem-Vindo" hideNavBar />
            <Scene key='principal' component={principal} title="Principal" hideNavBar initial/>
            <Scene key='adicionarContato' component={AdicionarContato} title="Adicionar Contato"/>
        </Scene>
    </Router>  
);