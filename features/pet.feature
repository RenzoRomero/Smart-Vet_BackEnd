# features/pet.feature
Feature: Pet

  Scenario: Register a new Pet
    Given the owner id <id> and the pet name <name>
    When I click create a pet
    Then Smart-Vet save the new pet

    Examples:
      | id                          | name            |
      | "5fdede94e813bb59642a18f3"  | "Rocko"         |

  Scenario: Searh a Pet by Owner
    Given the owner id <id>
    When I want to search the pets of an owner
    Then Smart-Vet list the pets

    Examples:
      | id                          |
      | "5fdede94e813bb59642a18f3"  |

  Scenario: Searh a Pet by Id
    Given the pet id <id>
    When I want to search a pet
    Then Smart-Vet show pet details

    Examples:
      | id                          |
      | "5fdf583b48d6945f982879fc"  |

  Scenario: Searh a Pet that doesn't exist
    Given the pet id <id>
    When I want to search a pet
    Then Smart-Vet doesn't show pet details

    Examples:
      | id           |
      | "4fdf583b48d6945f982879fd"  |
