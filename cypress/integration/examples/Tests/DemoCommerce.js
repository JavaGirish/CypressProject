describe('NOP Commerce Website Tests', function() {

it('Validate page title', function(){
cy.visit('https://demo.nopcommerce.com/');
cy.title().should('contain',"nopCommerce demo store");
cy.get("[alt='nopCommerce demo store']").should('be.visible');

})

})