# Tags&Compliments

<p>
  
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/leandrolid/tags-n-compliments?color=6E40C9&style=flat-square">
  <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/leandrolid/tags-n-compliments?color=6E40C9&style=flat-square">
  <a href="https://github.com/leandrolid/tags-n-compliments/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/leandrolid/tags-n-compliments?color=6E40C9&style=flat-square">
  </a>
</p>

## Preview

<a title="Devcastr" href="/" >Clique aqui </a> para ter acesso a um  preview do App. <br>

## Sobre o Tags&Compliments

O Tags&Compliments é uma aplicação para que as pessoas possam enviar elogios a quem quiserem utilizando tags e mensagens.

A API foi feita em Node com Express, além disso foi utilizado TypeScript para escrita do código, TypeORM para fazer a integração da API com o banco de dados SQL que é o SQLite.


## Tecnologias

Tecnologias e ferramentas utilizadas no desenvolvimento do projeto:

- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeORM](https://typeorm.io/#/)
- [TypeScript](https://www.typescriptlang.org/)
- [VS Code](https://code.visualstudio.com/)

<br>

## Instalação e uso

```bash
# Abra um terminal e copie este repositório com o comando
git clone git@github.com:leandrolid/tags-n-compliments.git
# ou use a opção de download.

# Entre na pasta com 
cd tags-n-compliments

# Instale as dependências
yarn install

# Rodar as migrations do banco de dados
yarn typeorm migration:run

# Crie sua chave secreta nas variáveis ambiente
echo "SALT=test" > .env.local

# Rode o aplicação
yarn dev

# Acesse http://localhost:3000 no seu navagador.
```

<br>

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](/LICENSE) para mais detalhes.

---

Feito com :purple_heart: by [Leandro Liduvino](https://github.com/leandrolid)
