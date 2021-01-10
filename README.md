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

## :computer: Como rodar

### Instalação
Precisa do nodejs instalado, recomenda-se a versão 12.x. O tutorial do site oficial pode ser encontrado [aqui](https://nodejs.org/en/download/package-manager/).
Após isso rode o comando para instalar as dependencias necessárias ao projeto:
```shell
npm install
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
## :memo: License
This project is under the MIT license. See the [LICENSE](https://github.com/vmoc-campos/nodejs-sample-api/blob/master/LICENSE) for more information.

---

Made with ♥ by Vinícius Campos :wave: [Get in touch!](https://www.linkedin.com/in/vmocampos/)

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
