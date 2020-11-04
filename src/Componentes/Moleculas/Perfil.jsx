import { Avatar, Button, Container, Grid, Paper, Slide, Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import PerfilBanner from "../../Medios/Videos/Perfil.mp4";
import EmailIcon from '@material-ui/icons/Email';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import Colombia from "../../Medios/Imagenes/Colombia.svg";

const Perfil = ({ usuario }) => {
    return (
        <Fragment>
            {console.log(usuario)}
            <video src={PerfilBanner} className="mq" loop width="100%" autoPlay ></video>
            <Container maxWidth="md">
                <Slide direction="down" in={true} timeout={3000} mountOnEnter unmountOnExit>
                    <Paper elevation={3} id="Perfil" style={{ padding: "100px 0px", margin: "40px" }}>
                        <Grid container justify="center" >
                            <Grid item xs={9}  >
                                <Typography variant="h4" align="center">{usuario.nombre}</Typography>
                            </Grid>
                        </Grid>
                        <Grid container justify="center" className="mt-3">
                            <Grid item >
                                <Avatar src={usuario.foto} alt="imagen" style={{ width: "150px", height: "150px" }} ></Avatar>
                            </Grid>
                        </Grid>
                        <Grid container justify="center" className="mt-3">
                            <Grid item >
                                <EmailIcon></EmailIcon>
                            </Grid>
                            <Grid item >
                                <Typography>{usuario.correo}</Typography>
                            </Grid>
                        </Grid>
                        <Grid container justify="center">
                            <Grid item xs={1}  >
                                <img src={Colombia} width="100%" alt="colombia"></img>
                            </Grid>
                            <Grid item alignItems="center" style={{ padding: "25px", }}>
                                <Typography variant="body2">Bogota,Colombia</Typography>
                            </Grid>
                        </Grid>
                        <Grid container justify="center" className="mt-3">
                            <Grid item xs={5}  >
                                <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vero similique necessitatibus sed, placeat omnis exercitationem nobis? Ipsa, nostrum. Quos.</Typography>
                            </Grid>
                        </Grid>
                        <Grid container justify="center" className="mt-3">
                            <Grid item xs={5} >
                                <Button color="primary" variant="contained" fullWidth endIcon={<EditOutlinedIcon />}>Editar Perfil</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Slide>
            </Container>
        </Fragment>

    )
}
const mapStateToProps = state => (
    {
        usuario: state
    }
)
const mapDispatchToProps = (state) => ({})
export default connect(mapStateToProps, mapDispatchToProps)(Perfil)
