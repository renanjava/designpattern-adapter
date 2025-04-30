import { PessoaCsvAdapter } from './pessoaCsvAdapter';

async function main() {
  const repo = new PessoaCsvAdapter('pessoas.csv');
  const pessoas = await repo.listarPessoas();

  pessoas.forEach((pessoa) => {
    console.log(`${pessoa.nome} - ${pessoa.idade} anos - ${pessoa.email}`);
  });
}

main();
