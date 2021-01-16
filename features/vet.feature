# features/vet.feature
Feature: Vet

  Scenario Outline: Login with correct credentials
    Given An email <email> and a password <password> of a vet
    When I click on vet login in Smart-Vet App
    Then vet login successfully

    Examples:
      | email                | password              |
      | "luis123@outlook.com" | "password123"         |

  Scenario Outline: Login with wrong credentials
    Given An email <email> and a password <password> of a vet
    When I click on vet login in Smart-Vet App
    Then Smart-Vet does not allow access to Vet

    Examples:
      | email                 | password              |
      | "prueba@prueba.com"   | "password"            |
      | "noexiste@noexiste.pe"| "ggwp"                |
