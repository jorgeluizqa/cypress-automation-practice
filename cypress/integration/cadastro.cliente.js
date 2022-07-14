import CadastroPage from '../pages/CadastroPage'

describe('cadastro', () => {
    it('cadastre-se', () => {
        

        var informacao = {
            email: 'tant@gmail.com.br',
            first_name: 'Fulo',
            last_name: 'da Vida',
            password: '123456',
            day:'19',
            mounth:'December',
            year:'1963',
            company:'Zémane&company',
            address:'Perdidos no Espaço, sem rumo',
            customer_firstname:'Fulo',
            customer_lastname:'da Vida',
            address2:'Alameda Spock',
            city:'Stars city',
            state:'Arizona',
            country:'United States',
            postal:'37188',
            home_fone:'+1 202-456-1111',
            mobile_fone:'+55 11999999999',
            adress_reference:' Casa da Mãe Joana',
            adicional:'Minha casa é muito bonita'


        }
       
        var cadastro = new CadastroPage()

        cadastro.go()
        cadastro.fillForm(informacao)
        // cadastro.submit()
         
    })
})	