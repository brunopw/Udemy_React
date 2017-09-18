import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import Routes from './Routes';
import reducers from './reducers';

class App extends Component {

    componentWillMount() {
        // Initialize Firebase
        var config = {
            apiKey: 'AIzaSyCVurs2jhnDVxoYaTC0hbEtKpoYwAbZZ9s',
            authDomain: 'whatsapp-clone-007.firebaseapp.com',
            databaseURL: 'https://whatsapp-clone-007.firebaseio.com',
            projectId: 'whatsapp-clone-007',
            storageBucket: 'whatsapp-clone-007.appspot.com',
            messagingSenderId: '1023455070724'
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <Routes />
            </Provider>
        );
    }
}

export default App;
