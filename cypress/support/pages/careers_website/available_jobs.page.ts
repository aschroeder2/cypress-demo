export class AvailableJobsPage {

  clickFirstJob() {
    cy.get('[data-qa="posting-name"]').first().click()
  }

  clickApplyForJob() {
    cy.contains('Apply for this job').click()
  }
}
