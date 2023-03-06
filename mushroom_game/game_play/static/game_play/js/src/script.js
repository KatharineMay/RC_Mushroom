/* TO DO:
    - [x] Create simple board background
        - [x] Create nested array for each grid point with properties:
                - trees
                - food 
                - visited - if food is visted then change colour and add to visited counter
    - [ ] Populate background with trees and food
            - [x] if tree/food: change colour
            - [ ] if tree/food: add in sprite
            - [ ] if the character
    - [ ] Create a movable character
            - [x] add in general character with a change of colour
            - [ ] add in sprite
            - [ ] moves consistantly through the centre of the path
            - [ ] make character continuously movable?
    - [ ] Create checkpoints (mushrooms) that will flag flashcard
            - [ ] add mushroom locations in a colour chage
            - [ ] add in sprite
            - [ ] set it so that if the character interacts with the mushroom a flashcard is revealed 
    - [ ] Create sprites (death?) that:
        - [ ] move around autonomously
        - [ ] kill character
    - [ ] Correct mushroom guess changes who kills who 
    - [ ] Create "eatable" dots
        - [ ] Small tiles (middle tile of path, alternate tiles) set to white
        - [ ] As character moves through those squares colour is set to background colour
        - [ ] Some way to check that all tiles have been changed to background?
            - [ ] Value of white tiles stored somewhere
            - [ ] As each tile is changed counter is incremented
            - [ ] When counter == value
    - [ ] Game is won when all dots are eaten
    - [ ] Game is lost if 
        - [ ] mushroom is toxic but guessed as an edible
        - [ ] sprite eats ya

*/


function toggleVisibility(id) {
    if (document.getElementById(id).style.visibility == "visible") {
        document.getElementById(id).style.visibility = "hidden";
    } else {
        document.getElementById(id).style.visibility = "visible"
    }
}

function displayFlashCard() {
    toggleVisibility("Mushroom-Question");  
  }


Game = {
    map_grid: {
        width:  45,
        height: 43,
        tile: {
          width:  14,
          height: 14
        }
      },

    width: function() {
        return this.map_grid.width * this.map_grid.tile.width;
    },

    height: function() {
        return this.map_grid.height * this.map_grid.tile.height;
    },

    // Initialize and start our game
    start: function() {
      // Start crafty and set a background color so that we can see it's working
        Crafty.init(Game.width(), Game.height());
        Crafty.background('rgb(249, 223, 125');

        function genMap() {
            mazeMap = new Array(Game.map_grid.height); //maseMape: an array based on height
            for (var y = 0; y < Game.map_grid.height; y++) {
              mazeMap[y] = new Array(Game.map_grid.width); //a new array of length width is generated for each row
              for (var x = 0; x < Game.map_grid.width; ++x) { //if something is broke it might be because of this
                mazeMap[y][x] = { //for each location in the grid a dictionary is generated where all properties are set to false
                    tree: false,
                    food: false,
                    mushroom: false,
                    visited: false,
                };
              }
            }
        }

        function defineMaze() {
            let trees = [
                {   srtCoordx: 22,
                    srtCoordy: 1,
                    width: 1,
                    height: 6
                },
                {   srtCoordx: 4,
                    srtCoordy: 4,
                    width: 5,
                    height: 3
                },
                {   srtCoordx: 12,
                    srtCoordy: 4,
                    width: 7,
                    height: 3
                },
                {   srtCoordx: 26,
                    srtCoordy: 4,
                    width: 7,
                    height: 3
                },
                {   srtCoordx: 36,
                    srtCoordy: 4,
                    width: 5,
                    height: 3
                },
                {   srtCoordx: 4,
                    srtCoordy: 10,
                    width: 5,
                    height: 1
                },
                {   srtCoordx: 12,
                    srtCoordy: 10,
                    width: 1,
                    height: 9
                },
                {   srtCoordx: 16,
                    srtCoordy: 10,
                    width: 13,
                    height: 1
                },
                {   srtCoordx: 32,
                    srtCoordy: 10,
                    width: 1,
                    height: 9
                },
                {   srtCoordx: 36,
                    srtCoordy: 10,
                    width: 5,
                    height: 1
                },
                {   srtCoordx: 22,
                    srtCoordy: 11,
                    width: 1,
                    height: 4
                },
                {   srtCoordx: 13,
                    srtCoordy: 14,
                    width: 6,
                    height: 1
                },
                {   srtCoordx: 1,
                    srtCoordy: 14,
                    width: 8,
                    height: 5
                },
                {   srtCoordx: 26,
                    srtCoordy: 14,
                    width: 6,
                    height: 1
                },
                {   srtCoordx: 36,
                    srtCoordy: 14,
                    width: 8,
                    height: 5
                },
                {   srtCoordx: 1,
                    srtCoordy: 22,
                    width: 8,
                    height: 5
                },
                {   srtCoordx: 12,
                    srtCoordy: 22,
                    width: 1,
                    height: 5
                },
                {   srtCoordx: 16,
                    srtCoordy: 26,
                    width: 13,
                    height: 1
                },
                {   srtCoordx: 32,
                    srtCoordy: 22,
                    width: 1,
                    height: 5
                },
                {   srtCoordx: 36,
                    srtCoordy: 22,
                    width: 8,
                    height: 5
                },
                {   srtCoordx: 22,
                    srtCoordy: 27,
                    width: 1,
                    height: 4
                },
                {   srtCoordx: 4,
                    srtCoordy: 30,
                    width: 5,
                    height: 1
                },
                {   srtCoordx: 12,
                    srtCoordy: 30,
                    width: 7,
                    height: 1
                },
                {   srtCoordx: 26,
                    srtCoordy: 30,
                    width: 7,
                    height: 1
                },
                {   srtCoordx: 36,
                    srtCoordy: 30,
                    width: 5,
                    height: 1
                },
                {   srtCoordx: 8,
                    srtCoordy: 31,
                    width: 1,
                    height: 4
                },
                {   srtCoordx: 36,
                    srtCoordy: 31,
                    width: 1,
                    height: 4
                },
                {   srtCoordx: 1,
                    srtCoordy: 34,
                    width: 4,
                    height: 1
                },
                {   srtCoordx: 12,
                    srtCoordy: 34,
                    width: 1,
                    height: 4
                },
                {   srtCoordx: 16,
                    srtCoordy: 34,
                    width: 13,
                    height: 1
                },
                {   srtCoordx: 32,
                    srtCoordy: 34,
                    width: 1,
                    height: 4
                },
                {   srtCoordx: 40,
                    srtCoordy: 34,
                    width: 4,
                    height: 1
                },
                {   srtCoordx: 22,
                    srtCoordy: 35,
                    width: 1,
                    height: 4
                },
                {   srtCoordx: 4,
                    srtCoordy: 38,
                    width: 15,
                    height: 1
                },
                {   srtCoordx: 26,
                    srtCoordy: 38,
                    width: 15,
                    height: 1
                }
            ]
            for (let i = 0; i < trees.length; i++) {
                let y = trees[i].srtCoordy;
                let x = trees[i].srtCoordx;
                for (let ny = y; ny <= y + trees[i].height - 1; ny++) {
                    for (let nx = x; nx <= x + trees[i].width - 1; nx++) {
                        mazeMap[ny][nx].tree = true;
                    }
                }
            }
            
            let mushrooms = [[2,5],[42,5],[2,32],[42,32]];

            for (let j = 0; j < mushrooms.length; j++) {
                mazeMap[mushrooms[j][1]][mushrooms[j][0]].mushroom = true; 
            }

            mazeMap[32][24].food = true;
        }
       
        function drawMaze() {
            console.log(mazeMap)
            for (var y = 0; y < Game.map_grid.height; y++) {
                for (var x = 0; x < Game.map_grid.width; x++){
                    var at_edge = x == 0 || x == Game.map_grid.width - 1 || y == 0 || y == Game.map_grid.height - 1;
    
                    if (at_edge || mazeMap[y][x].tree == true) {
                        Crafty.e('Tree').at(x,y);
                        mazeMap[y][x].tree == true; //is this needed??
                    } else if (mazeMap[y][x].food == true) {
                        Crafty.e('Food').at(x,y);
                    } else if (mazeMap[y][x].mushroom == true) {
                        Crafty.e('Mushroom').at(x,y);
                    }
                }
            }

            Crafty.e('PlayerCharacter').at(22, 32);
        }
        genMap();
        defineMaze();
        drawMaze();
    
    }
}
