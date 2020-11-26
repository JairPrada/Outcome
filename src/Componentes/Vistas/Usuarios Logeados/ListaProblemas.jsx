import React, { Fragment, useEffect, useState } from "react";
import { Container, Grid, Paper } from "@material-ui/core";
import { db } from "../../../FirebaseConfig";
import Tarjeta from "../../Moleculas/Tarjeta";
import { connect } from "react-redux";
import { EstadoAlerta, TraerProblemas } from "../../../Redux/reducer/creador de acciones";

const ListaProblemas = (props) => {

    const [state, setState] = useState([])
    const getData = async () => {
        const documentos = []
        db.collection("Problemas").onSnapshot((arreglo) => {
            arreglo.forEach((elemento) => {
                documentos.push({ ...elemento.data(), id: elemento.id });
            });
            setState(documentos)
        })
    }
    useEffect(() => {
        getData()
    }, []);

    return (
        <Fragment>
            <Container maxWidth="lg" style={{ marginTop: "100px" }}>
                <Paper elevation={3} style={{ padding: "40px" }} >

                    <Grid container spacing={2}>
                        {
                            state.map(e => {
                                return (
                                    <Grid item xs={4}>
                                        <Tarjeta titulo={e.titulo} descripcion={e.descripcion} id={e.id}/>
                                    </Grid>
                                )
                            })
                        }
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
    obtenerProblemas() {
        dispatch(TraerProblemas())
    },
    mostrarAlerta(alerta) {
        dispatch(EstadoAlerta(alerta))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(ListaProblemas);