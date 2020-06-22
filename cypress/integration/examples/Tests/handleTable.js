describe('Table Tests', function() {

it('Validate entry present in table', function() {

    cy.visit('https://www.seleniumeasy.com/test/table-search-filter-demo.html');
    cy.get('.table.table-hover').find('td').contains('SEO');
    cy.get('.table.table-hover').find('td').contains('Browser');
    //Row value assertions
    cy.get('.table.table-hover tr:nth-child(2) td:nth-child(3)').should('have.text','Mike Trout');
    cy.get('.table.table-hover tr:nth-child(1) td:nth-child(2)').should('have.text','Wireframes');
    
    

})



})
