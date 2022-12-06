import { Usuario } from "./usuario.model";

export interface Imc {
  id?: number;
  nomeAId: number;
  nomeA?: Usuario;
  nascimentoAId?: Usuario;
  altura?: number;
  peso?: number;
  calculoImc: number;
  classificacao: string;
  criadoEm: string;
}