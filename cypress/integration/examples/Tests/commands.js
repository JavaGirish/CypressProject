describe('Custom commands tests', function() {


beforeEach(function() {
    cy.visit('https://admin-demo.nopcommerce.com/login');
    cy.Login('admin@yourstore.com','admin');
    cy.get('.content-header').should('contain.text','Dashboard')

    cy.get('ul.sidebar-menu').find('span').contains('Customers').click();
    cy.get('.treeview-menu').find('span').contains('Customers').click();
    cy.get('.content-header h1').should('contain.text','Customers')
    

})

it('Add a customer', function() {
    
    cy.get('.btn.bg-blue').click();
    cy.get('.content-header h1').should('contain.text','Add a new customer')
    
    cy.addCustomer('demo2@nopcommerce.com','Password',
    'Michael','Scott','M','6/3/2020','Dunder Mifflin Inc');

    cy.get('.alert-success').should('be.visible');
    cy.get('.alert-success').should('contain.text','The new customer has been added successfully.')



})


it('Edit a customer', function() {

    cy.get("tbody input[type='checkbox']").first().click();
    cy.get('.btn-default').eq(0).click();

    cy.editCustomer('Pam','Beesly','F','05/10/1990');
    
    cy.get('.alert-success').should('be.visible');
    cy.get('.alert-success').should('contain.text','The customer has been updated successfully.')
    cy.get('tr.odd td').eq(2).should('have.text','Pam Beesly');

})


it('Delete a customer', function() {

    cy.get("tbody input[type='checkbox']").first().click();
    cy.get('.btn-default').eq(0).click();

    cy.get('#customer-delete').click();
    cy.get('button.pull-right').click();
    cy.get('.alert-success').should('be.visible');
    cy.get('.alert-success').should('contain.text','The customer has been deleted successfully.')

})

afterEach(function() {
    cy.contains('Logout').click();
})



})
