/// <reference types="cypress"/>

import { prod } from '../../fixtures/endpoints.json'
import { HeaderPage } from '../../support/pages/header.page'
import { SoftwareDevPage } from '../../support/pages/software_dev.page'

describe('Header navigation', () => {

  const header = new HeaderPage()
  const softwareDevPage = new SoftwareDevPage()

  beforeEach(() => {
    cy.visit(prod.semanticbits_home)
  })

  it('User can navigate to the Software Development page to see available services', () => {
    header.hoverHeaderMainNavItem('Expertise')
    header.getHeaderNavItemElem('Expertise').should('have.class', 'sfHover')
    header.clickSubMenuItem('Software Development')
    softwareDevPage.getTopHeaderElem().should('contain.text', 'Software Development')
  })
})
