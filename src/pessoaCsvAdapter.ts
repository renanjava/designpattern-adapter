import * as fs from 'fs/promises';
import { Pessoa } from './pessoa';
import { RepositorioDePessoas } from './repositorioDePessoas';

export class PessoaCsvAdapter implements RepositorioDePessoas {
  constructor(private caminhoCsv: string) {}

  async listarPessoas(): Promise<Pessoa[]> {
    const data = await fs.readFile(this.caminhoCsv, 'utf-8');
    const linhas = data.trim().split('\n');

    // Remove o cabeçalho
    const dados = linhas.slice(1);

    const pessoas: Pessoa[] = dados.map((linha) => {
      const [nome, idade, email] = linha.split(',');
      return new Pessoa(nome.trim(), parseInt(idade.trim()), email.trim());
    });

    return pessoas;
  }
}
