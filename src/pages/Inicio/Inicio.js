import React, { Component } from 'react';
import './styles.css';
import { Button } from 'react-bootstrap';
import background from '../../img/background.png'
import aluno from '../../img/aluno.jpeg'
import instrutor from '../../img/instrutor.jpeg'


class Inicio extends Component {
  render() {
    var divStyle = {
      textAlign: "center",
      padding: 0,
      backgroundSize: "cover",
      backgroundImage: "url(" + background + ")",
      minHeight: window.innerHeight - 50,
      flexDirection: "column"
    };

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="container-fluid d-flex justify-content-center align-items-center" style={divStyle}>
            <h1 className="text-light text-uppercase text-bold mt-auto">E se conseguir um emprego <br />fosse mais fácil?</h1>
            <h6 className="text-light">Com o Aprova Já, isso pode ser uma realidade!</h6>
            <div>
              <Button href="/cadastro-aluno" size="lg" className="mr-3" variant="success">Seja um aluno</Button>
              <Button href="/cadastro-instrutor" size="lg" variant="secondary">Seja um instrutor</Button>
            </div>
            <a href="#sobre" style={{ cursor: "pointer"}}  className="mt-auto text-light  " >
              <h6 className="mt-auto">Saiba mais</h6>
              <i class="fas fa-arrow-down fa-2x mb-5"></i>
            </a>

          </div>

        </div>
        <hr></hr>
        
        <div className="row py-4 mx-5 align-items-center justify-content-center " id="sobre" >
         <div className="col"> <img src={aluno}></img></div>
          <div className="col align-items-center justify-content-center ">

            <h4>O Aprova Já é a ferramente perfeita pra você que está com dificuldade em entrar no mercado de trabalho
              ou em alguma nova área.<br></br>
              No Aprova Já você possui uma vasta gama de profissionais dos mais variados setores os quais
              irão te auxiliar com dicas, sugestões, aulas, entre várias outras coisas que cada profissional pode lhe ofertar.
              <br></br>Ta esperando o quê? Cadastra-se agora e venha conhecer mais de perto uma das melhores plataformas do Brasil!
            </h4>

          </div>

        </div>

        <hr></hr>


        <div className="row py-4 mx-5 align-items-center justify-content-center " id="sobre" >
         <div className="col"> <img src={instrutor}></img></div>
          <div className="col align-items-center justify-content-center ">

            <h4>Pra você que trabalha em alguma área, ou profissional de RH, ou qualquer outra coisa relacionada
              ao mercado de trabalho, o Aprova Já está procurando por você!<br></br>
              Dê aulas, dicas, monitoriais ou afins para novos ingressantes no mercado e com isso ganhe uma renda extra, 
              no Aprova Já isso é bem facil, basta cadastrar-se como Instrutor, insira suas qualificações e já começar a dar aulas!
            </h4>

          </div>

        </div>
      </div>
    );
  }
}

export default Inicio;
