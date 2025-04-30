# Alunos
<ul>
  <li>Renan Geraldini Leão - RA 22259135-2</li>
  <li>Vlademir Vinhoto Junior - RA 22014195-2</li>
</ul>

# Design Pattern Adapter

Este projeto é um exemplo de implementação do Design Pattern **Adapter** em TypeScript. O objetivo do padrão Adapter é permitir que classes com interfaces incompatíveis trabalhem juntas, adaptando uma interface existente para outra que o cliente espera.

## Estrutura do Projeto

- **`pessoa.ts`**: Define a classe `Pessoa`, que representa uma pessoa com nome, idade e email.
- **`repositorioDePessoas.ts`**: Define a interface `RepositorioDePessoas`, que possui o método `listarPessoas` para listar objetos do tipo `Pessoa`.
- **`pessoaCsvAdapter.ts`**: Implementa a classe `PessoaCsvAdapter`, que adapta um arquivo CSV para a interface `RepositorioDePessoas`.
- **`pessoas.csv`**: Arquivo CSV contendo os dados das pessoas.
- **`main.ts`**: Arquivo principal que utiliza o adapter para listar as pessoas do arquivo CSV.

## Funcionamento do Adapter

O **Adapter** neste projeto é a classe `PessoaCsvAdapter`. Ela implementa a interface `RepositorioDePessoas` e adapta os dados de um arquivo CSV para objetos do tipo `Pessoa`.

### Fluxo de Funcionamento

1. O arquivo `pessoas.csv` contém os dados no formato:
   ```csv
   nome,idade,email
   Ana Silva,29,ana.silva@email.com
   João Santos,34,joao.santos@email.com
   Marina Souza,41,marina.souza@email.com
