# Aprova Já

<h4 align="center">
  ☕ Aplicativo web completo que visa auxiliar pessoas que buscam um bom desempenho em suas entrevistas de emprego.
</h4>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/brendonhc/embaralhador.svg">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/brendonhc/embaralhador.svg">
  
  <a href="https://github.com/brendonhc/embaralhador/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/brendonhc/embaralhador.svg">
  </a>

  <a href="https://github.com/brendonhc/embaralhador/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/brendonhc/embaralhador.svg">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

<p align="center">
  <a href="#motivação">Motivação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#como-usar">Como Usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#implementação">Implementação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rodar-localmente">Rodar Localmente</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#licença">Licença</a>
</p>

## Motivação

Fruto de um desafio proposto no [Monitora Summer 2019](http://monitorasummer.com.br/), desenvolvemos (eu [Brendon Hudson](https://github.com/brendonhc) e o [Leonardo Daher](https://github.com/leodaher)) uma plataforma web completa onde pessoas que buscam se preparar para entrevistas de emprego ou testes de empresas conseguem encontrar pessoas especialistas nesse assunto para lhes auxiliar nessa jornada. É possível então tanto buscar mentoria quanto oferecer mentoria para esse fim na plataforma.

## Como Usar

É muito simples:

- Primeiro, acesse [o aplicativo web](https://aprovaja-monitorasummer.herokuapp.com/) do Aprova Já.
- Se identifique como *aluno* ou *mentor* fazendo seu cadastro, ou se já possui, login.
- Então é só usar, solicitando uma nova mentoria ou se oferecendo para mentorar em alguma área específica.

## Implementação

A implementação foi feita as tecnologias mais quentes do mercado baseadas em [*JavaScript*](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript), no frontend utilizamos a biblioteca [*React JS*](https://pt-br.reactjs.org/) estilizado com [*React Bootstrap*](https://react-bootstrap.github.io/) para um app bonito e responsivo, no backend que está versionado em [outro repositório](https://github.com/brendonhc/aprova_ja/) utilizamos a tecnologia [Node JS]() para o servidor e rotas, e para a base de dados, a [Cloud Firestore](https://firebase.google.com/docs/firestore/) base não-relacional do [Firebase](https://firebase.google.com/).

## Rodar Localmente

É possível rodar localmente fazendo o clone do repositório e executando o simples comando `yarn && yarn start`em um terminal (certifique-se de ter o [node js](https://nodejs.org/) e o [yarn](https://yarnpkg.com/) instalado em sua máquina. Será instalada as dependências necessárias na pasta do projeto e subirá a aplicação em desenvolvimento localmente para uma porta disponível em sua máquina.

## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
