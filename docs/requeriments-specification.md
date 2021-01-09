Nesta se seção, será especificado as funcionalidades do sistema.

## Funcionalidade
Manter Clientes com suas informações básicas.

## Requisitos Funcionais
	-[ ] Busca de cliente por email;
	-[ ] Inclusão de cliente;

## Requisitos Não Funcionais
	-[ ] Utilizar da api viacep.com.br para buscar endereço pelo CEP;
	-[ ] Node (Sequelize ORM);
	-[ ] Trabalhamos com o padrão API First, iniciar o desenvolvimento pela documentação swagger;
	-[ ] Versionar no github na branch development;

## Regras de Negócio
	-[ ] Cliente deve ser único na base (email, e cpf);
	-[ ] Cada cliente só pode ter um único endereço;
	-[ ] Para salvar o endereço, a api tem que buscar o endereço completo via cep (dados mínimos do endereço: CEP e RUA);