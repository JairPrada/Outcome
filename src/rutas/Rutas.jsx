import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Inicio from '../Componentes/Vistas/Inicio';
import Login from '../Componentes/Vistas/Login';
import Registro from '../Componentes/Vistas/Registro';
import Menu from '../Componentes/Moleculas/Menu';
import EditarPerfil from "../Componentes/Vistas/Usuarios Logeados/EditarPerfil";
import CrearProblema from "../Componentes/Vistas/Usuarios Logeados/CrearProblema";
import { connect } from "react-redux";
import ListaProblemas from "../Componentes/Vistas/Usuarios Logeados/ListaProblemas";
import Perfil from "../Componentes/Vistas/Usuarios Logeados/Perfil";

const Rutas = (props) => {
    return (
        <React.Fragment>
            <Router>
                <Menu />
                <Switch>
                    <Route path="/" exact component={Inicio} />
                    <Route path="/login" component={Login} />
                    <Route path="/registro" exact component={Registro} />
                    <Route path="/perfil" exact component={Perfil} />
                    <Route path="/auth/editarPerfil" exact component={EditarPerfil} />
                    <Route path="/crearProblema" exact component={CrearProblema} />
                    <Route path="/listaProblemas" exact component={ListaProblemas} />
                </Switch>
            </Router>
        </React.Fragment>
    )
}

const mapStateToProps = state => (
    {
        usuario: state
    }
)
const mapDispatchToProps = (state) => ({})
export default connect(mapStateToProps, mapDispatchToProps)(Rutas);
