

describe('cadastro', () => {
    it('cadastre-se', () => {
        cy.viewport(1440, 900)
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click()
        cy.get('#create-account_form > .page-subheading').should('have.text', 'Create an account')
    })
})