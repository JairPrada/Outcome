import { applyMiddleware, createStore } from "redux";
import { CERRAR_ALERTA, CREAR_USUARIO, ESTADO_SESION, MENSAJE_ALERTA, INICIAR_SESION, EDITAR_USUARIO, CREAR_PROBLEMA, CERRAR_SESION } from "../actions/actions";
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk";
const initialStore = {
    usuario: {
        id: "",
        nombre: "",
        pais: "",
        bandera: "",
        correo: ""
    },
    problema: [],
    sesion: false,
    alerta: {
        open: false,
        contenido: "",
        tipo: ""
    }
}
const ReducerRaiz = (state = initialStore, action) => {
    switch (action.type) {
        case ESTADO_SESION:
            return {
                ...state,
                data: action.data,
                usuario: action.usuario,
                sesion: action.sesion
            }
        case MENSAJE_ALERTA:
            return {
                ...state,
                alerta: {
                    open: action.open,
                    contenido: action.contenido,
                    tipo: action.tipo
                }
            }
        case CERRAR_ALERTA:
            return {
                ...state,
                alerta: {
                    open: false,
                    contenido: "",
                    tipo: ""
                }
            }
        case CREAR_USUARIO:
            return {
                ...state,
                alerta: action.alerta
            }
        case EDITAR_USUARIO:
            return {
                ...state,
                alerta: action.alerta,
                usuario: action.usuario
            }
        case INICIAR_SESION:
            return {
                ...state,
                usuario: action.usuario,
                alerta: action.alerta,
                sesion: action.sesion
            }
        case CREAR_PROBLEMA:
            return {
                ...state,
                alerta: action.alerta,
            }
        case CERRAR_SESION:
            return {
                ...state,
                usuario: action.usuario,
                alerta: action.alerta,
                sesion: false
            }
        default:
            return state;
    }
}

export default createStore(ReducerRaiz, composeWithDevTools(applyMiddleware(thunk)))