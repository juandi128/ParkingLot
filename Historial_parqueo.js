class Historial_parqueo {
    constructor(celda, vehiculo, fecha_hora) {
        this._celda = celda;
        this._vehiculo = vehiculo; 
        this._fecha_hora = fecha_hora; 
    }
    get getCelda() {
        return this._celda;
    }
    get getVehiculo() {
        return this._vehiculo;
    }
    get getFecha_hora() {
        return this._fecha_hora;
    }
    set setCelda(numero) {
        this._celda = numero;
    }
    set setVehiculo(numero) {
        this._vehiculo = numero;
    }
    set setFecha_hora(datetime) {
        this._fecha_hora = datetime;
    }
}

export default Historial_parqueo;