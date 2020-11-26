import { AppBar, Avatar, Button, Grid, Hidden, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Outcome from "../../Medios/Imagenes/Outcome.svg";
import { connect } from "react-redux";
import { CerrarSesion } from "../../Redux/reducer/creador de acciones";

const Menu = (props) => {
    const cerrar = () => {
        if (window.confirm("¿ Esta seguro que desea cerrar su sesion actual ?")) {
            props.cerrarSesion();
            props.history.push("/")
        }

    }
    return (
        <Fragment>
            <AppBar color="primary">
                <Toolbar>
                    <Typography variant="h4" >
                        <NavLink id="text-white" to="/"><Button startIcon={<img src={Outcome} alt="icono" height="50px"></img>}><Typography variant="h5" id="text-white">OUTCOME</Typography></Button></NavLink>
                    </Typography>
                    <div style={{ flexGrow: "1" }}>
                    </div>
                    <Hidden smDown>
                        {
                            props.sesion
                                ? <Fragment>
                                    <NavLink id="text-white" to="/crearProblema"><Button id="text-white" fullWidth>Crear Problema</Button></NavLink>
                                    <NavLink id="text-white" to="/listaProblemas"><Button id="text-white" fullWidth>Lista Problemas</Button></NavLink>
                                    <NavLink id="text-white" to="/perfil"><Button id="text-white" fullWidth>{`Jair`}</Button></NavLink>
                                    <Button id="text-white" onClick={cerrar} >SALIR</Button>
                                    <Avatar alt="perfil"></Avatar>
                                </Fragment>
                                : <Fragment>
                                    <NavLink id="text-white" to="/"><Button id="text-white" fullWidth>Inicio</Button></NavLink>
                                    <NavLink id="text-white" to="/registro"><Button fullWidth id="text-white">Registrarse</Button></NavLink>
                                    <NavLink id="text-white" to="/login"><Button id="text-white" fullWidth>IniciarSesion</Button></NavLink>
                                </Fragment>
                        }
                    </Hidden>
                    <Hidden mdUp>
                        <Grid container >
                            <Grid item xs={9}>
                            </Grid>
                            <Grid item xs={3}>
                                <NavLink id="text-white" to="/Registro"><Button endIcon={<MenuIcon />} fullWidth id="text-white"></Button></NavLink>
                            </Grid>
                        </Grid>
                    </Hidden>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}
const mapStateToProps = state => (
    {
        sesion: state.sesion,
        usuario: state.usuario
    }
)
const mapDispatchToProps = dispatch => ({
    cerrarSesion() {
        dispatch(CerrarSesion())
    }
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Menu));