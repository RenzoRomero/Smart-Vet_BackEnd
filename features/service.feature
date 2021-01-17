# features/service.feature
Feature: Service

  Scenario Outline: Register a new Service
    Given the service name <name> and the price <price>
    When I want to register a new service
    Then Smart-Vet save the new service

    Examples:
      | name                  | price     |
      | "Baño de Mascota"    | 15.50     |
      | "Corte de pelo de mascota"    | 17.00     |

  Scenario Outline: Searh a Service by Id
    Given the service id <id>
    When I want to search a service
    Then Smart-Vet show service details

    Examples:
      | id                          |
      | "6003d7440a895670d4c96cc7"  |

  Scenario Outline: Searh a Service that doesn't exist
    Given the service id <id>
    When I want to search a service
    Then Smart-Vet doesn't show service details

    Examples:
      | id           |
      | "4fdf583b48d6945f982879fd"  |
