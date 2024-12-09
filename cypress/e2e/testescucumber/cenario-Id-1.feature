Feature: cenario-Id-1

  Scenario: Compra de 1 ticket do tipo General Admission usando a opção Friend
    Given acessei o site Ticketbox
    When eu escrever "Gabi" no campo First Name
    And "Teste" no campo Last Name
    And escrever "gabi@teste.com" no campo E-mail
    And escolher a opção "1" no campo Ticket Quantity
    And clicar em "General" na opção Ticket Type
    And clicar em "Friend" na opção How did you hear about this event?
    And selecionar a opção de "I Agree"
    And clicar no botão "Confirm Tickets"
    Then a compra é realizada com sucesso
