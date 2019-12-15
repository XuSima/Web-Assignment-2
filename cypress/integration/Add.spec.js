/* eslint-disable no-undef */
const URL = 'http://localhost:8080/#/add/'

describe('Manage Students page', () => {
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
    cy.request('https://assignment2-prod.herokuapp.com/students/')
      .its('body')
      .then(students => {
        console.log(students)
        students.forEach(element => {
          cy.request('DELETE', `${'https://assignment2-prod.herokuapp.com/students/'}${element._id}`)
        })
      })
    cy.fixture('students').then(students => {
      // eslint-disable-next-line no-unused-vars
      let [d1, d2, d3, d4, ...rest] = students
      let four = [d1, d2, d3, d4]
      four.forEach(student => {
        cy.request('POST', `${'https://assignment2-prod.herokuapp.com/students/'}`, student)
      })
    })
    cy.visit(URL)
  })
  describe('Add page', () => {
    it('add a student successfully', () => {
      cy.get('button[type=submit]').click()
      cy.contains('Success').should('exist')
      cy.get(':nth-child(8) > .btn').click()
      cy.url().should('include', '/students')
      cy.get('tbody')
        .find('tr')
        .should('have.length', 4)
    })
    it('add s student with error', () => {
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
