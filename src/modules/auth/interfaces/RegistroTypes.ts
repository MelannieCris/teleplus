export type LanguageType = "es" | "en";

export interface FormData {
  nombre: string;
  apellido: string;
  telefono: string;
  correo: string;
  contrasena: string;
  confirmar: string;
}

export interface TextosRegistro {
  welcome: string;
  modalTitle: string;
  modalBody: string;
  modalBtn: string;
  subtitle: string;
  badge: string;
  name: string;
  lastname: string;
  phone: string;
  email: string;
  pass: string;
  confirm: string;
  btn: string;
  link: string;
  errorName: string;
  errorLastname: string;
  errorPhone: string;
  errorEmail: string;
  errorInvalidEmail: string;
  errorPass: string;
  errorMatch: string;
  errorBackend: string;
}
