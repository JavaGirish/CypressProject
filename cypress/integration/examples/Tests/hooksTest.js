describe('Testing Hooks functionality', function() {


    before(() => {
        cy.log('Starting with Suite execution.....')
      })
    
      beforeEach(() => {
        cy.log('Starting test case execution.....')
      })
    
      afterEach(() => {
        cy.log('Test Case execution completed!!.....')
      })
    
      after(() => {
        cy.log('Test Suite execution Completed!!.....')
      })


    it('Login Test', function(){

        cy.log("Application Login Test");
        
    })

    it('Logo Test', function(){

        cy.log("Logo Test");
        
    })


    it('Link Displayed Test', function(){

        cy.log("Link Displayed Test");
        
    })








})
