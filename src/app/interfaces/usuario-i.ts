export interface UsuarioI {
    //usuario:string;
    email:string;
    telefono:string;
    //dni:string;
    password:string;
    confirmarPassword:string;
}


export interface UsuarioUpdate {
    _id: string;
    email:string;
    telefono:string;
    password:string;
    confirmarPassword:string;
    fotoPath: string;
}
