/// <reference types="cypress" />

context('Window', () => {
  beforeEach(() => {
    cy.visit('https://www.theonlinecalculator.com/')
  })

  it('Get the document object', () => {
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
  })

  it('Get the title', () => {
    cy.title().should('include', 'The Online Calculator | Basic Calculator')
  })
})
