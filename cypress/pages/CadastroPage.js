
class CadastroPage {
    go() {
        cy.viewport(1440, 900)
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click()
        cy.get('.navigation_page').should('have.text', '	Authentication')
    }
    fillForm(informacao) {
        cy.get('#email_create').type(informacao.email)
        cy.get('#SubmitCreate').click()
        cy.get('h1.page-heading').should('have.text', 'Create an account')
        cy.get('#id_gender1').click()
        cy.get('#firstname').type(informacao.first_name)
        cy.get('#lastname').type(informacao.last_name)
        cy.get('#passwd').type(informacao.password)
        cy.get('#days').select(informacao.day)
        cy.get('#months').select(informacao.mounth)
        cy.get('#years').select(informacao.year)
        cy.get('#newsletter').click()
        cy.get('#optin').click()
        cy.get('#customer_firstname').type(informacao.customer_firstname)
        cy.get('#customer_lastname').type(informacao.customer_lastname)
        cy.get('#company').type(informacao.company)
        cy.get('#address1').type(informacao.address)
        cy.get('#address2').type(informacao.address2)
        cy.get('#city').type(informacao.city)
        cy.get('#id_state').select(informacao.state)
        cy.get('#id_country').select(informacao.country)
        cy.get('#other').type(informacao.adicional)
        cy.get('#postcode').type(informacao.postal)
        cy.get('#phone').type(informacao.home_fone)
        cy.get('#phone_mobile').type(informacao.mobile_fone)
        cy.get('#alias').type(informacao.adress_reference)
    }
    submit() {

        cy.get('#submitAccount').click()
        cy.get('.navigation_page').should('have.text', 'My account')

    }
}
export default CadastroPage;