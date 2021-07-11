describe('Header navigation', () => {
  it('User can navigate to the software development page and see available services', () => {
    cy.visit('https://semanticbits.com/');
    cy.get('#menu-item-6987').trigger('mouseover');
    cy.get('#menu-item-6987').should('have.class', 'sfHover')
  });
});
