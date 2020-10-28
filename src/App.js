import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Alerta from './Componentes/Moleculas/Alerta';
import Rutas from './Componentes/Moleculas/Rutas';
import Store from "./Redux/Store";
import "./Outcome.svg"
import { ThemeProvider } from '@material-ui/core';
import theme from "./temaConfig";

function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Provider store={Store} >
          <Rutas />
          <Alerta />
        </Provider>
      </Fragment>
    </ThemeProvider>

  );
}

export default App;
