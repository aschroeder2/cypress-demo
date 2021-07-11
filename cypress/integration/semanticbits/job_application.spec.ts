/// <reference types="cypress"/>

import { prod } from '../../fixtures/endpoints.json'
import { AvailableJobsPage } from '../../support/pages/careers_website/available_jobs.page'
import { JobApplicationPage } from '../../support/pages/careers_website/job_application.page'

describe('Job applications', () => {

  const availableJobsPage = new AvailableJobsPage()
  const jobApplicationPage = new JobApplicationPage()

  it('A user receives an error if they submit a job application without checking recaptcha', () => {
    const applicant =  {
      fullName: 'Test Applicant',
      email: 'test_applicant@test.com',
    }
    
    cy.visit(prod.semanticbits_jobs)
    availableJobsPage.clickFirstJob()
    availableJobsPage.clickApplyForJob()
    jobApplicationPage.typeContactInformation(applicant.fullName, applicant.email)
    jobApplicationPage.allCheckboxesCheckFirst()
    jobApplicationPage.answerAllCustomQuestions('Just testing')
    jobApplicationPage.clickSubmit()

    jobApplicationPage.recaptchaErrorMessageElem().should('be.visible')
  })
})
