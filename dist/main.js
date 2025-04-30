"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pessoaCsvAdapter_1 = require("./pessoaCsvAdapter");
async function main() {
    const repo = new pessoaCsvAdapter_1.PessoaCsvAdapter('pessoas.csv');
    const pessoas = await repo.listarPessoas();
    pessoas.forEach((pessoa) => {
        console.log(`${pessoa.nome} - ${pessoa.idade} anos - ${pessoa.email}`);
    });
}
main();
