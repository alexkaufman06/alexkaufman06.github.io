Feature: Check that Eratosthenes project can be navigated to and works

  Scenario: Visit my website and click button
    Given I have navigated to my website and clicked on the Eratosthenes project
    When I enter in a value to count to of 15 and click the button
    Then I expect that the number of prime numbers returned is correct