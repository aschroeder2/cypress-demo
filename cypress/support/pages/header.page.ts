export class HeaderPage {

  hoverHeaderMainNavItem(mainNavItem: string): void {
    this.mainNavElem(mainNavItem).trigger('mouseover')
  }
  
  clickSubMenuItem(subMenuItem: string): void {
    cy.contains('ul.sub-menu li a', subMenuItem).click()
  }
  
  clickMainNavItem(mainNavItem: string): void {
    cy.contains('ul.sf-menu li', mainNavItem).click()
  }

  mainNavElem(mainNavItem: string): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.contains('ul.sf-menu li', mainNavItem)
  }
}

