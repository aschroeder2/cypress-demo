export class HeaderPage {

  hoverHeaderMainNavItem(mainNavItem: string): void {
    cy.contains('ul.sf-menu li', mainNavItem).trigger('mouseover')
  }

  getHeaderNavItemElem(navItem: string): Cypress.Chainable<JQuery<HTMLElement>> {
    
    return cy.get('ul.sf-menu li').contains(navItem).parent()
  }

  clickSubMenuItem(subMenuItem: string): void {
    cy.contains('ul.sub-menu li a', subMenuItem).click()
  }
}

