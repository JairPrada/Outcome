import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Grid, Paper, Slide, TextField, Typography } from "@material-ui/core";
import { Autenticado, Facebook, Github, Google } from "../../FirebaseConfig";
import FacebookIcon from '@material-ui/icons/Facebook';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import GitHubIcon from '@material-ui/icons/GitHub';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { EstadoAlerta, EstadoSesion, IniciarSesion } from "../../Redux/reducer/creador de acciones";
import { connect } from "react-redux";
import IconoGoogle from "../Moleculas/IconoGoogle";

const Login = (props) => {
    const [state, setState] = useState({
        email: "jairprada9@gmail.com",
        password: "123456"
    })
    useEffect(() => {
        if (props.sesion) {
            props.history.push("/perfil")
        }
    });
    const iniciarSesionP = () => {
        const usuario = {
            correo: state.email,
            contraseña: state.password
        }
        props.iniciarSesion(usuario);
    }
    const cambiar = (e) => {
        if (e.target.name === "email") {

            setState({
                ...state,
                email: e.target.value
            })
        } else if (e.target.name === "password") {
            setState({
                ...state,
                password: e.target.value
            })
        }
    }
    const iniciarSesionF = async (e) => {
        console.log("Ingrese")
        try {
            const resultado = await Autenticado.signInWithPopup(Facebook);
            if (resultado) {
                props.estadoSesion(resultado.user)
                const mensaje = {
                    open: true,
                    contenido: "Ha iniciado sesion correctamente bienvenido",
                    tipo: "success"
                }
                props.estadoAlerta(mensaje)
                props.history.push("/logeado")
            }
            await console.log(resultado)
        }
        catch (error) {
            console.log(error)
            if (error.code === "auth/account-exists-with-different-credential") {
                const mensaje = {
                    open: true,
                    contenido: "Ya existe una cuenta con la misma dirección de correo electrónico de un proveedor asociado con esta dirección de correo electrónico.",
                    tipo: "error"
                }
                props.estadoAlerta(mensaje)
            }
        }

    }
    const iniciarSesionG = async (e) => {
        try {
            console.log("Ingrese")
            const resultado = await Autenticado.signInWithPopup(Google);
            if (resultado) {
                props.estadoSesion(resultado.user)
                const mensaje = {
                    open: true,
                    contenido: "Ha iniciado sesion correctamente bienvenido",
                    tipo: "success"
                }
                props.estadoAlerta(mensaje)
                props.history.push("/logeado")
            }
            await console.log(resultado)
        }
        catch (error) {
            console.log(error)
            if (error.code === "auth/account-exists-with-different-credential") {
                const mensaje = {
                    open: true,
                    contenido: "Ya existe una cuenta con la misma dirección de correo electrónico de un proveedor asociado con esta dirección de correo electrónico.",
                    tipo: "error"
                }
                props.estadoAlerta(mensaje)
            }
        }

    }
    const iniciarSesionGit = async (e) => {
        try {
            console.log("Ingrese")
            const resultado = await Autenticado.signInWithPopup(Github);
            if (resultado) {
                props.estadoSesion(resultado.user)
                const mensaje = {
                    open: true,
                    contenido: "Ha iniciado sesion correctamente bienvenido",
                    tipo: "success"
                }
                props.estadoAlerta(mensaje)
                props.history.push("/logeado")
            }
            await console.log(resultado)
        }
        catch (error) {
            console.log(error)
            if (error.code === "auth/account-exists-with-different-credential") {
                const mensaje = {
                    open: true,
                    contenido: "Ya existe una cuenta con la misma dirección de correo electrónico de un proveedor asociado con esta dirección de correo electrónico.",
                    tipo: "error"
                }
                props.estadoAlerta(mensaje)
            }
        }
    }
    return (
        <Fragment>
            <Container maxWidth="sm" className="m">
                <Paper elevation={3} style={{ padding: "30px 50px", background: "#F5F5F5" }}>
                    <Slide direction="down" in={true} timeout={1000} mountOnEnter unmountOnExit >
                        <div>
                            <Typography className="text-center" variant="h3" gutterBottom>Inicio de Sesion</Typography>
                            <Typography className="text-center" varian="h1"> <AccountCircleIcon style={{ fontSize: 80, color: "#648DAE" }} id="menuC" color="secondary" className="icono" /></Typography>
                            <TextField fullWidth required onChange={cambiar} name="email" type="email" helperText="Ingresa tu correo" variant="outlined" label="Email"></TextField>
                            <TextField fullWidth required onChange={cambiar} name="password" type="password" helperText="Ingresa tu contraseña" variant="outlined" label="Password"></TextField>
                        </div>
                    </Slide>
                    <Slide direction="right" in={true} timeout={2000} mountOnEnter unmountOnExit >
                        <Button endIcon={<ArrowForwardIcon />} onClick={iniciarSesionP} variant="contained" fullWidth color="primary">Iniciar Sesion</Button>
                    </Slide>
                    <div className="mt-3">
                        <Grid container spacing={1} >
                            <Slide direction="right" in={true} timeout={1000} mountOnEnter unmountOnExit >
                                <Grid item xs>
                                    <Button startIcon={<FacebookIcon style={{ color: "blue" }} />} fullWidth onClick={iniciarSesionF} variant="contained" >Facebook</Button>
                                </Grid>
                            </Slide>
                            <Slide direction="up" in={true} timeout={1000} mountOnEnter unmountOnExit >
                                <Grid item xs>
                                    <Button startIcon={<GitHubIcon />} onClick={iniciarSesionGit} fullWidth variant="contained">Github</Button>
                                </Grid>
                            </Slide>
                            <Slide direction="left" in={true} timeout={1000} mountOnEnter unmountOnExit >
                                <Grid item xs>
                                    <Button startIcon={<IconoGoogle />} fullWidth onClick={iniciarSesionG} variant="contained">Google</Button>
                                </Grid>
                            </Slide>
                        </Grid>
                    </div>
                </Paper>
            </Container>
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    sesion: state.sesion
})

const mapDispatchToProps = dispatch => ({
    estadoSesion(respuesta) {
        dispatch(EstadoSesion(respuesta))
    },
    estadoAlerta(mensaje) {
        dispatch(EstadoAlerta(mensaje))
    },
    iniciarSesion(usuario) {
        dispatch(IniciarSesion(usuario))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login) 