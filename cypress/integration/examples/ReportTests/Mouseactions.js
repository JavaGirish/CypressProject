describe('Mouse actions using Trigger', function() {


it('MemberLogin using mousehover', function() {
cy.visit('https://www.spicejet.com/')

cy.get('#ctl00_HyperLinkLogin').trigger('mouseover');
cy.contains('SpiceClub Members').trigger('mouseover');
cy.contains('Member Login').click({force: true});
cy.get('.signup-link.buttonN').should('be.visible').click();


})

it('SignUp using mousehover', function() {
    cy.visit('https://www.spicejet.com/');
    cy.get('#ctl00_HyperLinkLogin').should('be.visible').trigger('mouseover');
    cy.contains('SpiceClub Members').trigger('mouseover');
    cy.contains('Sign up').invoke('show').click();
    cy.wait(3000);
    
    })




})