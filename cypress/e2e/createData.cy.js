
describe('Use TDG to generate data', () => {
    it('User logs into TDG and generates 10 data examples', () => {
        cy.visit('https://develop.d3nylssqqiptjw.amplifyapp.com/')
        cy.get('[id="email-input"]').type('team1@test.com')
        cy.get('[id="password-input"]').type('123456')
        cy.get('[id="login-button"]').click()
        cy.contains('Data')
        
        cy.get('[href="/data"]').click()
        cy.get('[id="entries-counter"]').clear().type(10)
        cy.get('[id="personal"]').click();
        cy.contains('Title').click();
        cy.contains('First name').click();
        cy.contains('Second name').click();
        cy.contains('Last Name').click();
        cy.contains('Date Of Birth Formatted').click();
        cy.contains('Email Address').click();
        cy.contains('Mobile Number').click();
        cy.contains('Gender').click();
        cy.contains('Nationality').click();
        cy.get('[id="residentialAddress"]').click()
        cy.contains('First Line').click();
        cy.contains('City').click();
        cy.contains('Post Code').click();
        cy.get('[id="cars"]').click();
        cy.contains('Car Make').click();
        cy.contains('Car Model').click();
        cy.get('[id="submit-selected"]').click()
        cy.get('[id="generate-values"]').click()
        cy.contains('File is ready!')

        cy.get('[id="file-name-input"]').click().clear().type('peopleDetails')
        cy.get('#download-button').click()
        // cy.get('[id="logout-link"]').click()
    })
})