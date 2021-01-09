Funcionalidade: Cadastro de clientes

Quero que o sistema me adicione clientes com seus os dados

Cenário: Cadastro de cliente

Dado que o administrador do sistema deseja cadastrar um cliente
Quando informar o nome
E informar o e-mail válido
E informar o cpf válido
E informar apenas um endereço válido (CEP e Rua no mínimo)
Então o cliente é cadastrado no sistema

Dado que o administrador do sistema deseja cadastrar um cliente
Quando informar o dados do cliente (nome, email, cpf e endereço)
Mas informar o e-mail ou um cpf de um cliente já cadastrado
Então o sistema deve exibir uma mensagem de erro

Dado que o administrador do sistema deseja cadastrar um cliente
Quando informar os dados do cliente (nome, email, cpf ou endereço)
Mas deixar de informar todos os dados ou informar algum deles em um formato inválido
Então o sistema deve exibir uma mensagem de erro

Feature: Buscar Cliente

Como um cliente offline
Quero que o sistema me mostre minhas últimas compras gravadas
Para eu poder ver minhas despesas mesmo sem ter internet

Funcionalidade: Busca de clientes

Quero que o sistema me retorne as informações de um cliente 
quando eu informo o email dele

Cenário: Obter dados de cliente

Dado que o um usuário do sistema deseja procurar por um cliente
Quando informar o email
Então é retornado as informações desse cliente

Dado que o um usuário do sistema deseja procurar por um cliente
Quando informar um email  inválido
Mas o email é inválido ou nenhum cliente cadastrado possui o email
Então o sistema deve exibir uma mensagem de erro