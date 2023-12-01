const path = 'cypress/downloads/';
let fileName = 'peopleDetails';

describe('use data', () => {

  it('use data', function(){
    cy.visit('http://localhost:3000')

    cy.fixture('JSON1').then(passData => {
      passData.forEach(details => {
        cy.get('[class="personal_title"]').type(details.personal_title)
        cy.get('[class*="personal_title"]').invoke('val').should('eq', details.personal_title)
        cy.get('[class*="personal_firstName"]').type(details.personal_firstName)
        cy.get('[class*="personal_firstName"]').invoke('val').should('eq', details.personal_firstName)
        cy.get('[class*="personal_secondName"]').type(details.personal_secondName)
        cy.get('[class*="personal_secondName"]').invoke('val').should('eq', details.personal_secondName)
        cy.get('[class*="personal_lastName"]').type(details.personal_lastName)
        cy.get('[class*="personal_lastName"]').invoke('val').should('eq', details.personal_lastName)
        cy.get('[class*="personal_dob"]').type(details.personal_dobFormatted)
        cy.get('[class*="personal_dob"]').invoke('val').should('eq', details.personal_dobFormatted)
        cy.get('[class*="personal_email"]').type(details.personal_email)
        cy.get('[class*="personal_email"]').invoke('val').should('eq', details.personal_email)
        cy.get('[class*="personal_mobileNumber"]').type(details.personal_mobileNumber)
        cy.get('[class*="personal_mobileNumber"]').invoke('val').should('eq', details.personal_mobileNumber)
        cy.get('[class*="personal_gender"]').type(details.personal_gender)
        cy.get('[class*="personal_gender"]').invoke('val').should('eq', details.personal_gender)
        cy.get('[class*="personal_nationality"]').type(details.personal_nationality)
        cy.get('[class*="personal_nationality"]').invoke('val').should('eq', details.personal_nationality)
        cy.get('[class*="residentialAddress_firstLine"]').type(details.residentialAddress_firstLine)
        cy.get('[class*="residentialAddress_firstLine"]').invoke('val').should('eq', details.residentialAddress_firstLine)
        cy.get('[class*="residentialAddress_city"]').type(details.residentialAddress_city)
        cy.get('[class*="residentialAddress_city"]').invoke('val').should('eq', details.residentialAddress_city)
        cy.get('[class*="residentialAddress_postCode"]').type(details.residentialAddress_postCode)
        cy.get('[class*="residentialAddress_postCode"]').invoke('val').should('eq', details.residentialAddress_postCode)
        cy.get('[class*="cars_carMake"]').type(details.cars_carMake)
        cy.get('[class*="cars_carMake"]').invoke('val').should('eq', details.cars_carMake)
        cy.get('[class*="cars_carModel"]').type(details.cars_carModel)
        cy.get('[class*="cars_carModel"]').invoke('val').should('eq', details.cars_carModel)
        cy.get('button').click()
      })
    })
  })
})
