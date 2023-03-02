/* TO DO:
    - [x] Create simple board background
    - [ ] Populate background with walls
            - [ ] Split board into tiles
            - [ ] Add new colour/trees/lines to specific tiles
    - [ ] Create a movable character
    - [ ] Create checkpoints (mushrooms) that will flag flashcard
    - [ ] Create sprites (death?) that:
        - [ ] move around autonomously
        - [ ] kill character
    - [ ] Correct mushroom guess changes who kills who 
    - [ ] Create "eatable" dots

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
        width: 48,
        height: 32,
        tile: {
            width: 16,
            height: 16
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

      for (var x = 0; x < Game.map_grid.width; x++) {
        for (var y = 0; y < Game.map_grid.height; y++){
            var at_edge = x == 0 || x == Game.map_grid.width - 1 || y == 0 || y == Game.map_grid.height - 1;
            
            if (at_edge) {
                Crafty.e('2D, Canvas, Color') //what is .e - events: https://craftyjs.com/documentation/events.html
                .attr({ // .attr? Attribute??
                    x: x * Game.map_grid.tile.width,
                    y: y * Game.map_grid.tile.height, //Sets the location of the tile
                    w: Game.map_grid.tile.width,
                    h: Game.map_grid.tile.height 
                 })
                .color('rgb(20, 125, 40)');
            } else if (Math.random() < 0.06) {
                // Place a bush entity at the current tile
                Crafty.e('2D, Canvas, Color')
                  .attr({
                    x: x * Game.map_grid.tile.width,
                    y: y * Game.map_grid.tile.height,
                    w: Game.map_grid.tile.width,
                    h: Game.map_grid.tile.height
                  })
                  .color('rgb(20, 185, 40)');
            }
        }
      }
    }
  }
