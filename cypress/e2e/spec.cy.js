describe('Checking out page', () => {
  it('Visits page', () => {
    cy.visit('http://localhost:3000/')
  })
})
describe('Checks for existing card', () => {
  it('Looks for pre-existing card from db', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.cardDisplay').contains('https://www.w3schools.com/js/js_assignment.asp')
  })
})
describe('Submits new card', () => {
  it('Posts new card and checks if card is displayed', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.weekInput').type('52')
    cy.get('.addCardButton').click()
    cy.get('.cardDisplay').contains('Week 52')
  })
  it('Deletes card', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Week 52').parent().parent().find('button').click()
  })
})
describe('should contain image ', () => {
  it('Posts image in the card', () => {
    cy.visit('http://localhost:3000/')
    cy.get(':nth-child(2) > .cardImage').should('be.visible')   
  })
})

