# Angular Contador - Exemplo de Binding e Eventos

Este projeto demonstra conceitos básicos do Angular, como:
- Criação de componentes
- Data binding (ligação de dados)
- Event binding (ligação de eventos)
- Uso do `ngModel` para two-way data binding

## Componentes

- **AppComponent**: Componente principal, responsável por exibir o componente `<app-contador>`.
- **ContadorComponent**: Componente que exibe um contador, permite incrementar/decrementar e alterar o nome via input.

## Funcionalidades

- Exibe uma saudação personalizada com o nome digitado.
- Permite alterar o nome em tempo real usando `ngModel`.
- Botões para incrementar e decrementar o valor do contador.

## Como rodar o projeto

1. Instale as dependências:
   ```sh
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```sh
   npm start
   ```
3. Acesse `http://localhost:4200` no navegador.

## Estrutura dos arquivos principais

- `src/app/app.html`: Template principal, inclui `<app-contador>`.
- `src/app/contador/contador.ts`: Lógica do componente contador.
- `src/app/contador/contador.html`: Template do contador.

## Tecnologias
- Angular
- TypeScript

---

Projeto para fins de estudo.
