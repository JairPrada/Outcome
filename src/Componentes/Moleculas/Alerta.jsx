import React, { Fragment } from "react";
import {Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { connect } from "react-redux";
import { cerrarAlerta } from "../../Redux/reducer/creador de acciones";
const Alerta = (props) => {
    return (
        <Fragment>
            <Snackbar open={props.alerta.open}  autoHideDuration={6000} anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }} onClose={props.handleClose}>
                <Alert id={props.alerta.tipo} onClose={props.handleClose} severity={props.alerta.tipo}>
                    {props.alerta.contenido}
                </Alert>
            </Snackbar>
        </Fragment>
    )
}
const mapStateToProps = state => ({
    alerta: {
        open: state.alerta.open,
        contenido: state.alerta.contenido,
        tipo: state.alerta.tipo
    }
})
const mapDispatchToProps = dispatch => ({
    handleClose() {
        dispatch(cerrarAlerta())
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Alerta);