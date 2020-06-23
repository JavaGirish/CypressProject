Cypress.Commands.add('Login', (email,password) => {
	
cy.get('#Email').click().clear().type(email);
cy.get('#Password').click().clear().type(password)
cy.get('.login-button').click()

})


Cypress.Commands.add("addCustomer", (email,pwd,fname,lname,gender,dob,company) =>{
	
	cy.get('#Email').type(email)
	cy.get('#Password').type(pwd);
	cy.get('#FirstName').type(fname)
	cy.get('#LastName').type(lname)
	cy.get('[type="radio"]').check(gender);
	cy.get('#DateOfBirth').type(dob);
	cy.get('#Company').type(company)

	cy.get("[name='save']").click();

})

Cypress.Commands.add("editCustomer", (fname,lname,gender,dob) =>{

	cy.get('#FirstName').clear().type(fname)
	cy.get('#LastName').clear().type(lname)
	cy.get('[type="radio"]').check(gender);
	cy.get('#DateOfBirth').clear().type(dob);

	cy.get("[name='save']").click();

})
