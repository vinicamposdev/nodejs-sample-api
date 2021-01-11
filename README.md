<h1 align="center">
    API Cadastro de Clientes
</h1>

<h4 align="center">
  Uma API Rest que permite o cadastro de cliente com suas informações básicas.
</h4>
<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/vmo-campos/nodejs-sample-api.svg">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/vmo-campos/nodejs-sample-api.svg">


  <img alt="Repository size" src="https://img.shields.io/github/repo-size/vmo-campos/nodejs-sample-api.svg">
  <a href="https://github.com/vmo-campos/nodejs-sample-api/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/vmo-campos/nodejs-sample-api.svg">
  </a>

  <a href="https://github.com/vmo-campos/nodejs-sample-api/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/vmo-campos/nodejs-sample-api.svg">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/vmo-campos/nodejs-sample-api.svg">
</p>

## Tecnologias Usadas
-  [Node.js](https://nodejs.org/)
-  [Typescript](https://www.typescriptlang.org/) >> Apresenta um suporte a tipagem, além das funcionlidades básicas do Javascript mais recente. Dessa forma força um desenvolvimento mais proativo, diminuindo o risco de possíveis efeitos colaterais
-  [Express](https://expressjs.com/) >> Uma framework simples com a parte de roteamente e middlewares bem potente, possibilitando criar todo tipo de Aplicação Rest, e liberdade para criar uma arquitetura personalizada.
-  [nodemon](https://nodemon.io/) >> Salvar uma instancia do server e recarregála conforme as constantes mudanças do ambiente de desenvolvimento
-  [Docker](https://www.docker.com/docker-community) >> Padronizar a tecnologia a ser utilizada e otimizar a utilização de recursos da mesma (na aplicação em questão foi usada apenas para rodar o banco de dados em ambiente de desenvolvimento)
-  [Sequelize](http://docs.sequelizejs.com/) >> ORM perfeito para integração com bancos relacionais
-  [PostgreSQL](https://www.postgresql.org/) >> Foi escolhido o PostGres pelo suporte da comunidade, por estar bem estabelicido no mercado e por ser open source
-  [node-postgres](https://www.npmjs.com/package/pg) >> Driver de conexão do Postgres com o NodeJS
-  [celebrate](https://www.npmjs.com/package/celebrate) >> É uma implementação direta da Sideway/Joi, a qual é uma das mais populares no mercado. A lib celebrate é interessante nesse caso, porque aprensenta uma integração perfeita com o Express, sendo middleware nas rotas
-  [viacep](http://viacep.com.br/) >> Webservice para consultar Códigos de Endereçamento Postal. Apresenta alto desempenho e é gratuito.
-  [DotEnv](https://www.npmjs.com/package/dotenv) >> criar variáveis de ambiente para guardar dados mais sensíveis ou que possam variar de ambiente mesmo
-  [VS Code][vc] with [ESLint][vceslint] >> Facilitar na velocidade e qualidade de desenvolvimento. Aprensenta bastante suporte para projetos Typescript.


## :computer: Como rodar

### Instalação
Precisa do nodejs instalado, recomenda-se a versão 12.x. O tutorial do site oficial pode ser encontrado [aqui](https://nodejs.org/en/download/package-manager/).
É necessário o PostgresSQL também, onde a instalação pode ser enctontrada [aqui](https://www.postgresql.org/docs/9.3/tutorial-install.html).

[Alternativa:] Se a instalação do PostgresSql não for possível, pode usar o docker para rodar um container Postgres (se estiver com docker instalado na máquina, o que pode ser visto [aqui](https://docs.docker.com/engine/install)). E para rodar o container, basta executar (verifique se a porta 5432 está liberada):
```shell
docker run --name ps-database -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
docker start ps-database
```

Após isso rode o comando para instalar as dependencias necessárias ao projeto:
```shell
npm install
```
Para finalizar a configuração do Postgres é necessário colocar as credenciais no arquivo '.env' (existe um exemplo no arquivo .env.example)

Na variável 'DATABASE_URI', com o formato padrão:
```shell
<driver>://<user>:<password>@<host>:<port>/<database_name>
```
### Testes

Para executar os testes dos services, execute o comando:
```shell
npm run test
```
### Execução

Para executar o servidor no ambiente de desenvolvimento, execute o comando:
```shell
npm run dev:server
```

Para executar o servidor no ambiente de produção, execute os comandos:
```shell
npm run build
npm run prod:server
```

Para cadastrar cliente acesse o endpoint:
```shell
curl http://localhost:3333/clients
```

Para consultar um clientes
```shell
curl -X POST http://localhost:3333/clients
```

## Demonstração

Open Api Mock server:

```shell
https://virtserver.swaggerhub.com/vmo-campos/nodejs-sample-api/1.0.0
```

Deployed Heroku endpoint:
```shell
https://nodejs-sample-api-vmo-campos.herokuapp.com/
```

## Dificuldades encontradas
A linguagem escolhida tem poucos recursos relacionados a integração com o ORM escolhido. Dessa forma foi necessário uma pesquisa em diversos forúns e documentações, sobre possíveis saídas para acoplar essas tecnologias.

## Objetivos Alcançados
Um código bem desacoplado, com o domínio bem definido e uso de Validadores, assim como a própria tipagem forte da linguagem de programação escolhida. É um código que tem uma facilidade de escalabilidade em questões de desenvolvimento de novas funcionalidades.
### Futuras Melhorias

Desacoplar o sequelize da estrutura do projeto, utilizando Desing Patterns mais avançados
Desacoplar o validador de requisição celebrate do projeto, usando a mesma metodologia de Bridge Pattern com Test Double
Melhorar a parte de migrations, atualmente existem dois models para realização da tarefas de banco, sendo que um é exclusivo para rodar migrations
Melhorar o log da aplicação, adicionar algum serviço de monitoramento que melhore a observabilidade da aplicação
Desacoplar melhor a Api de emails para que seja possível adicionar mais facilmente novos providers de cep
Resolver o bug do MockJest que ficou quando se usa o toJSON() da entidade do Sequelize.
Usar o docker-compose para padronizar a virtualização do ambiente e facilitar na instalação, execução e deploy da aplicação

## :memo: License
This project is under the MIT license. See the [LICENSE](https://github.com/vmoc-campos/nodejs-sample-api/blob/master/LICENSE) for more information.

---

Made with ♥ by Vinícius Campos :wave: [Get in touch!](https://www.linkedin.com/in/vmocampos/)

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
