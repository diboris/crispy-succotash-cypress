import faker from 'faker'

describe('Sign up', () => {

  const requiredFieldMessage = 'This field is required.'
  const correctEmailMessage = 'Please enter a correct username and password. Note that both fields may be case-sensitive.'

  beforeEach(() => {
    cy.visit('/')
  })

  it('A user can sign up', () => {
    const username = faker.internet.userName()
    const password = faker.internet.password()

    cy.signUp(username, password)

    cy.assertAlertSuccessMessage('Great success! Enjoy :)')
  })

  it('A user can login', () => {
    const username = faker.internet.userName()
    const password = faker.internet.password()

    cy.signUp(username, password)
    cy.logout()
    cy.login(username, password)

    cy.assertLogoutLink()
  })

  it('A user can logout', () => {
    const username = faker.internet.userName()
    const password = faker.internet.password()

    cy.signUp(username, password)
    cy.logout()

    cy.assertLoginLink()
  })

  it('A user can not sign up without credentials', () => {
    cy.signUp('', '')

    cy.assertFieldError('username', requiredFieldMessage)
    cy.assertFieldError('password1', requiredFieldMessage)
    cy.assertFieldError('password2', requiredFieldMessage)
  })

  it('A user can not sign up with a short password', () => {
    const username = faker.internet.userName()
    const password = faker.random.alpha(3)

    cy.signUp(username, password)

    cy.assertFieldError('password2', 'This password is too short. It must contain at least 8 characters.')
  })

  it('A user can not sign up with an entirely numeric password', () => {
    const username = faker.internet.userName()
    const password = 18274661

    cy.signUp(username, password)

    cy.assertFieldError('password2', 'This password is entirely numeric.')
  })

  it('A user can not sign up with not matching password confirmation', () => {
    const username = faker.internet.userName()
    const password = faker.internet.password()
    const passwordConfirmation = faker.internet.password()

    cy.signUp(username, password, passwordConfirmation)

    cy.assertFieldError('password2', 'The two password fields didn\'t match.')
  })

  it('A user can not sign up with a password matching the user name', () => {
    const username = faker.internet.userName()
    const password = username

    cy.signUp(username, password)

    cy.assertFieldError('password2', 'The password is too similar to the username.')
  })

  it('A user can not sign up with invalid username', () => {
    const username = faker.random.arrayElement(Cypress.env('SPECIAL_CHARACTER'))
    const password = faker.internet.password()

    cy.signUp(username, password)

    cy.assertFieldError('username', 'Enter a valid username. This value may contain only letters, numbers and @/./+/-/_ characters.')
  })

  it('A user can not sign up with already existing user name', () => {
    const username = faker.internet.userName()
    const password = faker.internet.password()

    cy.signUp(username, password)
    cy.logout()
    cy.signUp(username, password)

    cy.assertFieldError('username', 'A user with that username already exists.')
  })

  it('A none existing user can not login', () => {
    const username = faker.internet.userName()
    const password = faker.internet.password()

    cy.login(username, password)

    cy.assertAlertErrorMessage(correctEmailMessage)
  })

  it('A user can not login with invalid password', () => {
    const username = faker.internet.userName()
    const password = faker.internet.password()

    cy.signUp(username, password)
    cy.logout()
    cy.login(username, faker.internet.password())

    cy.assertAlertErrorMessage(correctEmailMessage)
  })

  it('A user can not login without credentials', () => {
    cy.login('', '')

    cy.assertFieldError('username', requiredFieldMessage)
    cy.assertFieldError('password', requiredFieldMessage)
  })
})
