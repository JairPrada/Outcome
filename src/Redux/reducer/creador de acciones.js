import { ESTADO_SESION, MENSAJE_ALERTA, CERRAR_ALERTA, CREAR_USUARIO, INICIAR_SESION, EDITAR_USUARIO, CREAR_PROBLEMA, CERRAR_SESION} from "../actions/actions";
import { Autenticado, db } from "../../FirebaseConfig";
const EstadoSesion = estado => (
    {
        type: ESTADO_SESION,
        data: estado.data,
        usuario: estado.usuario,
        sesion: estado.sesion
    }
)
const EstadoAlerta = mensaje => (
    {
        type: MENSAJE_ALERTA,
        open: mensaje.open,
        contenido: mensaje.contenido,
        tipo: mensaje.tipo
    }
)
const cerrarAlerta = () => (
    {
        type: CERRAR_ALERTA,
    }
)
const IniciarSesion = (usuario) => dispatch => {
    Autenticado.signInWithEmailAndPassword(usuario.correo, usuario.contraseña)
        .then(resultado => {
            if (resultado.user.emailVerified === true) {
                db.collection("Usuarios").doc(resultado.user.uid).get()
                    .then(datos => {
                        return dispatch({
                            type: INICIAR_SESION,
                            usuario: {
                                id: resultado.user.uid,
                                nombre: datos.data().nombre,
                                apellido: datos.data().apellido,
                                pais: datos.data().pais,
                                bandera: datos.data().bandera,
                                correo: datos.data().correo
                            },
                            sesion: true,
                            alerta: {
                                open: true,
                                contenido: "Ha iniciado sesion correctamente bienvenido",
                                tipo: "success"
                            }
                        })
                    })
            } else {
                Autenticado.signOut()
                return dispatch({
                    type: INICIAR_SESION,
                    sesion: false,
                    alerta: {
                        open: true,
                        contenido: "No ha verificado su cuenta de correo electronico",
                        tipo: "error"
                    }
                })
            }
        }).catch(error => {
            if (error.code === "auth/wrong-password") {
                return dispatch({
                    type: INICIAR_SESION,
                    alerta: {
                        open: true,
                        contenido: "La contraseña no concide con la direccion de correo electronico",
                        tipo: "error"
                    }
                })
            }
            if (error.code === "auth/user-not-found") {
                return dispatch({
                    type: INICIAR_SESION,
                    alerta: {
                        open: true,
                        contenido: "No hay ningún registro de usuario que corresponda a este identificador.",
                        tipo: "error"
                    }
                })
            }
        })
}
const CrearUsuario = (datos) => dispatch => {
    Autenticado.createUserWithEmailAndPassword(datos.correo, datos.contraseña)
        .then(resultado => {
            const configuration = {
                url: "https://reactfirebase-e716a.web.app"
            }
            resultado.user.sendEmailVerification(configuration);
            db.collection("Usuarios").doc(resultado.user.uid).set(Object.assign({}, datos))
                .then(resultado => {
                    return dispatch({
                        type: CREAR_USUARIO,
                        alerta: {
                            open: true,
                            contenido: "Estas a un paso de crear tu cuenta, verifica tu correo electronico",
                            tipo: "success"
                        }
                    })
                })

        }).catch(error => {
            if (error.code === "auth/email-already-in-use") {
                return dispatch({
                    type: CREAR_USUARIO,
                    alerta: {
                        open: true,
                        contenido: "La dirección de correo electrónico ya está siendo utilizada por otra cuenta",
                        tipo: "error"
                    }
                })
            }
            if (error.code === "auth/weak-password") {
                return dispatch({
                    type: CREAR_USUARIO,
                    alerta: {
                        open: true,
                        contenido: "La contraseña debe tener al menos 6 caracteres",
                        tipo: "error"
                    }

                })
            }
        })
}
const EditarUsuario = (usuario) => dispatch => {
    db.collection("Usuarios").doc(usuario.id).set(Object.assign({}, usuario))
        .then(respuesta => {
            return dispatch({
                type: EDITAR_USUARIO,
                alerta: {
                    open: true,
                    contenido: "Informacion de perfil actualizada correctamente",
                    tipo: "success"
                },
                usuario: {
                    id: usuario.id,
                    nombre: usuario.nombre,
                    apellido: usuario.apellido,
                    correo: usuario.correo,
                    pais: usuario.pais,
                    bandera: usuario.bandera
                }
            })
        })
}
const CrearProblemaF = (datosProblema) => dispatch => {
    db.collection("Problemas").doc().set(Object.assign({}, datosProblema))
        .then(resultas => {
            return dispatch({
                type: CREAR_PROBLEMA,
                alerta: {
                    open: true,
                    contenido: "Problema creado correctamente",
                    tipo: "success"
                }
            })
        })
}
const TraerProblemas = () => dispatch => {
    
}
const CerrarSesion = () => dispatch => {
    Autenticado.signOut();
    return dispatch({
        type: CERRAR_SESION,
        usuario: {
            id: "",
            nombre: "",
            pais: "",
            bandera: "",
            correo: ""
        },
        alerta: {
            open: true,
            contenido: "Has cerrado sesion correctamente",
            tipo: "success"
        }
    })
}
export { EstadoSesion, EstadoAlerta, cerrarAlerta, CrearUsuario, IniciarSesion, EditarUsuario, TraerProblemas, CrearProblemaF, CerrarSesion }