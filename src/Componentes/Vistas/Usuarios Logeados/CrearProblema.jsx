import React, { Fragment, useState, useEffect } from "react";
import { Container, TextField, Typography, Button, Paper, Grid } from "@material-ui/core";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ImageUploader from 'react-images-upload';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import { connect } from "react-redux";
import { CrearProblemaF } from "../../../Redux/reducer/creador de acciones";

const CrearProblema = (props) => {
    useEffect(() => {
        if (props.sesion === false) {
            alert("no tiene sesion iniciada")
            props.history.push("/")
        }
    });
    const [state, setState] = useState({
        titulo: "",
        categoria: "",
        descripcion: "",
        dueño: props.usuario.id,
        fotos: []
    })
    const cambiar = (e) => {

        if (e.target.name === "titulo") {
            setState({
                ...state,
                titulo: e.target.value
            })
        }
        if (e.target.name === "categoria") {
            setState({
                ...state,
                categoria: e.target.value
            })
        }
        if (e.target.name === "descripcion") {
            setState({
                ...state,
                descripcion: e.target.value
            })
        }
    }
    const fotos = (picture) => {
        setState({
            ...state,
            fotos: picture
        })
    }
    const subir = () => {
        props.crearProblema(state)
        props.history.push("/listaProblemas")
    }
    const categorias = ["Matematicas", "Lenguas", "Quimica", "Informatica"]
    return (
        <Fragment>
            <Container maxWidth="md" className="m">
                <Paper elevation={3} style={{ padding: "90px", background: "#F5F5F5" }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h3" align="center">Crear problema</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography align="center" varian="h1"> <AddToPhotosIcon style={{ fontSize: 80, color: "#648DAE" }} color="secondary" id="menuC" className="icono" /></Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField label="Titulo" fullWidth variant="outlined" onChange={cambiar} name="titulo" helperText="Titulo problema"></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField select fullWidth label="Categoria" name="categoria" value={state.pais} onChange={cambiar} SelectProps={{
                                native: true
                            }} variant="outlined">
                                <option key="error" value="error">seleccione una categoria</option>
                                {
                                    categorias.map((categoria) => {
                                        return (
                                            <option key={categoria} value={categoria}>{categoria}</option>
                                        )
                                    })
                                }
                            </TextField>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} >
                        <Grid item xs={12}>
                            <TextField label="Descripcion" name="descripcion" multiline rows={4} onChange={cambiar} fullWidth variant="outlined" helperText="Ingresa la descripcion del problema"></TextField>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <ImageUploader
                                withIcon={true}
                                buttonText='Seleccionar Imagenes'
                                onChange={fotos}
                                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                maxFileSize={5242880}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            {
                                state.fotos.map((elemento) => {
                                    return (
                                        <img src={elemento.name} width="200px" alt={elemento.name}></img>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>
                    <br></br>
                    <Grid container justify="center">
                        <Grid item xs={6}>
                            <Button variant="contained" color="primary" endIcon={<ArrowForwardIcon />} onClick={subir} fullWidth>Crear problema</Button>
                        </Grid>
                    </Grid>
                </Paper>

            </Container>
        </Fragment>
    )
}
const mapStateToProps = state => (
    {
        usuario: state.usuario,
        sesion: state.sesion
    }
)
const mapDispatchToProps = dispatch => ({
    crearProblema(usuario) {
        dispatch(CrearProblemaF(usuario))
    },
})
export default connect(mapStateToProps, mapDispatchToProps)(CrearProblema);