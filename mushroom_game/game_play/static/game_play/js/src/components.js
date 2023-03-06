Crafty.c('Grid', {
    init: function() {
        this.attr({
            w: Game.map_grid.tile.width,
            h: Game.map_grid.tile.height
        })
    },
    at: function(x, y) {
        if (x === undefined && y === undefined) {
            return { x: this.x/Game.map_grid.tile.width, y: this.y/Game.map_grid.tile.height }
        } else {
            this.attr({x: x*Game.map_grid.tile.width, y: y*Game.map_grid.tile.height});
            return this;
        }
    }
});

Crafty.c('Actor', {
    init: function() {
        this.requires('2D, Canvas, Grid');
    },
});

Crafty.c('Tree', {
    init: function() {
        this.requires('Actor, Color, Solid')
        .color('rgb(20,125,40)');
    },
});

Crafty.c('Food', {
    init: function() {
        this.requires('Actor, Color') //Not a solid - "collision"?? 
        .color('rgb(216, 162, 162)');
    },

    collect: function() {
        this.destroy();
        Crafty.trigger('FoodEaten', this);
    }
});

Crafty.c('Mushroom', {
    init: function() {
        this.requires('Actor, Color') //"collision"??
        .color('rgb(235, 26, 26)');
    },

    collect: function() {
        this.destroy();
        Crafty.trigger('MushroomEaten', this);
    }
});

Crafty.c('PlayerCharacter', {
    init: function() {
      this.requires('Actor, Fourway, Color, Collision')
        .fourway(4) //Fourway is a component that allows an entity to have it’s movement controlled by one of two four-direction control sets: W, A, S, and D or the Up, Left, Down, and Right keys
        .color('rgb(90, 86, 223)')
        .stopOnSolids()
        .onHit('Food', this.eatFood)
        .onHit('Mushroom', this.eatMushroom);
    },

    stopOnSolids: function() {
        this.onHit('Solid', this.stopMovement);
        return this;
    },


    //Doesn't work??
    stopMovement: function() {
        this._speed = 0;
        if (this._movement) {
            this.x -= this._movement.x; //play around with this later - what is it doing?
            this.y -= this._movement.y;
        }
    },

    eatFood: function(data) { //where does this data come from?
        food = data[0].obj;
        food.collect();
    },


    eatMushroom: function(data) { //where does this data come from?
        mushroom = data[0].obj;
        mushroom.collect();
    }
});






