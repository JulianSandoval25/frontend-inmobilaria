export interface Propietario {
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

export interface Departamento {
  _id: string;
  propietario: Propietario;
  fotos: string[];
  disponible: boolean;
  tipo: string;
  calle: string;
  ciudad: string;
  provincia: string;
  codigoPostal: string;
  pais: string;
  fechaPublicacion: string;
  createdAt: string;
  updatedAt: string;
}

export interface DepartamentoCreate {
  _id: string;
  propietario: string;
  fotos: string[];
  disponible: boolean;
  tipo: string;
  calle: string;
  ciudad: string;
  provincia: string;
  codigoPostal: string;
  pais: string;
  fechaPublicacion: string;
  createdAt: string;
  updatedAt: string;
}