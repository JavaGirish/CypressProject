describe('Page Actions Test', function() {

it('Browser forward/Back Tests', function() {
    cy.visit('https://www.amazon.in/');
    cy.contains('Amazon Pay').should('be.visible').click();
    cy.wait(5000);
    cy.contains("Add Money").should('be.visible');

    cy.go('back');
    cy.go('forward') // move forward in browser
    cy.go('back')//move back in browser
    cy.reload(); //reload page
})








})