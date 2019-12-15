/* eslint-disable no-undef */
const URL = 'http://localhost:8080/#/teachers/'

// eslint-disable-next-line no-undef
describe('Manage Teachers page - Pagination', () => {
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
    cy.request('https://assignment2-prod.herokuapp.com/teachers/')
      .its('body')
      .then(teachers => {
        teachers.forEach(element => {
          cy.request('DELETE', `${'https://assignment2-prod.herokuapp.com/teachers/'}${element._id}`)
        })
      })
    cy.fixture('teachers').then(teachers => {
      teachers.forEach(teacher => {
        cy.request('POST', 'https://assignment2-prod.herokuapp.com/teachers/', teacher)
      })
    })
    cy.visit(URL)
    cy.get('.navbar-nav')
      .eq(0)
      .find('.nav-item')
      .eq(1)
      .click()
  })

  it('displays first 6 teachers only', () => {
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

  it('starts at the 7th teacher on the next page', () => {
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

  it('starts at the 13th teacher on the third page', () => {
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
