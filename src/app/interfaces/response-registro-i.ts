export interface ResponseRegistroI {
    accessToken:string,
    user:{
        id:number,
        mail:string,
        usuario:string,
        telefono:string,
        dni:string
    }
}