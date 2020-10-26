import { AppBar, Button, Grid, Hidden, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <Fragment>
            <AppBar color="secondary">
                <Toolbar>
                    <Typography variant="h4" >
                        Outcome
                    </Typography>
                    <Hidden smDown>
                        <Grid container>
                            <Grid item md={7}>
                            </Grid>
                            <Grid item md >
                                <NavLink id="text-white" to="/"><Button id="text-white" fullWidth>Inicio</Button></NavLink>
                            </Grid>
                            <Grid item md>
                                <NavLink id="text-white" to="/registro"><Button fullWidth id="text-white">Registrarse</Button></NavLink>
                            </Grid>
                            <Grid item md>
                                <NavLink id="text-white" to="/login"><Button id="text-white" fullWidth>IniciarSesion</Button></NavLink>
                            </Grid>
                        </Grid>
                    </Hidden>
                    <Hidden mdUp>
                    <Grid container >
                            <Grid item xs={9}>
                                
                            </Grid>
                            <Grid item xs={3}>
                               <NavLink id="text-white"  to="/Registro"><Button endIcon={<MenuIcon/>} fullWidth id="text-white"></Button></NavLink> 
                            </Grid>
                        </Grid>
                    </Hidden>

                </Toolbar>
            </AppBar>
        </Fragment>
    )
}
export default Menu;