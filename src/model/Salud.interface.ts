import { Usuario } from "./Usuario.interface";

export interface Salud {
  id_salud: number;
  id_usuario_frg: Usuario;
  peso: number;
  altura: number;
  imc: number;
  sexo: string;
}
