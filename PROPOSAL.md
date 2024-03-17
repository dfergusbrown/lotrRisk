# Project Proposal

## Project Choice

- A LOTR version of the board game risk with simplified rules.

## Project Description 

This is the Lord of the Rings version of Risk in a browser game.  Risk is basically a game based on world conquest territory by territory.  Two players face-off to determine who ultimately can conquer the world and occupy every territory.  

Game Play Outline:
1. Placement: Each player starts out with a given number of individual troop units and places them in territories to initally claim them.  
2. Player turns: 
    a.Troop Increase - On the players turn they are first awarded troops based on the number of territories they have occupied in addition to having complete control over a region (a clearly-designated group of territories).
    b. Movement - they are allowed to make one move of a number of troops from one territory to another in their control
    c. Attack(optional) - Players are now allowed to make as many attacks as desired.  Dice rolls from both sides determine the outcome.
3. The player that conquers all territories is the winner.

I'm aware that in the original game there are cards awarded as bonuses for conquering at least one territory in that turn.  I may incorporate this as later as a stretch goal.


## Wire Frames

(see /wireframes/lotrrisk.pdf)

## User Stories

#### MVP Goals

- As a player, I want the game to conduct turns smoothly and serve prompts to help me remember my turn actions
- As a player, I want the game to recognize the win condition scenario and prompt a win message
- As a player, I want the game to restrict my ability to place within, move to and attack only the territories that are allowed within the scope of the rules.
- As a player, I would like the game to run and calculate the dice rolls as well as the gains and losses of troops on each side.
- As a player, I want the game to calculate troops awarded each turn proportional to my control of the board
- As a player, I would like to be able to visually reference how many troops are in a given territory
- As a player, I want each territory to be clearly defined and clickable
- As a player, I also want to recognize when I have clicked or selected a territory
- As a player, I want to be able to confirm my choices regarding moving troops and attacking


#### Stretch Goals

- As a player, I want the game to more closely reflect the original Risk by emulating the award cards element
- As a player, I want more of the buttons, menus, and troop elements to resemble characters or aesthetics from LOTR
- As a player, I would like to hear music or sound effects that would make the game a more immersive LOTR experience
- As a player, I want the troop representation to use icons that represent the races from LOTR
- As a player, I would like to customize my player icon with a LOTR character

#### Notionboard Template
Notionboard template for building projects ( You can use this for any project )
https://www.notion.so/GA-Unit-3-Tunr-Lab-da2c82fafd4e4a7aa654676732db9ee3

#### Timeline - Daily Accountability
Example of a Timeline to keep organized and on task for hitting goals every single day you’re on the sprint for your project.

Create your own table using this markdown table generator website:
https://www.tablesgenerator.com/markdown_tables

Do not neglect to plan, you will thank yourself later for being proactive!
| Day        |   | Task                               | Blockers | Notes/ Thoughts |
|------------|---|------------------------------------|----------|-----------------|
| Sunday     |   | Create and present proposal        |          |                 |
| Monday     |   | Create Map with defined territories|          |                 |
|            |   | Calculate game logic for map       |          |                 |
| Tuesday    |   | Create HTML elements for UI        |          |                 |
| Wednesday  |   | Create Functions                   |          |                 |
| Thursday   |   |                                    |          |                 |
| Friday     |   | Polish and Test                    |          |                 |
| Saturday   |   | Work on stretch goals              |          |                 |
| Sunday     |   | Work on icebox items if applicable |          |                 |
| Monday     |   | Presentation Day!                  |          |                 |
|            |   |                                    |          |                 |


Road Map to Finish
- Create Proposal
- Create map 
    - outline territories
    - ensure clickability
    - list territories
- Calculate game logic for map
    - Create adjacency matrix
    - calculate bonus values for territories / regions
- Create HTML elements for UI
    - buttons for passing play, confirming movement/attacks
    - troop icons
    - bottom info bar displaying number of troops, region bonus, player turn
- Create Functions
    - initialize, placementRound
    - playerTurn
        - addBonus, place, move, attack
    - restricting functions (e.g. canMoveTroops(), canAttackTerritory())
    - winCon, quitGame
- Polish styling and test

* PRESENT PROJECT*