Feature: cenario-Id-2

  Scenario: Compra de 3 ticket do tipo VIP usando a opção Publication
    Given acessei o site Ticketbox
    When eu escrever "Gabi" no campo First Name
    And "Teste" no campo Last Name
    And escrever "gabi@teste.com" no campo E-mail
    And escolher a opção "3" no campo Ticket Quantity
    And clicar em "Vip" na opção Ticket Type
    And clicar em "Publication" na opção How did you hear about this event?
    And escrevo "Filme Legendado" em Special requests
    And selecionar a opção de "I Agree"
    And clicar no botão "Confirm Tickets"
    Then a compra é realizada com sucesso
