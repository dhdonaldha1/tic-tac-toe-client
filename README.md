# Tic Tac Toe: A Game of Wits

This application allows the user to play tic tac toe with another player either as X or O. The user will also be able to view previous game history.  

## Important Links
<a href="https://git.generalassemb.ly/ga-wdi-boston/game-project/blob/master/requirements.md">Requirements</a>

## Planning Story
At first I prioritized completing the sign up/in, change password and sign out html and javascript functions.  Whenever I got stuck, I would send a ticket and work on the scss style part.  Next I created the board. At first I tried to create it using the div column we learned but failed to. Then I made the board using flex containers.  Once the board was aligned and centered I added the X and O, then added the function that set each turn to a player and each player to X and O. Next, was to ensure that tiles that are taken cannot be clicked.  Once the win conditions were created, be able to display to the users who the winner is. Make sure each move is updating API.  Create a proper reset button.  Saved all the styling and show() and hide() functions for the end.

### User Stories

- As a user I want to sign in/up
- As a user I want to change my password
- As a user I want to sign out
- As a user I want to start a new game
- As a user I want to play as X or O
- As a user I want to see who wins
- As a user I want to see previous games
- As a user I want to view number of games played

### Technologies Used

- jQuery
- HTML/CSS
- Bootstrap
- Javascript

### Unsolved Problems

- Still need to build a tic tac toe board with a working API that will record each move
- Would like to eventually add a versus ai option with logic
- Still need to find a way to reset the board so tiles can be clickable again
- Still create functional get request to see number of previous games

## Images

---

#### Wireframe:
![wireframe]
<img src=https://imgur.com/a/7txH0yp>
