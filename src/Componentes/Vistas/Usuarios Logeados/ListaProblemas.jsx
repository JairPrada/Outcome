import React, { Fragment } from "react";
import { Container, Grid, Paper } from "@material-ui/core";
import Tarjeta from "../../Moleculas/Tarjeta";

const ListaProblemas = () => {
    return (
        <Fragment>
            <Container maxWidth="md" style={{ marginTop: "100px" }}>
                <Paper elevation={3} style={{ padding: "40px" }} >
                    <div>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <Tarjeta />
                            </Grid>
                            <Grid item xs={4}>
                                <Tarjeta />
                            </Grid>
                            <Grid item xs={4}>
                                <Tarjeta />
                            </Grid>
                        </Grid>
                    </div>
                </Paper>
            </Container>
        </Fragment>
    )
}
export default ListaProblemas;