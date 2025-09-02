class Acceso_salidas {
    constructor( id, movimiento, fecha_hora, puerta, tiempo_estadia, vehiculo) {
        this._id = id;
        this._movimiento = movimiento; 
        this._fecha_hora = fecha_hora; 
        this._puerta = puerta; 
        this._tiempo_estadia = tiempo_estadia; 
        this._vehiculo = vehiculo; 
    }
    get getId() {
        return this._id;
    }
    get getMovimiento() {
        return this._movimiento;
    }
    get getFecha_hora() {
        return this._fecha_hora;
    }
    get getPuerta() {
        return this._puerta;
    }
    get getTiempo_estadia() {
        return this._tiempo_estadia;
    }
    get getVehiculo() {
        return this._vehiculo;
    }
    set setId(numero) {
        this._id = numero;
    }
    set setMovimiento(texto) {
        this._movimiento = texto;
    }
    set setFecha_hora(datetime) {
        this._fecha_hora = datetime;
    }
    set setPuerta(texto) {
        this._puerta = texto;
    }
    set setTiempo_estadia(numero) {
        this._tiempo_estadia = numero;
    }
    set setVehiculo(texto) {
        this._vehiculo = texto;
    }
}

export default Acceso_salidas;