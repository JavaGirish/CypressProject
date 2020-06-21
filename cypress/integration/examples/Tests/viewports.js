describe('Viewports Test', function() {


before(function() {

    cy.visit('https://www.freshworks.com/');
})


it('View port macbook 13', function() {

    cy.viewport('macbook-13');
    cy.screenshot();
    cy.wait(3000);
})

it('View port macbook 15', function() {

    cy.viewport('macbook-15');
    cy.screenshot();
    cy.wait(3000);
})


after(function() {
    console.log('exiting tests......')
})




})