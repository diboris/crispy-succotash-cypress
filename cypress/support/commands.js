import '@testing-library/cypress/add-commands'
import faker from 'faker'

Cypress.Commands.add('signUp', (username, password, passwordConfirmation) => {
  cy.visit('/accounts/register/')
  if (username) {
    cy.get('#id_username').type(username)
  }
  if (password) {
    cy.get('#id_password1').type(password)
  }
  if (!passwordConfirmation) {
    passwordConfirmation = password
  }
  if (passwordConfirmation) {
    cy.get('#id_password2').type(passwordConfirmation)
  }
  cy.submitForm()
})

Cypress.Commands.add('login', (username, password) => {
  cy.visit('/accounts/login/')
  if (username) {
    cy.get('#id_username').type(username)
  }
  if (password) {
    cy.get('#id_password').type(password)
  }
  cy.get('.btn-sm').click()
})

Cypress.Commands.add('submitForm', () => {
  cy.get('#submit-id-submit').click()
})

Cypress.Commands.add('logout', () => {
  cy.get('a[href*="logout"]').click()
})

Cypress.Commands.add('assertFieldError', (input, message) => {
  cy.get(`[id^="error_"][id$="${input}"]`).should('be.visible')
    .and('have.text', message)
})

Cypress.Commands.add('getFeedUrl', () => {
  return cy.get('.dl-horizontal dt').contains('Feed URL')
    .next('dd')
})

Cypress.Commands.add('getAddedBy', () => {
  return cy.get('.dl-horizontal dt').contains('Added by')
    .next('dd')
})

Cypress.Commands.add('assertLogoutLink', () => {
  cy.get('a[href*="logout"]').contains('Logout')
    .should('be.visible')
})

Cypress.Commands.add('assertLoginLink', () => {
  cy.get('a[href*="login"]').contains('Login')
    .should('be.visible')
})

Cypress.Commands.add('assertAlertErrorMessage', (message) => {
  cy.get('.alert-danger').contains(message)
    .should('be.visible')
})

Cypress.Commands.add('assertAlertSuccessMessage', (message) => {
  cy.get('.alert-success').contains(message)
    .should('be.visible')
})

Cypress.Commands.add('addFeed', (feed) => {
  cy.get('a[href="/feeds/new/"]').click()
  cy.get('#id_feed_url').type(feed)
  cy.submitForm()
})

Cypress.Commands.add('bookmarkFeed', () => {
  cy.get('a[href*="toggle-bookmark/"]').click()
  cy.get('a[href*="bookmarked/"]').click()
})

Cypress.Commands.add('addComment', (comment) => {
  cy.get('.table tbody a').eq(0).click()
  cy.get('.CodeMirror textarea').type(comment, { force: true })
  cy.submitForm()
})
