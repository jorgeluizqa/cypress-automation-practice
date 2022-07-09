

describe('hoem page', ()=>{
    it('app deve estar online', ()=>{
        cy.viewport(1440, 900)
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').should('have.text', '\n\t\t\tSign in\n\t\t')
    })
})