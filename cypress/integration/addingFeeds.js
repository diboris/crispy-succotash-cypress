import faker from 'faker'

describe('Adding feeds', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('A user can add markdown comment to a feed', () => {
    const username = faker.internet.userName()
    const password = faker.internet.password()
    const feed = randomFeed()

    cy.signUp(username, password)
    cy.addFeed(feed)
    cy.addComment(Cypress.env('COMMENT'))

    cy.assertAlertSuccessMessage('Comment added successfully')

    cy.get('.well-sm h1').should('have.text', 'great article!')
  })

  it('A user can add a feed to favorite', () => {
    const username = faker.internet.userName()
    const password = faker.internet.password()
    const feed = randomFeed()

    cy.signUp(username, password)
    cy.addFeed(feed)
    cy.bookmarkFeed()

    cy.get('.table').find('tbody tr td').eq(2)
      .should('have.text', feed)
  })

  function randomFeed () {
    return faker.random.arrayElement(Cypress.env('FEED')) + '?randomId=' + faker.random.number()
  }
})
