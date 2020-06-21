describe('Select value from dropdown Tests', function() {

it('Select class dropdown test', function() {
    cy.visit('https://demo.nopcommerce.com/')
    cy.get('.ico-register').should('be.visible');
    cy.get('.ico-register').click();
    cy.wait(5000);
    cy.get('[name=DateOfBirthDay]').select('20').should('have.value','20');
    cy.get('[name=DateOfBirthMonth]').select('March').should('have.value','3');
    cy.get('[name=DateOfBirthYear]').select('2019').should('have.value','2019');
    
})



it('Suggesstion Box dropbox test', function() {

cy.visit('https://demo.nopcommerce.com/')
cy.get('#small-searchterms').type('Apple');
cy.wait(5000);
cy.get("#ui-id-1").find('li a span').contains('Apple iCam').click();


})

it('Amazon Product Search test', function() {

    cy.visit('https://flipkart.com/');
    cy.get('.LM6RPg').type('webcam');
    
    cy.get("ul.col-12-12").find('li div._2kpuIQ').contains('webcam for pc').click();
    cy.get('div._1vC4OE').eq(1).should('be.be.visible');
    cy.get('a._2cLu-l').eq(1).should('have.text','Logitech B525 Commercial HD Webcam, 960-000841  Webcam');
    
    
    })








})