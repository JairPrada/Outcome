import { createStore } from "redux";
import { CERRAR_ALERTA, ESTADO_SESION, MENSAJE_ALERTA } from "./actions";


const initialStore = {
    id: "123456789",
    nombre: "Nombre_defecto",
    foto: "Foto_defecto",
    correo: "Correo_defecto",
    usuario: {},
    open:false,
    contenido:"",
    tipo:""
}

const ReducerRaiz = (state = initialStore, action) => {
    console.log(action)
    if (action.type === ESTADO_SESION) {
        return {
            ...state,
            id: action.id,
            nombre: action.nombre,
            foto: action.foto,
            correo: action.correo,
            usuario: action.usuario
        }
    }
    if (action.type === MENSAJE_ALERTA) {
        return {
            ...state,
            open:action.open,
            contenido:action.contenido,
            tipo:action.tipo
        }
    }
    if (action.type===CERRAR_ALERTA){
        return{
            ...state,
            open:false
            
        }
    }
    return state;
}

export default createStore(ReducerRaiz)