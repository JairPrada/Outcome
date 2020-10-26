import  React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Inicio from '../Vistas/Inicio';
import Login from '../Vistas/Login';
import Registro from '../Vistas/Registro';
import Menu from './Menu';
import Sesion from '../Vistas/Sesion';

const Rutas = () => {
    return (
        <React.Fragment>
            <Router>
                <Menu />
                <Switch>
                    <Route path="/" exact component={Inicio} />
                    <Route path="/login" component={Login} />
                    <Route path="/registro" exact component={Registro} />
                    <Route path="/logeado" exact component={Sesion} />
                </Switch>
            </Router>
        </React.Fragment>
    )
}
export default Rutas;