const EmailSetupInstructions = () => {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
      <h3 className="text-lg font-bold mb-4 font-subtitle text-blue-800">
        ⚙️ Configuração de E-mail Necessária
      </h3>
      <div className="text-sm font-body text-blue-700 space-y-3">
        <p>
          <strong>Para que o formulário funcione corretamente, configure as seguintes variáveis de ambiente:</strong>
        </p>
        <div className="bg-white p-4 rounded border">
          <p><code>EMAIL_USER</code>: Já configurado como estudiomecurio@gmail.com</p>
          <p><code>EMAIL_PASS</code>: Precisa ser configurado com uma "Senha de App" do Gmail</p>
        </div>
        <div>
          <p><strong>Como obter uma Senha de App do Gmail:</strong></p>
          <ol className="list-decimal list-inside space-y-1 ml-4">
            <li>Acesse as configurações da sua Conta Google</li>
            <li>Vá em Segurança → Verificação em duas etapas</li>
            <li>Clique em "Senhas de app"</li>
            <li>Gere uma nova senha para "E-mail"</li>
            <li>Use essa senha na variável EMAIL_PASS</li>
          </ol>
        </div>
        <p className="text-blue-600">
          <strong>Nota:</strong> O formulário está funcional, mas os e-mails só serão enviados após a configuração correta da senha.
        </p>
      </div>
    </div>
  );
};

export default EmailSetupInstructions;
