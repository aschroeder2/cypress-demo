import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript"

export class JobApplicationPage {

  typeContactInformation(fullName: string, email: string): void {
    cy.get('[name=name]').type(fullName)
    cy.get('[name=email]').type(email)
  }

  allCheckboxesCheckFirst(): void {
    cy.get('[data-qa=checkboxes]').each(($el) => {
      cy.wrap($el).children('li').first().children('label').children('input').check()
    })
  }

  answerAllCustomQuestions(genericResponse: string): void {
    cy.get('textarea.card-field-input').each(($el) => {
      cy.wrap($el).type(genericResponse)
    })
  }

  clickSubmit(): void {
    cy.get('[data-qa=btn-submit]').click()
  }

  recaptchaErrorMessageElem(): Cypress.Chainable {
    return cy.contains('Please verify that you are not a robot')
  }
}
