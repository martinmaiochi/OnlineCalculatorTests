/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://www.theonlinecalculator.com/')
  })

  it('Click dot button and expect 0.1', () => {
    cy.get('[value="."]').click()
    cy.get('#display').should('have.value', '0.')
  })

  it('Double click dot and expect 0.1', () => {
    cy.get('[value="."]').dblclick()
    cy.get('#display').should('have.value', '0.')
  })

  it('Button clear should be AC when display is empty', () => {
    cy.get('#display').should('have.value', '')
    cy.get('[name="clearButton"]').should('have.value', 'AC')
  })

  it('Button clear should be CE when display is has number', () => {
    cy.get('#display').type('10')
    cy.get('[name="clearButton"]').should('have.value', 'CE')
  })

  it('Type numbers and clear display with CE button', () => {
    cy.get('#display').type('99999999999999999999999999999999999')
    cy.get('[name="clearButton"]').click()
  })

  it('Click 0 button and expect 0', () => {
    cy.get('[name="zero"].number').click()
    cy.get('#display').should('have.value', '0')
  })

  it('Click 1 button and expect 1', () => {
    cy.get('[name="one"], [value="1"]').click()
    cy.get('#display').should('have.value', '1')
  })

  it('Click 2 button and expect 2', () => {
    cy.get('[name="two"], [value="2"]').click()
    cy.get('#display').should('have.value', '2')
  })

  it('Click 3 button and expect 3', () => {
    cy.get('[name="three"], [value="3"]').click()
    cy.get('#display').should('have.value', '3')
  }) 

  it('Click 4 button and expect 4', () => {
    cy.get('[name="four"], [value="4"]').click()
    cy.get('#display').should('have.value', '4')
  })

  it('Click 5 button and expect 5', () => {
    cy.get('[name="five"], [value="5"]').click()
    cy.get('#display').should('have.value', '5')
  })

  it('Click 6 button and expect 6', () => {
    cy.get('[name="six"], [value="6"]').click()
    cy.get('#display').should('have.value', '6')
  })

  it('Click 7 button and expect 7', () => {
    cy.get('[name="seven"], [value="7"]').click()
    cy.get('#display').should('have.value', '7')
  })

  it('Click 8 button and expect 8', () => {
    cy.get('[name="eight"], [value="8"]').click()
    cy.get('#display').should('have.value', '8')
  })    

  it('Click 9 button and expect 9', () => {
    cy.get('[name="nine"], [value="9"]').click()
    cy.get('#display').should('have.value', '9')
  })

  it('Click π button and expect 3.1415926536', () => {
    cy.get('[value="π"], [title="Display the value of Pi"]').click()
    cy.get('#display').should('have.value', '3.1415926536')
  })   

  it('Type 10, press +/- button and expect -10', () => {
    cy.get('#display').type('10')
    cy.get('[name="negateButton"].number').click()//[name="negateButton"] is type and .number the class
    cy.get('#display').should('have.value', '-10')
  })  

  it('Type 10, click square button and expect 100', () => {
    cy.get('#display').type('10')
    cy.get('[value="x²"]').click()
    cy.get('#display').should('have.value', '100')
  })   

})