// frontend/src/components/SignUp.js
import React from 'react';
import axios from 'axios';
import "./SignUp.module.css";

function SignUp() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      nome: formData.get('InputNome'),
      email: formData.get('InputEmail'),
      telefone: formData.get('InputTelefone'),
      senha: formData.get('InputSenha'),
      confirmacaoSenha: formData.get('ConfirmacaoSenha')
    };
    
    try {
      const response = await axios.post('/api/signup', data);
      console.log(response.data);
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
    }
  };

  return (
    <div className="SignUp">
      <h1>SignUp</h1>
      <form  onSubmit={handleSubmit}>
        <div className="OrgInputNome">
          <label htmlFor="InputNome">
            Nome
            <input type="text" name="InputNome" id="InputNome" />
          </label>
        </div>
        <div className="OrgInputEmail">
          <label htmlFor="InputEmail">
            Email
            <input type="email" name="InputEmail" id="InputEmail" />
          </label>
        </div>
        <div className="OrgInputTelefone">
          <label htmlFor="InputTelefone">
            Telefone
            <input type="tel" name="InputTelefone" id="InputTelefone" />
          </label>
        </div>
        <div className="OrgInputSenha">
          <label htmlFor="InputSenha">
            Senha
            <input type="password" name="InputSenha" id="InputSenha" />
          </label>
        </div>
        <div className="OrgConfirmacaoSenha">
          <label htmlFor="ConfirmacaoSenha">
            Confirmação de Senha
            <input
              type="password"
              name="ConfirmacaoSenha"
              id="ConfirmacaoSenha"
            />
          </label>
        </div>
        <div className="OrgButtonSubmit">
          <button type="submit">Confirmar</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
