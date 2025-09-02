class Pico_placa {
    constructor( id, tipo_vehiculo, numero, dia ) {
        this._id = id;
        this._tipo_vehiculo = tipo_vehiculo; 
        this._numrto = numero; 
        this._dia = dia; 
    }
    get getId() {
        return this._id;
    }
    get getTipo_vehiculo() {
        return this._tipo_vehiculo;
    }
    get getNumrto() {
        return this._numero;
    }
    get getDia() {
        return this._dia;
    }
    set setId(numero) {
        this._id = numero;
    }
    set setTipo_vehiculo(texto) {
        this._tipo_vehiculo = texto;
    }
    set setNumero(texto) {
        this._numero = texto;
    }
    set setDia(texto) {
        this._dia = texto;
    }
}

export default Pico_placa;