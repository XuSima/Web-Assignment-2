/* eslint-disable no-undef */
describe('Home page', () => {
  // eslint-disable-next-line no-undef
  beforeEach(() => {
    // eslint-disable-next-line no-undef
    cy.visit('http://localhost:8080/')
  })

  it('Shows a header', () => {
    cy.get('.vue-title').should('contain', 'Welcome to Student and Teacher Management System')
  })

  describe('Navigation bar and the word on the homepage', () => {
    it('Shows the required navigation bar links', () => {
      cy.get('.navbar-nav')
        .eq(0)
        .within(() => {
          cy.get('.nav-item')
            .eq(0)
            .should('contain', 'Home')
          cy.get('.nav-item')
            .eq(1)
            .should('contain', 'Manage Students')
          cy.get('.nav-item')
            .eq(2)
            .should('contain', 'Add a Student')
          cy.get('.nav-item')
            .eq(3)
            .should('contain', 'Manage Teachers')
          cy.get('.nav-item')
            .eq(4)
            .should('contain', 'Add a Teacher')
        })
      cy.get('.navbar-nav')
        .eq(1)
        .within(() => {
          cy.get('.nav-item')
            .eq(0)
            .should('contain', 'Contact Us')
          cy.get('.nav-item')
            .eq(1)
            .should('contain', 'Login')
          cy.get('.nav-item')
            .eq(2)
            .should('contain', 'Logout')
        })
    })

    it('Shows href links', () => {
      cy.get('p')
        .eq(0)
        .should('contain', 'SMS')
      cy.get('p')
        .eq(1)
        .should('contain', 'TMS')
    })
    it('Need to log in when links are clicked', () => {
      cy.get('[data-test=addbtn]').click()
      cy.url().should('include', '/login')
    })
  })
})
