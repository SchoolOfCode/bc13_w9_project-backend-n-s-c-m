describe('Checking out page', () => {
  it('Visits page', () => {
    cy.visit('http://localhost:3000/')
  })
})
describe('Checks for existing card', () => {
  it('Looks for prre-existing card from db', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.cardDisplay').contains('www.arrays.com')
  })
})
describe('Submits new card', () => {
  it('Posts new card and checks if card is displayed', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.weekInput').type('52')
    cy.get('.button').click()
    cy.get('.cardDisplay').contains('Week 52')
  })
})
