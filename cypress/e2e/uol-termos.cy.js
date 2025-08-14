describe('Captura data de atualização no UOL', () => {
  it('Encontra a data descendo a página', () => {
    // Ignora exceções da página
    Cypress.on('uncaught:exception', () => false);

   
    cy.visit('https://uol.com.br', {
      timeout: 60000,
      waitUntil: 'domcontentloaded'
    });

    // Captura link e remove target para abrir na mesma aba
    cy.get('a[href="https://sobreuol.noticias.uol.com.br/normas-de-seguranca-e-privacidade.html"]')
      .invoke('removeAttr', 'target')
      .click({ force: true });

    cy.origin('https://sobreuol.noticias.uol.com.br', () => {
    cy.document().its('readyState').should('not.eq', 'loading');

      // Função recursiva para scroll e busca do elemento
      const scrollUntilFound = () => {
        cy.get('body').then($body => {
          const elem = Array.from($body.find('strong')).find(el =>
            el.textContent.includes('Atualização')
          );

          if (elem) {
            // Data encontrada
            const data = elem.textContent.replace('Atualização:', '').trim();
            cy.log(' Data encontrada: ' + data);

            // Screenshot 
            cy.wrap(elem).parent().screenshot('data-atualizacao');
          } else {
            // Scroll para baixo e continua procurando
            cy.window().then(win => win.scrollBy(0, 500));
            cy.wait(300);
            scrollUntilFound();
          }
        });
      };

      scrollUntilFound();
    });
  });
});
