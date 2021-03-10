# title.feature
Feature: Title check
#   I should be able to go to a website
#   and check its title

#1: Scenario 1: To get the title  of the Google page

  Scenario: Get the title of webpage  
    Given I go to the website "http://www.google.com"
    Then I expect the title of the page "Google"


#Scenario 2: To check search option in Google
# Feature: Google Searching
# 
  # Scenario: Search from the search bar produces correct images
    # Given A web browser is at the Google home page
    # When The user enters "cucumber" into the search bar
    # Then links related to "cucumber" are shown on the results page