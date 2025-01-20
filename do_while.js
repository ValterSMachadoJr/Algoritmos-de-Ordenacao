let anoNascimento;
do {
    anoNascimento = parseInt(prompt("Digite o ano de nascimento: "), 10);
    } while (anoNascimento > 2024);

        const idadeEm2024 = 2024 - anoNascimento;
        document.write(`Você terá ${idadeEm2024} anos em 2024`);