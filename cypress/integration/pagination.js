/* eslint-disable no-undef */
const URL = 'http://localhost:8080/#/students/'

// eslint-disable-next-line no-undef
describe('Manage Students page - Pagination', () => {
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
        students.forEach(element => {
          cy.request('DELETE', `${'https://assignment2-prod.herokuapp.com/students/'}${element._id}`)
        })
      })
    cy.fixture('students').then(students => {
      students.forEach(student => {
        cy.request('POST', 'https://assignment2-prod.herokuapp.com/students/', student)
      })
    })
    cy.visit(URL)
    cy.get('.navbar-nav')
      .eq(0)
      .find('.nav-item')
      .eq(1)
      .click()
  })

  it('displays first 6 students only', () => {
    cy.get('tbody')
      .find('tr')
      .should('have.length', 6)
    cy.get('tbody')
      .find('tr')
      .its('length')
      .should('be.lt', 7)
    cy.get('tbody')
      .find('tr')
      .eq(5)
      .find('td')
      .eq(4)
      .should('contain', 4) // its('length').should('be.lt',11)
  })

  it('starts at the 7th student on the next page', () => {
    cy.get('ul.pagination')
      .find('li')
      .eq(2)
      .next()
      .click() // 2nd page link
    cy.get('tbody')
      .find('tr')
      .should('have.length', 6)
    cy.get('tbody')
      .find('tr')
      .eq(0)
      .find('td')
      .eq(2)
      .should('contain', 23) // its('length').should('be.lt',11)
  })

  it('starts at the 13th student on the third page', () => {
    cy.get('ul.pagination')
      .find('li')
      .eq(3)
      .next()
      .click() // 2nd page link
    cy.get('tbody')
      .find('tr')
      .should('have.length', 4)
    cy.get('tbody')
      .find('tr')
      .eq(0)
      .find('td')
      .eq(2)
      .should('contain', 23) // its('length').should('be.lt',11)
  })
})
