import "./SignUp.module.css";

function SignUp() {
  return (
    <div className="SingUp">
      <h1>SingUp</h1>
      <form action="">
        <div className="OrgInputNome">
          <label>
            nome
            <input type="text" name="InputNome" id="InputNome" />
          </label>
        </div>
        <div className="OrgInputEmail">
          <label>
            Email
            <input type="email" name="InputEmail" id="InputEmail" />
          </label>
        </div>
        <div className="OrgInputTelefone">
          <label>
            Telefone
            <input type="number" name="InputTelefone" id="InputTelefone" />
          </label>
        </div>
        <div className="OrgInputSenha">
          <label>
            Senha
            <input type="password" name="InputSenha" id="InputSenha" />
          </label>
        </div>
        <div className="OrgComfirmacaoSenha">
          <label>
            Comfirmmação de Senha
            <input
              type="password"
              name="ComfirmacaoSenha"
              id="ComfirmacaoSenha"
            />
          </label>
        </div>
        <div className="OrgButton">
          <button type="submit">confirma</button>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;