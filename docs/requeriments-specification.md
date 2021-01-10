Nesta se seção, será especificado as funcionalidades do sistema.

## Funcionalidade
Manter Clientes com suas informações básicas.

## Requisitos Funcionais
	-[ ] Busca de cliente por email;
	-[X] Inclusão de cliente;

## Requisitos Não Funcionais
	-[X] Utilizar da api viacep.com.br para buscar endereço pelo CEP;
	-[X] Node (Sequelize ORM);
	-[X] Trabalhamos com o padrão API First, iniciar o desenvolvimento pela documentação swagger;
	-[X] Versionar no github na branch development;

## Regras de Negócio
	-[X] Cliente deve ser único na base (email, e cpf);
	-[X] Cada cliente só pode ter um único endereço;
	-[X] Para salvar o endereço, a api tem que buscar o endereço completo via cep (dados mínimos do endereço: CEP e RUA);
