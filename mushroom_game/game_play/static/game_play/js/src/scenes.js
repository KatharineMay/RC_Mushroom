Crafty.scene('Game', function() {
    this.mazeMap = new Array(Game.map_grid.height); //maseMape: an array based on height
    for (var y = 0; y < Game.map_grid.height; y++) {
        this.mazeMap[y] = new Array(Game.map_grid.width); //a new array of length width is generated for each row
        for (var x = 0; x < Game.map_grid.width; ++x) { //if something is broke it might be because of this
        this.mazeMap[y][x] = { //for each location in the grid a dictionary is generated where all properties are set to false
            tree: false,
            food: false,
            mushroom: false,
            eaten: false,
        };
        }
    }

    this.player = Crafty.e('PlayerCharacter').at(22, 32);
    //this.mazeMap[this.player.at().x][this.player.at().y].eaten = true; //when the player poplulates a square then that squares eaten variable is set to true. This doesn't work... also I can't see how it is useful...
    //console.log(this.mazeMap[32])

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
                this.mazeMap[ny][nx].tree = true;
            }
        }
    }
    
    let mushrooms = [[2,5],[42,5],[2,32],[42,32]];

    for (let j = 0; j < mushrooms.length; j++) {
        this.mazeMap[mushrooms[j][1]][mushrooms[j][0]].mushroom = true; 
    }

    //nees to be updated so that all of the central path is populated with food

    let food = [[26,32],[28,32],[30,32]];

    for (let k = 0; k < food.length; k++) {
        this.mazeMap[food[k][1]][food[k][0]].food = true; 
    }
    

    for (var y = 0; y < Game.map_grid.height; y++) {
        for (var x = 0; x < Game.map_grid.width; x++){
            var at_edge = x == 0 || x == Game.map_grid.width - 1 || y == 0 || y == Game.map_grid.height - 1;

            if (at_edge || this.mazeMap[y][x].tree == true) {
                Crafty.e('Tree').at(x, y);
                this.mazeMap[y][x].tree == true; //is this needed??
            } else if (this.mazeMap[y][x].food == true) {
                Crafty.e('Food').at(x, y); //Each time a square is identified as food Crafty('Food').length is incremented
                //console.log(Crafty('Food'))
            } else if (this.mazeMap[y][x].mushroom == true) {
                Crafty.e('Mushroom').at(x, y);
            }
        }
    }

    //ISSUE: both mushroom flashcard and victory scene work but not sure how to add both in
    this.show_flashcard = this.bind('MushroomEaten', function() {
        toggleVisibility("Mushroom-Question");
    });
}, function() {
this.unbind('MushroomEaten', this.show_flashcard);
//console.log('Is this ever called?!') - look into bind and unbind
});
    /*
    this.show_victory = this.bind('FoodEaten', function() {
        console.log('Inside show_victory');
        //console.log('food', Crafty('Food').length);
        if (!Crafty('Food').length) {
            //console.log('Victory')
            Crafty.scene('Victory');
        }
    });
}, function() {
    this.unbind('FoodEaten', this.show_victory);
    //console.log('Is this ever called?!') - look into bind and unbind
});*/


Crafty.scene('Victory', function() {
    Crafty.e('2D, DOM, Text')
        .attr({ x: 0, y: 0 })
        .text('Victory!');
    
    this.restart_game = this.bind('KeyDown', function() {
        Crafty.scene('Game');
    });
}, function() {
    this.unbind('KeyDown', this.restart_game);
});

Crafty.scene('Loading', function(){
    Crafty.e('2D, DOM, Text')
        .text('Loading...')
        .attr({ x: 0, y: Game.height()/2 - 24, w: Game.width() })
        .css($text_css); //Switch this out for CSS file?

    Crafty.load({
        "images": [
        'static/game_play/images/maze_assets/16x16_forest_1.gif',
        'static/game_play/images/maze_assets/16x16_mushrooms.png',
        'static/game_play/images/maze_assets/hunter.png',
        ]}, function () {    
    //Crafty.load(['game_play/images/maze_assets/16x16_forest_1.gif'], function(){ //error Calling Crafty.load with an array of assets no longer works; see the docs for more details.
        //console.log("Loading sprites from sprite sheet")

        Crafty.sprite(16, 'static/game_play/images/maze_assets/16x16_forest_1.gif', {
            spr_tree: [0, 0]
            //https://opengameart.org/content/cc0-food-icons <-- mushrooms??
            //https://opengameart.org/content/trees-mega-pack-cc-by-30-0 <-- tree options
            //https://opengameart.org/content/cute-forest-pixel-art-kit-32x32 <-- what happens if 32x32? (cuts half the picture)
            //https://opengameart.org/content/lpc-food <-- food options [11,9] might be cute
        });

        Crafty.sprite(16, 'static/game_play/images/maze_assets/16x16_mushrooms.png', {
            spr_mushroom: [3, 0]
            });

        Crafty.sprite(16, 'static/game_play/images/maze_assets/food/egg_whole_white.png', { //good enough for now
            spr_food: [0, 0]
            });
        
        Crafty.sprite(16, 'static/game_play/images/maze_assets/hunter.png', {
            spr_player: [0, 2],
            }, 0, 2);

        Crafty.scene('Game');
    
    })

});
    