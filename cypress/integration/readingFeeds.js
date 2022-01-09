import faker from 'faker'

describe('Reading feeds', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('A user can follow feeds', () => {
    const username = faker.internet.userName()
    const password = faker.internet.password()
    const feed = randomFeed()

    cy.signUp(username, password)
    cy.addFeed(feed)

    cy.getFeedUrl().should('have.text', feed)
    cy.getAddedBy().should('have.text', username)
  })

  function randomFeed () {
    return faker.random.arrayElement(Cypress.env('FEED')) + '?randomId=' + faker.random.number()
  }
})
