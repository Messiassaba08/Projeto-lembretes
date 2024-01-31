# Teste prático para vaga de desenvolvedor na DTI Digital
Este projeto foi desenvolvido para o teste prático da DTI Digital. O projeto consiste em uma aplicação web para criação de lembretes.

 ## Decisões de projeto
- O backend do projeto de lembretes foi desenvolvido utilizando o framework ASP.NET Core, com C# como linguagem principal. A estrutura do projeto segue padrões RESTful, oferecendo - endpoints para operações CRUD (Create, Read, Update, Delete) sobre os lembretes.
- Escolhi o ASP.NET Core devido à sua versatilidade, desempenho e facilidade de desenvolvimento. Ele permite a criação de serviços web escaláveis e eficientes.
- O frontend foi desenvolvido utilizando ReactJS com Typescript, proporcionando uma experiência de usuário interativa e responsiva.
- Optei por ReactJS com Typescript para garantir um código mais robusto e manutenível, aproveitando a tipagem estática fornecida pelo Typescript.
- A estilização foi mantida simples, sem o uso de bibliotecas como o Styled Components. Isso foi feito para manter o código mais leve e focado na lógica da aplicação.
- Implementei validações para garantir que o usuário insira dados válidos. O feedback é dado por meio de mensagens de erro exibidas quando necessário.
- Mesmo com uma única página, os componentes foram estruturados de maneira modular para facilitar a manutenção e reutilização.
- A comunicação com o backend é realizada por meio de requisições HTTP utilizando o fetch API.
- Ambas as partes do projeto foram estruturadas visando a manutenibilidade, eficiência e uma experiência positiva para o usuário. A separação em frontend e backend permite escalabilidade e flexibilidade no desenvolvimento e evolução do sistema.

## Premissas

Pensando na experiência do usuário foram implementadas algumas medidas para evitar erros e melhorar a experiência:

- Horários são importantes para organização pessoal. Pensando nisso foi implementado um horário junto a data, ambos seguindo ordem de acontecimento(Do mais recente ao mais antigo).
- Foi implementado a opção do usuário editar seu lembrete. Dessa forma, o mesmo não irá precisar apagar e criar um do zero por mudançar no seu calendário ou erros de digitação, por exemplo.
- A data e horário estão limitados somente para o futuro, não sendo possível selecionar datas passadas, aparecendo uma mensagem solicitando que o usuário reveja seu lembrete e corrija o erro.
- Se ocorrer algum erro, como por exemplo, o usuário não preencher algum campo, o usuário é impossibilitado de apertar o botão para gerar ou atualizar o lembrete. Dessa forma, agregando na robustez do código.

# Instruções para rodar o projeto

## Clonar o repositório
```
git clone https://github.com/Messiassaba08/DTI-Lembretes.git
```

## Frontend

### Pré-requisitos:
NodeJS: https://nodejs.org/en/download/

Npm: https://www.npmjs.com/get-npm

### Instalação e execução:
```bash
cd client
npm i
npm run dev
```

### Testes:
```bash
npm run test
```

## Backend

### Pré-requisitos:
SDK .NET 8.0: https://dotnet.microsoft.com/download/dotnet/8.0

### Instalação e execução:
```bash
cd api
dotnet restore
dotnet build
dotnet run
```
