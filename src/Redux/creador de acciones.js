import { ESTADO_SESION,MENSAJE_ALERTA,CERRAR_ALERTA } from "./actions";

const EstadoSesion = usuario => (
    {
        type: ESTADO_SESION,
        id: usuario.uid,
        nombre: usuario.displayName,
        foto: usuario.photoURL,
        correo: usuario.email,
        usuario:usuario
    }
)
const EstadoAlerta = mensaje => (
    {
        type:MENSAJE_ALERTA,
        open:mensaje.open,
        contenido:mensaje.contenido,
        tipo:mensaje.tipo
    }
)
const cerrarAlerta=()=>(
    {
        type:CERRAR_ALERTA,
    }
)

export { EstadoSesion,EstadoAlerta,cerrarAlerta }