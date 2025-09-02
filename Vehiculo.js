class vehiculo {
    constructor( id, placa, color, modelo, marca, tipo, usuario) {
        this._id = id;
        this._placa = placa; 
        this._color = color; 
        this._modelo = modelo; 
        this._marca = marca; 
        this._tipo = tipo; 
        this._usuario = usuario; 
    }
    get getId() {
        return this._id;
    }
    get getPlaca() {
        return this._placa;
    }
    get getColor() {
        return this._color;
    }
    get getModelo() {
        return this._modelo;
    }
    get getMarca() {
        return this._marca;
    }
    get getTipo() {
        return this._tipo;
    }
    get getUsuario() {
        return this._usuario;
    }
    set setId(numero) {
        this._id = numero;
    }
    set setPlaca(texto) {
        this._placa = texto;
    }
    set setColor(texto) {
        this._color = texto;
    }
    set setModelo(texto) {
        this._modelo = texto;
    }
    set setMarca(texto) {
        this._marca = texto;
    }
    set setTipo(texto) {
        this._tipo = texto;
    }
    set setUsuario(numero) {
        this._usuario = numero;
    }
}

export default vehiculo;