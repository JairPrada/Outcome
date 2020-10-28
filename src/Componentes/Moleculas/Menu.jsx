import { AppBar, Avatar, Button, Grid, Hidden, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Outcome from "../../Medios/Imagenes/Outcome.svg"

const Menu = (props) => {

    return (
        <Fragment>
            <AppBar color="primary">
                <Toolbar>
                    <Typography variant="h4" >
                        <NavLink id="text-white" to="/"><Button startIcon={<img src={Outcome} alt="icono" height="50px"></img>}><Typography variant="h5" id="text-white">OUTCOME</Typography></Button></NavLink>
                    </Typography>
                    <Hidden smDown>
                        <Grid container>
                            <Grid item md={6}>
                            </Grid>
                            <Grid item md={1} >
                                <NavLink id="text-white" to="/"><Button id="text-white" fullWidth>Inicio</Button></NavLink>
                            </Grid>
                            <Grid item md={2}>
                                <NavLink id="text-white" to="/registro"><Button fullWidth id="text-white">Registrarse</Button></NavLink>
                            </Grid>
                            <Grid item md={2}>
                                <NavLink id="text-white" to="/login"><Button id="text-white" fullWidth>IniciarSesion</Button></NavLink>
                            </Grid>
                            <Grid item xs={1} >
                                <Avatar alt="perfil"></Avatar>
                            </Grid>
                        </Grid>
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
export default Menu;