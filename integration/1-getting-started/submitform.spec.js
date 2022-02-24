/// <reference types="cypress" />

context('Submit Form', () => {
    beforeEach(() => {
      cy.visit('https://qa-frontend-cypress.s3.eu-west-1.amazonaws.com/cypress-session2.html')
    })
  
    // https://on.cypress.io/interacting-with-elements
  
    it('.type() - type into a DOM element', () => {
      // https://on.cypress.io/type
      cy.get('[name=email]')
        .type('sindhu.vijayendra@seera.sa').should('have.value', 'sindhu.vijayendra@seera.sa')
  
        
    })
  
   
  })
  