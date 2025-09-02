class PerfilUsuario {
    constructor(id, perfil) {
        this._id = id;
        this._perfil = perfil;
    }

    // Getters
    get getId() {
        return this._id;
    }
    get getPerfil() {
        return this._perfil;
    }

    // Setters
    set setId(id) {
        this._id = id;
    }
    set setPerfil(perfil) {
        this._perfil = perfil;
    }
}

export default PerfilUsuario;