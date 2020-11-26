import { Button, Container, Grid, Paper, Slide, TextField, Typography } from "@material-ui/core";
import React, { Fragment, useState, useEffect } from "react";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { EditarUsuario, EstadoAlerta } from "../../../Redux/reducer/creador de acciones";
const EditarPerfil = (props) => {
    useEffect(() => {
        if (props.sesion === false) {
            const alerta={
                open:true,
                contenido:"Tu sesion se ha terminado, vuelve a iniciar para acceder a las funcionalidades de Outcome",
                tipo:"error"
            }
            props.mostrarAlerta(alerta)
            props.history.push("/")
        }
    });
    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(function (res) {
                return res.json()
            }).then(function (data) {
                setSeleccion({ paises: data })
            })
    }, []);
    const [state, setState] = useState({
        id: props.usuario.id,
        nombre: props.usuario.nombre,
        apellido: props.usuario.apellido,
        correo: props.usuario.correo,
        pais: props.usuario.pais,
        bandera: props.usuario.bandera
    })
    const [seleccion, setSeleccion] = useState({
        paises: []
    })
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
    const editarU = (e) => {
        if (window.confirm("Esta seguro que desea cambiar la informacion de su perfil")) {
            props.editarUsuario(state)
            props.history.push("/perfil")
        }
    }
    return (
        <Fragment>
            <Container maxWidth="sm" className="m">
                <Paper elevation={3} style={{ padding: "40px 50px", background: "#F5F5F5" }}>
                    <div>
                        <Slide direction="left" in={true} timeout={1000} mountOnEnter unmountOnExit>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography className="text-center" variant="h3" gutterBottom>Editar Perfil</Typography>
                                </Grid>
                            </Grid>
                        </Slide>
                        <Slide direction="right" in={true} timeout={1000} mountOnEnter unmountOnExit>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography className="text-center" varian="h1"> <AccountCircleIcon style={{ fontSize: 80, color: "#648DAE" }} color="secondary" id="menuC" className="icono" /></Typography>
                                </Grid>
                            </Grid>
                        </Slide>
                        <Grid container spacing={2}>
                            <Slide direction="right" in={true} timeout={2000} mountOnEnter unmountOnExit>
                                <Grid item xs={6}>
                                    <TextField fullWidth label="Nombre" value={state.nombre} name="nombre" onChange={cambiar} helperText="Ingresa tu nombre" variant="outlined"></TextField>
                                </Grid>
                            </Slide>
                            <Slide direction="left" in={true} timeout={2000} mountOnEnter unmountOnExit>
                                <Grid item xs={6}>
                                    <TextField fullWidth label="Apellido" value={state.apellido} name="apellido" onChange={cambiar} helperText="Ingresa tu apellido" variant="outlined"></TextField>
                                </Grid>
                            </Slide>
                        </Grid>
                        <Slide direction="left" in={true} timeout={2000} mountOnEnter unmountOnExit>
                            <Grid container spacing={2}>
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
                                <Grid item xs={3}>
                                    <img src={state.bandera} alt={state.name} height="50px" />
                                </Grid>
                            </Grid>
                        </Slide>
                        <br></br>
                    </div>
                    <Slide direction="right" in={true} timeout={2000} mountOnEnter unmountOnExit >
                        <Button variant="contained" onClick={editarU} id="menu" color="primary" endIcon={<ArrowForwardIcon />} fullWidth >Actualizar Informacion</Button>
                    </Slide>
                </Paper>
            </Container>
        </Fragment >
    )
}
const mapStateToProps = state => (
    {
        usuario: state.usuario,
        sesion: state.sesion
    }
)
const mapDispatchToProps = dispatch => ({
    editarUsuario(usuario) {
        dispatch(EditarUsuario(usuario))
    },
    mostrarAlerta(alerta){
        dispatch(EstadoAlerta(alerta))
    }
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditarPerfil));