import { Container, Grid, Typography } from "@material-ui/core";
import React, { Fragment } from "react";
const EditarPerfil =()=>{
    return(
        <Fragment>  
            <Container maxWidth="sm" className="m">
                <Grid container >
                    <Grid item xs={12}>
                        <Typography variant="h3" align="center">Perfil de Usuario</Typography>
                    </Grid>
                    
                    <Grid item xs={6}>
                        <Typography variant="h3">Bienvenido</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Fragment>
    )
}
export default EditarPerfil;