import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Alerta from './Componentes/Moleculas/Alerta';
import Rutas from './Componentes/Moleculas/Rutas';
import Store from "./Redux/Store";
import  "./Outcome.svg"


function App(props) {
  return (
    <Fragment>
      <Provider store={Store} >
        <Rutas />
        <Alerta/>
      </Provider>
    </Fragment>
  );
}

export default App;
