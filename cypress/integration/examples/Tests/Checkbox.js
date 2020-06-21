describe('Handle Checkboxes', function() {


it('Flipkart Checkbox Tests', function() {
    cy.visit('https://www.flipkart.com/');
    cy.get('.LM6RPg').type('Mobile Phones');
    cy.get('.vh79eN').click();
    cy.get("[type='checkbox']").check({force: true});

})


})