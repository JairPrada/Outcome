import { Button, Container, Slide, TextField, Typography } from "@material-ui/core";
import React, { Fragment, useState } from "react";
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
        contraseña: ""
    })
    const crearUsuario = async (e) => {
        try {
            const resultado = await Autenticado.createUserWithEmailAndPassword(state.correo, state.contraseña);
            const configuration = {
                url: "https://reactfirebase-e716a.web.app"
            }
            db.collection("usuarios").doc().set(state)
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
            if(error.code==="auth/email-already-in-use"){
                const mensaje = {
                    open: true,
                    contenido: "La dirección de correo electrónico ya está siendo utilizada por otra cuenta.",
                    tipo: "error"
                }
                props.estadoAlerta(mensaje)
            }
            if(error.code==="auth/weak-password"){
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
        if (e.target.name === "nombre") {
            console.log("estamaos modificanodo el nombre")
            setState({
                ...state,
                nombre: e.target.value
            })
        }
        if (e.target.name === "apellido") {
            console.log("estamaos modificanodo el apellido")
            setState({
                ...state,
                apellido: e.target.value
            })
        }
        if (e.target.name === "correo") {
            console.log("estamaos modificanodo el correo")
            setState({
                ...state,
                correo: e.target.value
            })
        } if (e.target.name === "contraseña") {
            console.log("estamos modificando la contraseña")
            setState({
                ...state,
                contraseña: e.target.value
            })
        }
    }
    return (
        <Fragment>
            <Container maxWidth="xs">
                <form className="m mb">
                    <Slide direction="down" in={true} timeout={1000} mountOnEnter unmountOnExit >
                        <div>
                            <Typography className="text-center" variant="h3" gutterBottom>Registrate</Typography>
                            <Typography className="text-center" varian="h1"> <AccountCircleIcon style={{ fontSize: 80 }} color="secondary" className="icono" /></Typography>
                            <TextField fullWidth label="Nombre" name="nombre" onChange={cambiar} helperText="Ingresa tu nombre" variant="outlined"></TextField>
                            <TextField fullWidth label="Apellido" name="apellido" onChange={cambiar} helperText="Ingresa tu apellido" variant="outlined"></TextField>
                            <TextField fullWidth label="Correo" name="correo" onChange={cambiar} type="email" helperText="Ingresa tu correo" variant="outlined"></TextField>
                            <TextField fullWidth label="Contraseña" name="contraseña" onChange={cambiar} type="password" helperText="Ingresa tu nombre" variant="outlined"></TextField>

                        </div>
                    </Slide>
                    <Slide direction="right" in={true} timeout={2000} mountOnEnter unmountOnExit >
                        <Button variant="contained" color="secondary" endIcon={<ArrowForwardIcon />} onClick={crearUsuario} fullWidth >Registrarse</Button>
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