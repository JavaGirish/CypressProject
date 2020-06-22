describe('Handling Alerts', function() {


it('Basic Alerts', function () {

cy.visit('https://www.seleniumeasy.com/test/javascript-alert-box-demo.html');
cy.get('.btn.btn-default').first().click();
cy.on('window:alert', (str) => {

expect(str).to.contain('I am an alert');

})

})

it('Confirmation Alerts', function () {

    cy.visit('https://www.seleniumeasy.com/test/javascript-alert-box-demo.html');
    cy.get('.btn.btn-default.btn-lg').first().click();
    cy.on('window:confirm', (str) => {
    
    expect(str).to.contain('Press a button!');
    
    })
    
    })


})



