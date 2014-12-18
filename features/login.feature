@critical
Feature: Login
  As an admin
  I need to be able to log in

  Background:
    Given there is an admin "lol" and password "cat"

  Scenario: Admin logs in
    When I try to log in as "lol" with password "cat"
    Then I should be logged in as admin

  Scenario: Admin logs out
    Given I am logged in as "dude"
    When I log out
    Then I should be logged out
