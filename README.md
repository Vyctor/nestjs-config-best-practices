# Melhores práticas para uso de variáveis de ambiente com nestjs

## O que foi desenvolvido

1. Criação de [módulo](./src/app-config/app-config.module.ts) para configurações da aplicação, injetando o ConfigModule do Nestjs e configurando a validação dos valores passados em variáveis de ambiente.
2. Criação de um [service](./src/app-config/environment.service.ts) para environment que retorna as variáveis já tipadas

## Como executar?

1. Execute o comandos npm install utilizando o node na versão 20.
2. Preencha as variáveis de ambiente em um arquivo .env conforme o [.env.example](./.env.example)
3. Execute o projeto com o comando npm run start:dev

### Referências

[Documentação Oficial](https://docs.nestjs.com/techniques/configuration)

[PhillCode](https://www.youtube.com/watch?v=U0F4_NEkZ3k)
