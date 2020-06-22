describe('Table Tests', function() {

it('Validate entry present in table', function() {

    cy.visit('https://www.seleniumeasy.com/test/table-search-filter-demo.html');
    cy.get('.table.table-hover').find('td').contains('SEO');
    cy.get('.table.table-hover').find('td').contains('Browser');
    //Row value assertions
    cy.get('.table.table-hover tr:nth-child(2) td:nth-child(3)').should('have.text','Mike Trout');
    cy.get('.table.table-hover tr:nth-child(1) td:nth-child(2)').should('have.text','Wireframes');
    
    

})

it('Check value using filter option', function() {

cy.get('input.form-control').eq(1).type('1',{force: true});
cy.get('.table:nth-child(2)').find('td').eq(0).should('have.text','1');
cy.get('.table').eq(1).find('td').eq(1).should('have.text','markino');
cy.get('.table').eq(1).find('td').eq(2).should('have.text','Zieko');
cy.get('.table').eq(1).find('td').eq(3).should('have.text','Samuels');



})




})
