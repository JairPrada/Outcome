import { Avatar, Button, Container, Grid, Paper, Slide, Typography } from "@material-ui/core";
import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PerfilBanner from "../../../Medios/Videos/Perfil.mp4";
import { withRouter } from 'react-router-dom';
import EmailIcon from '@material-ui/icons/Email';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { EstadoAlerta } from "../../../Redux/reducer/creador de acciones";

const Perfil = (props) => {
    useEffect(() => {
        if (props.sesion === false) {
            const alerta = {
                open: true,
                contenido: "Tu sesion se ha terminado, vuelve a iniciar para acceder a las funcionalidades de Outcome",
                tipo: "error"
            }
            props.mostrarAlerta(alerta)
        }
    });
    const editar = () => {
        props.history.push("/auth/editarPerfil")
    }
    return (
        <Fragment>
            <video video src={PerfilBanner} className="mq" loop width="100%" muted autoPlay ></video >
            <Container maxWidth="md">
                <Slide direction="down" in={true} timeout={3000} mountOnEnter unmountOnExit>
                    <Paper elevation={3} id="Perfil" style={{ padding: "100px 0px", margin: "40px" }}>
                        <Grid container justify="center" >

                            <Grid item xs={9}  >

                                <Typography variant="h4" align="center">{`${props.usuario.nombre} `}</Typography>
                            </Grid>
                        </Grid>
                        <Grid container justify="center" className="mt-3">
                            <Grid item >
                                <Avatar alt="imagen" style={{ width: "100px", height: "100px", background: "purple" }} >O</Avatar>
                            </Grid>
                        </Grid>
                        <Grid container justify="center" className="mt-3">
                            <Grid item >
                                <EmailIcon></EmailIcon>
                            </Grid>
                            <Grid item >
                                <Typography>{props.usuario.correo}</Typography>
                            </Grid>
                        </Grid>
                        <br></br>
                        <Grid container justify="center">
                            <Grid item xs={1}  >
                                <img src={props.usuario.bandera} width="100%" alt="colombia"></img>
                            </Grid>
                            <Grid item style={{ padding: "25px", }}>
                                <Typography variant="body2">{props.usuario.pais}</Typography>
                            </Grid>
                        </Grid>
                        <Grid container justify="center" className="mt-3">
                            <Grid item xs={5} >
                                <Button color="primary" variant="contained" onClick={editar} fullWidth endIcon={<EditOutlinedIcon />}>Editar Perfil</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Slide>
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
    mostrarAlerta(alerta){
        dispatch(EstadoAlerta(alerta))
    }
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Perfil))
