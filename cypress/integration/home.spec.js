

describe('hoem page', ()=>{
    it('app deve estar online', ()=>{
        cy.viewport(1440, 900)
        cy.visit('http://automationpractice.com/index.php')
        cy.get('#facebook_block h4').should('have.text','Follow us on Facebook')
    })
})