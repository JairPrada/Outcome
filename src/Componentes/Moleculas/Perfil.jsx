import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";

const Perfil = ({ usuario }) => {
    return (
        <div>
            <Container maxWidth="sm">
                <Grid container >
                    <Grid item xs={12}>
                        <Typography variant="h5">{usuario.nombre}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={6}>
                        <img className="ava" src={usuario.foto} width="100%" alt="perfil"></img>
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={6}>
                    <Typography variant="body1">{usuario.correo}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                </Grid>

            </Container>

        </div>

    )
}
const mapStateToProps = state => (
    {
        usuario: state
    }
)
const mapDispatchToProps = (state) => ({})
export default connect(mapStateToProps, mapDispatchToProps)(Perfil)
