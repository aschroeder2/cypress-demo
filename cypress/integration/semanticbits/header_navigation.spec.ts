/// <reference types="cypress"/>

import { prod } from '../../fixtures/endpoints.json'
import { HeaderPage } from '../../support/pages/main_website/header.page'
import { BasePage } from '../../support/pages/base.page'

describe('Header navigation', () => {

  const header = new HeaderPage()
  const basePage = new BasePage()

  beforeEach(() => {
    cy.visit(prod.semanticbits_home)
  })

  it('User can navigate to the Contact page for SemanticBits contact information', () => {
    header.clickMainNavItem('Contact')

    basePage.getTopHeaderElem().should('contain.text', 'Contact Us')
  })

  it('User can navigate to the Software Development page to see available services', () => {
    header.hoverHeaderMainNavItem('Expertise')

    header.mainNavElem('Expertise').should('have.class', 'sfHover')

    header.clickSubMenuItem('Software Development')

    basePage.getTopHeaderElem().should('contain.text', 'Software Development')
  })
})
