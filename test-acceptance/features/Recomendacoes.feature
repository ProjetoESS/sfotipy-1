Feature: Recomendações

    As a user of the sfotipy
    I want to get playlist recommendations based on what I have been listening to
    so that I can listen to new songs close to what I like

    Scenario: Access the explorer page
        Given I'm on the page "Explorar"
        Then I see at least "5" recommended playlists
        And I'm still on the page "Explorar"
    
    Scenario: Access the recommended playlist
        Given I'm on the page "Explorar"
        And a playlist "Melhores Pop" appears as recommended
        When I try to enter the playlist page "Melhores Pop"
        Then I'm on the playlist page "Melhores Pop"
    
    Scenario: View recommended playlist options    
        Given I'm on the page "Explorar"
        And a playlist "Melhores Pop" appears as recommended
        When I try to see the options of the playlist "Melhores Pop"
        Then I see next to the playlist "Melhores Pop" the options "Save", "Like", "Share"
        And I'm still on the page "Explorar"

    Scenario: Get link to recommended playlist
        Given I'm on the page "Explorar"
        And a playlist "Para Dormir" appears as recommended
        When I try to share the playlist "Para Dormir"
        Then the system shows a confirmation message that the link to the playlist "Para Dormir" has been copied
        And I'm still on the page "Explorar"

    Scenario: View recommended playlist play
        Given I'm on the page "Explorar"
        And a playlist "Melhores Indie" appears as recommended
        When I try to see the play of the playlist "Melhores Indie"
        Then I see the play of the playlist "Melhores Indie"

    Scenario: Change play-button from pause to play
        Given I'm on the page "Explorar"
        And a playlist "Melhores Indie" appears as recommended
        And the play-button of playlist "Melhores Indie" is a pause button
        When I click on the play-button of playlist "Melhores Indie"
        Then I see that the play-button of playlist "Melhores Indie" is a play button

    Scenario: Change play-button from play to pause
        Given I'm on the page "Explorar"
        And a playlist "Melhores Indie" appears as recommended
        And the play-button of playlist "Melhores Indie" is a play button
        When I click on the play-button of playlist "Melhores Indie"
        Then I see that the play-button of playlist "Melhores Indie" is a pause button