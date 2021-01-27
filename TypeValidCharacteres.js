/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://www.theonlinecalculator.com/')
  })

  it('Type abc and expect null', () => {
    cy.get('#display')
      .type('abc').should('have.value', '')
  })

  it('Type abc1 and expect 1', () => {
    cy.get('#display')
      .type('abc1').should('have.value', '1')
  })

  it('Type ?abc12 and expect 12', () => {
    cy.get('#display')
      .type('?abc12').should('have.value', '12')
  })

  it('Type a4b3c1 and expect 431', () => {
    cy.get('#display')
      .type('a4b3c1').should('have.value', '431')
  })

  it('Type 1 2 3 4 5 and expect 12345', () => {
    cy.get('#display')
      .type('1 2 3 4 5').should('have.value', '12345')
  })

  it('Type -1 and expect 1', () => {
    cy.get('#display')
      .type('-1')
      .type('{enter}')
      .should('have.value', '1')
  })
})