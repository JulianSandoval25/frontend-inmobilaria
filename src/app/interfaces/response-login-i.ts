export interface ResponseLoginI {
    accessToken:string,
    /* user:{
        id:number,
        mail:string,
    } */
    message: string,
    error:string

}
//asegurarse que la interfaz tenga el mismo formato que regresa el json de la api