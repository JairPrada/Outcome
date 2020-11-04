import { Button, Container, Grid, Slide, TextField, Typography } from "@material-ui/core";
import React, { Fragment, useState, useEffect } from "react";
import { db, Autenticado } from "../../FirebaseConfig";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { connect } from "react-redux";
import { EstadoAlerta } from "../../Redux/creador de acciones";

const Registro = (props) => {
    const [state, setState] = useState({
        nombre: "",
        apellido: "",
        correo: "",
        contraseña: "",
        pais: "",
        bandera: ""
    })
    const [seleccion, setSeleccion] = useState({
        paises: []
    })
    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(function (res) {
                return res.json()
            }).then(function (data) {
                setSeleccion({ paises: data })
            })
    }, []);
    const crearUsuario = async (e) => {
        try {
            const resultado = await Autenticado.createUserWithEmailAndPassword(state.correo, state.contraseña);
            const configuration = {
                url: "https://reactfirebase-e716a.web.app"
            }
            await db.collection("usuarios").doc().set(state)
            await resultado.user.sendEmailVerification(configuration);
            await Autenticado.signOut();
            const mensaje = {
                open: true,
                contenido: "Estas a un paso de crear tu cuenta verifica tu correo electronico",
                tipo: "success"
            }
            props.estadoAlerta(mensaje)
        } catch (error) {
            console.log(error)
            if (error.code === "auth/email-already-in-use") {
                const mensaje = {
                    open: true,
                    contenido: "La dirección de correo electrónico ya está siendo utilizada por otra cuenta.",
                    tipo: "error"
                }
                props.estadoAlerta(mensaje)
            }
            if (error.code === "auth/weak-password") {
                const mensaje = {
                    open: true,
                    contenido: "La contraseña debe tener al menos 6 caracteres",
                    tipo: "error"
                }
                props.estadoAlerta(mensaje)
            }
        }
    }
    const cambiar = (e) => {
        let flag = ""
        if (e.target.name === "pais") {
            seleccion.paises.forEach(pais => {
                if (pais.name === e.target.value) {
                    flag = pais.flag
                }
            });
            setState({
                ...state,
                pais: e.target.value,
                bandera: flag
            })
        }
        if (e.target.name === "nombre") {

            setState({
                ...state,
                nombre: e.target.value
            })
        }
        if (e.target.name === "apellido") {
            setState({
                ...state,
                apellido: e.target.value
            })
        }
        if (e.target.name === "correo") {
            setState({
                ...state,
                correo: e.target.value
            })
        } if (e.target.name === "contraseña") {
            setState({
                ...state,
                contraseña: e.target.value
            })
        }
    }
    return (
        <Fragment>
            <Container maxWidth="xs" className="roots">
                <form className="m mb" autoComplete="off" noValidate>
                    <Slide direction="down" in={true} timeout={1000} mountOnEnter unmountOnExit >
                        <div>
                            <Typography className="text-center" variant="h3" gutterBottom>Registrate</Typography>
                            <br></br>
                            <Typography className="text-center" varian="h1"> <AccountCircleIcon style={{ fontSize: 80 }} color="secondary" id="menuC" className="icono" /></Typography>
                            <br></br>
                            <TextField fullWidth label="Nombre" name="nombre" onChange={cambiar} helperText="Ingresa tu nombre" color="secondary" variant="outlined"></TextField>
                            <br></br>
                            <TextField fullWidth label="Apellido" name="apellido" onChange={cambiar} helperText="Ingresa tu apellido" variant="outlined"></TextField>
                            <br></br>
                            <Grid container>
                                <Grid item xs={9}>
                                    <TextField select fullWidth label="Pais" name="pais" value={state.pais} onChange={cambiar} SelectProps={{
                                        native: true
                                    }} variant="outlined">
                                        <option key="error" value="error">seleccione un pais</option>
                                        {
                                            seleccion.paises.map((pais) => {
                                                return (
                                                    <option key={pais.name} value={pais.name}>{pais.name}</option>
                                                )
                                            })
                                        }
                                    </TextField>
                                </Grid>
                                <Grid item xs={1}>
                                </Grid>
                                <Grid item xs={2}>
                                    <img src={state.bandera} alt={state.name} width="100%" />
                                </Grid>
                            </Grid>
                            <br></br>
                            <TextField fullWidth label="Correo" typeof="email" name="correo" onChange={cambiar} type="email" helperText="Ingresa tu correo" variant="outlined"></TextField>
                            <TextField fullWidth label="Contraseña" name="contraseña" onChange={cambiar} type="password" helperText="Ingresa tu nombre" variant="outlined"></TextField>
                        </div>
                    </Slide>
                    <Slide direction="right" in={true} timeout={2000} mountOnEnter unmountOnExit >
                        <Button variant="contained" id="menu" color="primary" endIcon={<ArrowForwardIcon />} onClick={crearUsuario} fullWidth >Registrarse</Button>
                    </Slide>
                </form>
            </Container>
        </Fragment >
    )
}
const mapStateToProps = () => ({})
const mapDispatchToProps = (dispatch) => ({
    estadoAlerta(mensaje) {
        dispatch(EstadoAlerta(mensaje))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Registro);