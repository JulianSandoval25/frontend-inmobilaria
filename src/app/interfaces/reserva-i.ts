export interface Usuario {
  _id: string;
  email: string;
  password: string;
  telefono: string;
  foto: string;
  fotoPath: string;
  role: string;
  departamentosPublicados: any[];
  createdAt: string;
  updatedAt: string;
}

export interface Propiedad {
  _id: string;
  propietario: string;
  fotos: string[];
  disponible: string;
  calle: string;
  provincia: string;
  codigoPostal: string;
  pais: string;
  fechaPublicacion:Date;
  createdAt: string;
  updatedAt: string;
}

export interface Reserva {
  _id: string;
  usuario: Usuario;
  propiedad:Propiedad;
  fecha: Date;
  hora:string;
  confirmada:boolean;
  createdAt: string;
  updatedAt: string;
}