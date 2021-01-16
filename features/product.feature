# features/product.feature
Feature: Product

  Scenario: Register a new Product
    Given the product name <name>, the price <price> and stock <stock>
    When I want to register a new product
    Then Smart-Vet save the new product

    Examples:
      | name                  | price     | stock   |
      | "Shampoo Antipulgas"    | 15.50     | 10      |
      | "Correa para perro"    | 17.00     | 20      |

  Scenario: Searh a Product by Id
    Given the product id <id>
    When I want to search a product
    Then Smart-Vet show product details

    Examples:
      | id                          |
      | "5fdf7309927a622eb4c99e95"  |

  Scenario: Searh a Product that doesn't exist
    Given the product id <id>
    When I want to search a product
    Then Smart-Vet doesn't show product details

    Examples:
      | id           |
      | "4fdf583b48d6945f982879fd"  |
