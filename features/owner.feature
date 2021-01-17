# features/owner.feature
Feature: Owner

  Scenario Outline: Login with correct credentials
    Given An email <email> and a password <password> of an owner
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

  Scenario Outline: Login with the credentials of a non-existent user
    Given An email <email> and a password <password> of a non-existent user
    When I click on owner login in Smart-Vet App
    Then Smart-Vet does not allow access to Owner

    Examples:
      | email                     | password              |
      | "noexiste@noexiste.pe"    | "ggwp"                |
      | "sindominio@sindominio.pe"| "noregistrado"        |

  Scenario Outline: Search for a registered user
    Given An userid <userid> of a registered user
    When I want to find a registered user
    Then Smart-Vet show user information
    
    Examples:
      | userid                        |
      | "5fdeb9f9b06959374c487bbf"    |
