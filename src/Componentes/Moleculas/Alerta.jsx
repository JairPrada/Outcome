import React, { Fragment } from "react";
import { Slide, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { connect } from "react-redux";
import { cerrarAlerta } from "../../Redux/creador de acciones";
const Alerta = (props) => {

    return (
        <Fragment>
            <Snackbar open={props.open} transitionDuration={1000} autoHideDuration={6000} anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }} onClose={props.handleClose}>
                <Slide direction="up" in={true} timeout={1000} mountOnEnter unmountOnExit >
                    <Alert onClose={props.handleClose} severity={props.tipo}>
                        {props.contenido}
                    </Alert>
                </Slide>

            </Snackbar>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    open: state.open,
    contenido: state.contenido,
    tipo: state.tipo
})
const mapDispatchToProps = dispatch => ({
    handleClose() {
        dispatch(cerrarAlerta())
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Alerta);