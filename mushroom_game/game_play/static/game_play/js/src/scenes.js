Crafty.scene('Game', function() {
    this.mazeMap = new Array(Game.map_grid.height); //maseMape: an array based on height
        for (var y = 0; y < Game.map_grid.height; y++) {
          this.mazeMap[y] = new Array(Game.map_grid.width); //a new array of length width is generated for each row
          for (var x = 0; x < Game.map_grid.width; ++x) { //if something is broke it might be because of this
            this.mazeMap[y][x] = { //for each location in the grid a dictionary is generated where all properties are set to false
                tree: false,
                food: false,
                mushroom: false,
                visited: false,
            };
          }
        }

        console.log(this.mazeMap);

        this.player = Crafty.e('PlayerCharacter').at(22, 32);
        this.mazeMap[this.player.at().x][this.player.at().y].visited = true;

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

        this.mazeMap[32][24].food = true;

        for (var y = 0; y < Game.map_grid.height; y++) {
            for (var x = 0; x < Game.map_grid.width; x++){
                var at_edge = x == 0 || x == Game.map_grid.width - 1 || y == 0 || y == Game.map_grid.height - 1;

                if (at_edge || this.mazeMap[y][x].tree == true) {
                    Crafty.e('Tree').at(x, y);
                    this.mazeMap[y][x].tree == true; //is this needed??
                } else if (this.mazeMap[y][x].food == true) {
                    Crafty.e('Food').at(x, y);
                } else if (this.mazeMap[y][x].mushroom == true) {
                    Crafty.e('Mushroom').at(x, y);
                }
            }
        }

        this.show_victory = this.bind('FoodEaten', function() {
            if (!Crafty('Food').length) {
                Crafty.scene('Victory');
            }
        });
    }, function() {
        this.unbind('FoodEaten', this.show_victory);
    });
    

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