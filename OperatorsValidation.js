/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://www.theonlinecalculator.com/')
  })

  it('Divide per zero and expect error', () => {
    cy.get('#display')
      .type('10/0')
      .type('{enter}')
      .should('have.value', 'Not a Number')
  })

  it('Divide 10 per 3 and expect 3.3333333333', () => {
    cy.get('#display')
      .type('10/3')
      .type('{enter}')
      .should('have.value', '3.3333333333')
  })

  it('Multiply 9 per 9 and expect 81', () => {
    cy.get('#display')
      .type('9')
    cy.get('[name="multiply"]').click()
    cy.get('#display')
      .type('9')
      .type('{enter}')
      .should('have.value', '81')
  })

  it('removes 1% of 10 and expect to be 9.9', () => {
    cy.get('#display')
      .type('10')
      .type('{enter}')
      .type('-1')
    cy.get('[name="percentButton"]').click()
    cy.get('#display').type('{enter}') 
    cy.get('#display').should('have.value', '9.9')
  })

  it('Type +10-9 and expect 1', () => {
    cy.get('#display')
      .type('+10-9')
      .type('{enter}')
      .should('have.value', '1')
  })

  it('Type -1-1 and expect 0', () => {
    cy.get('#display')
      .type('-1-1')
      .type('{enter}')
      .should('have.value', '0')
  })



})