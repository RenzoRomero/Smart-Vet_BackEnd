# features/promotion.feature
Feature: Promotion

  Scenario Outline: Register a new Promotion
    Given the promotion name <name> and the description <description>
    When I want to register a new promotion
    Then Smart-Vet save the new promotion

    Examples:
      | name                         | description                       |
      | "2x1 en baño de mascotas"    | "El segundo baño sale gratis"     |
      | "Corte a S/.20.00"           | "El cotro de pelo de mascotas pequeñas cuesta S/.20.00"     |

  Scenario Outline: Searh a Promotion by Id
    Given the promotion id <id>
    When I want to search a promotion
    Then Smart-Vet show promotion details

    Examples:
      | id                          |
      | "600442cc168e694064cc6feb"  |

  Scenario Outline: Searh a Promotion that doesn't exist
    Given the promotion id <id>
    When I want to search a promotion
    Then Smart-Vet doesn't show promotion details

    Examples:
      | id           |
      | "4fdf583b48d6945f982879fd"  |
