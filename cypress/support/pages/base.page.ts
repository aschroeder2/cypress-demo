export class BasePage {

  getTopHeaderElem(): Cypress.Chainable<JQuery<HTMLElement>> {

    return cy.get('h1.top-heading');
  }
}
