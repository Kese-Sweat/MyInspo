import React from 'react';
import '../styles/App.css';
import { Provider } from 'react-redux'
import store from '../redux/store'
import Routes from './Routes';
import Inspo from './pages/InspoPage'

export default () => <div>
  <Provider store={store}>
    <Inspo/>
    <Routes />
  </Provider>
</div>
