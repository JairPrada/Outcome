import { Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import Perfil from "../Moleculas/Perfil";

const Sesion = () => {
    return (
        <Fragment>
            <div className="mt text-center">
                <Perfil />
                <Typography className="mt" variant="h1">Bienvenido a OUTCOME</Typography>
            </div>
        </Fragment>
    )
}

export default Sesion;