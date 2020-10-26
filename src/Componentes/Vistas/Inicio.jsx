import { Container, Grid, Slide } from "@material-ui/core";
import React, { Fragment } from "react";
import Banner from "../../Banner.mp4";
import img1 from "../../1.svg";
import img2 from "../../2.svg";
import img3 from "../../3.svg";

const Inicio = () => {
    return (
        <Fragment>
            <video className="mq" src={Banner} width="100%" autoPlay loop />
            <Container maxWidth="xl" className="mw">
                <Grid container spacing={3}>
                    <Slide direction="down" in={true} timeout={1000}  >
                        <Grid item xs={12} md>
                            <img src={img3} width="100%" alt="Casa" />
                        </Grid>
                    </Slide>
                    <Slide direction="down" in={true} timeout={2000}  >
                        <Grid item xs={12} md>
                            <img src={img1} width="100%" alt="Casa" />
                        </Grid>
                    </Slide>
                    <Slide direction="down" in={true} timeout={3000}   >
                        <Grid item xs={12} md>
                            <img src={img2} width="100%" alt="Casa" />
                        </Grid>
                    </Slide>
                </Grid>
            </Container>
        </Fragment >
    )
}
export default Inicio;