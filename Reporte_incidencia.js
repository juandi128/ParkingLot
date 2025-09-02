class Reporte_incidencia {
    constructor( vehiculo_id, incidencia_id, fecha_hora ) {
        this._vehiculo_id = vehiculo_id;
        this._incidencia_id = incidencia_id; 
        this._fecha_hora = fecha_hora; 
    }
    get getVehiculo_id() {
        return this._vehiculo_id;
    }
    get getIncidencia_id() {
        return this._incidencia_id;
    }
    get getFecha_hora() {
        return this._fecha_hora;
    }
    set setVehiculo_id(numero) {
        this._vehiculo_id = numero;
    }
    set setIncidencia_id(numero) {
        this._incidencia_id = numero;
    }
    set setFecha_hora(datetime) {
        this._fecha_hora = datetime;
    }
}

export default Reporte_incidencia;