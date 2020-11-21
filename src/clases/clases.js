export class Usuario {
    constructor(nombre, apellido, pais, bandera, correo,contraseña) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
        this.bandera = bandera;
        this.correo = correo;
        this.contraseña=contraseña
    }
}

export class Alerta {
    constructor(open, contenido, tipo) {
        this.open = open;
        this.contenido = contenido;
        this.tipo = tipo;
    }
}

