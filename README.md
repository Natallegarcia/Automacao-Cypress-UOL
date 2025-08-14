# Captura de Data de Atualização no UOL

Este projeto é um teste automatizado utilizando **Cypress** para capturar a data de atualização de uma página específica do UOL. Ele demonstra técnicas avançadas de automação, incluindo scroll recursivo e execução em múltiplas origens com `cy.origin`.

---

## Descrição

O teste realiza o seguinte fluxo:

1. Acessa o site [UOL](https://uol.com.br) e espera apenas o carregamento básico do DOM.
2. Localiza o link de normas de segurança e privacidade e abre na mesma aba.
3. Utiliza `cy.origin` para executar comandos no domínio `sobreuol.noticias.uol.com.br`.
4. Faz scroll na página até encontrar um elemento `<strong>` contendo a palavra **"Atualização"**.
5. Captura a data e gera um **screenshot** do elemento pai, além de exibir a data nos logs do Cypress.

---

## Tecnologias

- [Cypress](https://www.cypress.io/)
- JavaScript (ES6)

---

## Como rodar

1. Clone o repositório e acesse a pasta do projeto:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
Instale as dependências:
npm install
npx cypress open
Execute o teste uol-termos.cy.js.


