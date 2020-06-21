describe('Expedia Tests', function() {

// it('Launch website', function() {

// cy.visit('https://www.flipkart.com/');
// cy.title().should('contains','Online');
// cy.get('li.Wbt_B2').eq(0).trigger('mouseover');
// cy.get("a[title='Mi']").contains('Mi').click();
// cy.title().should('contains','Mi');
// cy.contains('8 GB').should('be.visible');
// cy.contains('Mi Mobiles').should('be.visible');
    
// })

it('Amazon Tests', function() {
cy.visit('https://www.amazon.in/');
cy.title().should('contains', 'Amazon.in');
cy.get('#twotabsearchtextbox').type('Mobile Phones');
cy.get("input[value='Go']").click();
cy.get("img[alt='CP_Latest_OnePlus8Series']").should('be.visible');
cy.get("img[alt='CP_Latest_OnePlus8Series']").click();

cy.get("img[alt='6GB']").click();
cy.get('#productTitle').should('be.visible');
cy.get('#productTitle').contains("OnePlus 8 5G (Glacial Green 6GB RAM");






})



})