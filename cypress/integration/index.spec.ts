/// <reference types="cypress" />

describe('Organizer', () => {
    context('Index Page', () => {
        beforeEach(() => {
            cy.visit('/')
        })

        it('has prompts to log in or sign up', () => {
            cy.get('h2').contains('Log In').should('exist')
            cy.get('h2').contains('Sign Up').should('exist')
        })
    })
})
