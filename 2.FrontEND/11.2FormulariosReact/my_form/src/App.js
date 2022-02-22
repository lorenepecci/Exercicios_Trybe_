import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import FormError from './FormError';
import FormDataDisplay from './FormDataDisplay';

/* Crie um <fieldset> para os dados pessoais a seguir:
----Nome - Texto Limite de 40 caracteres Campo obrigatório
Todos os caracteres devem ser transformados para UPPER CASE assim que forem digitados.
----Email - Texto Limite de 50 caracteres Campo obrigatório
----CPF - Texto Limite de 11 caracteres Campo obrigatório
----Endereço - Texto Limite de 200 caracteres
Remover qualquer caracter especial que seja digitado Campo obrigatório
----Cidade - Texto Limite de 28 caracteres
Ao remover o foco desse campo (evento onBlur ), verificar se o nome da cidade começa com números. Caso comece, limpar o campo. Campo obrigatório.
----Estado - ComboBox Todos os estados do Brasil Campo obrigatório. Tipo - Radio Button Casa, Apartamento Campo obrigatório.
----2--Crie outro <fieldset> para dados do seu último emprego:
----Resumo do currículo - TextArea Limite de 1000 caracteres Campo obrigatório. 
----Cargo - TextArea Limite de 40 caracteres Quando o mouse passar por cima deste campo (evento onMouseEnter ), exibir um alerta dizendo 'Preencha com cuidado esta informação.'. Exiba essa mensagem apenas uma vez. Campo obrigatório
---- Descrição do cargo - Texto Limite de 500 caracteres Campo obrigatório
----Crie um botão que, ao ser clicado, monta uma <div> com o consolidado dos dados que foram inseridos no formulário.
----Crie um botão Limpar que limpa todos os campos do formulário e a <div> com seu currículo também.
Por último, vá até o formulário que você criou na aula HTML & CSS - Forms e veja as diferenças no código.
 */

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: '',
  addressType: '',
  resume: '',
  role: '',
  roleDescription: '',
  formError: {},
  submitted: false,
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  changeHandler = event => {
    let { name, value } = event.target;

    if (name === 'name') value = value.toUpperCase();
    if (name === 'address') value = this.validateAddress(value);

    this.updateState(name, value);
  }

  onBlurHandler = event => {
    let { name, value } = event.target;

    if (name === 'city') value = value.match(/^\d/) ? '' : value;

    this.updateState(name, value);
  }

  updateState(name, value) {
    this.setState((state) => ({
      [name]: value,
      formError: {
        ...state.formError,
        [name]: this.validateField(name, value)
      }
    }));
  }

  validateAddress = address => address.replace(/[^\w\s]/gi, '')

  handleSubmit = event => {
    event.preventDefault();
  }

  validateField(fieldName, value) {
    switch (fieldName) {
      case 'email':
        const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2})$/i)
        return isValid ? '' : ' is invalid';
      default:
        break;
    }
    return '';
  }

  resetForm = () => { this.setState(INITIAL_STATE) };

  sendForm = () => { this.setState({ submitted: true }) };

  render() {
    const { submitted } = this.state;

    return (
      <main>
        <Form
          sendForm={this.sendForm}
          resetForm={this.resetForm}
          changeHandler={this.changeHandler}
          currentState={ this.state }
          onBlurHandler={ this.onBlurHandler }
        />
        <div className="container">
          <FormError formError={this.state.formError} />
        </div>
        { submitted && <FormDataDisplay currentState={ this.state } /> }
      </main>
    );
  }
}

export default App;
