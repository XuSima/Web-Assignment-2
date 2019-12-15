/* eslint-disable no-undef */
const URL = 'http://localhost:8080/#/add1/'

describe('Manage Teachers page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/#/login')
    cy.get('label')
      .contains('Username')
      .next()
      .type('admin')
    cy.get('input[data-test=password]')
      .type('11')
    cy.get('button[type=submit]').click()
    cy.wait(500)
    cy.url()
      .should('include', 'http://localhost:8080/#/')
    cy.visit(URL)
    cy.request('https://assignment2-prod.herokuapp.com/teachers/')
      .its('body')
      .then(teachers => {
        console.log(teachers)
        teachers.forEach(element => {
          cy.request('DELETE', `${'https://assignment2-prod.herokuapp.com/teachers/'}${element._id}`)
        })
      })
    cy.fixture('teachers').then(teachers => {
      // eslint-disable-next-line no-unused-vars
      let [d1, d2, d3, d4, ...rest] = teachers
      let four = [d1, d2, d3, d4]
      four.forEach(teacher => {
        cy.request('POST', `${'https://assignment2-prod.herokuapp.com/teachers/'}`, teacher)
      })
    })
  })
  describe('Add page', () => {
    it('add a teacher successfully', () => {
      cy.get('button[type=submit]').click()
      cy.contains('Success').should('exist')
      cy.get(':nth-child(8) > .btn').click()
      cy.url().should('include', '/teachers')
      cy.get('tbody')
        .find('tr')
        .should('have.length', 5)
    })
    it('add s teacher with error', () => {
      cy.get('label')
        .contains('Age')
        .next()
        .type('2')
      cy.get('.error').contains('Age')
        .should('exist')
      cy.get('label')
        .contains('Name')
        .next()
        .clear()
        .type('A')
      cy.get('.error').contains('Name')
        .should('exist')
      cy.get('label')
        .contains('Age')
        .next()
        .clear()
      cy.get('.error').contains('required')
        .should('exist')
      cy.get('label')
        .contains('Name')
        .next()
        .clear()
      cy.get('.error').contains('required')
        .should('exist')
    })
  })
})
