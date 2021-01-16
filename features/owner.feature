# features/owner.feature
Feature: Owner

  Scenario Outline: Login with correct credentials
    Given An email <email> and a password <password> of an owner qweqweqwewq
    When I click on owner login in Smart-Vet App
    Then owner login successfully

    Examples:
      | email                | password              |
      | "prueba@outlook.com" | "password123"         |

  Scenario Outline: Login with wrong credentials
    Given An email <email> and a password <password> of an owner
    When I click on owner login in Smart-Vet App
    Then Smart-Vet does not allow access to Owner

    Examples:
      | email                 | password              |
      | "prueba@prueba.com"   | "password"            |
      | "noexiste@noexiste.pe"| "ggwp"                |
