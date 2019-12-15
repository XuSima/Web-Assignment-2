/* eslint-disable no-undef */
const apiURL = 'http://localhost:8080/#/login/'
describe('Login page', () => {
  describe('Log in', () => {
    beforeEach(() => {
      cy.visit(apiURL)
    })
    describe('With incorrect username and password', () => {
      it('fail to log in and show alert', () => {
        //  Fill out web form
        cy.get('label')
          .contains('Username')
        cy.get('.error').contains('Username')
          .should('exist')
        cy.get('label')
          .contains('Username')
          .next()
          .type('abc')
        cy.get('input[data-test=password]')
        cy.get('.error').contains('Password')
          .should('exist')
        cy.get('input[data-test=password]')
          .type('123')
        cy.get('button[type=submit]').click()
        cy.get('.swal2-modal')
        cy.get('.swal2-warning')
        cy.get('#swal2-title')
        cy.get('#swal2-content')
        cy.get('.swal2-confirm').contains('I Understand').click()
      })
      after(() => {
        cy.wait(100)
        cy.url()
          .should('include', apiURL)
      })
    })
    describe('With correct username and password', () => {
      it('log in successfully', () => {
        cy.get('label')
          .contains('Username')
          .next()
          .type('admin')
        cy.get('input[data-test=password]')
          .type('11')
        cy.get('button[type=submit]').click()
      })
      after(() => {
        cy.wait(1000)
        cy.url()
          .should('include', 'http://localhost:8080/#/')
        cy.get('[data-test=addbtn]').click()
        cy.url().should('include', '/add')
        cy.get('button[type=submit]').click()
        cy.contains('Success').should('exist')
        cy.get(':nth-child(8) > .btn').click()
        cy.url().should('include', '/students')
      })
    })
  })
})
