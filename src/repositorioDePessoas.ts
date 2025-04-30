import { Pessoa } from './pessoa';

export interface RepositorioDePessoas {
  listarPessoas(): Promise<Pessoa[]>;
}
