import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';

Given("acessei o site Ticketbox", () => {
  cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html")
});

When('eu escrever {string} no campo First Name', (firstName) => {
  cy.get('#first-name').type(firstName);
});

And('{string} no campo Last Name', (lastName) => {
  cy.get('#last-name').type(lastName);
});

And('escrever {string} no campo E-mail', (email) => {
  cy.get('#email').type(email);
});

And('escolher a opção {string} no campo Ticket Quantity', (quantity) => {
  cy.get('#ticket-quantity').select(quantity);
});

And('clicar em {string} na opção Ticket Type', (ticketType) => {
  cy.get('#vip').check();
});

And('clicar em {string} na opção How did you hear about this event?', (option) => {
  cy.get('#social-media').check();
});

And('selecionar a opção de "I Agree"', () => {
  cy.get('#agree').check();
});

And('clicar no botão "Confirm Tickets"', () => {
  cy.get('.active').click();
});

Then('a compra é realizada com sucesso', () => {
  cy.contains('Ticket(s) successfully ordered.').should('be.visible');
});
