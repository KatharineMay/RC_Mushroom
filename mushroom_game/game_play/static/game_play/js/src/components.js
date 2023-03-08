Crafty.c('Grid', {
    init: function() {
        this.attr({
            w: Game.map_grid.tile.width,
            h: Game.map_grid.tile.height
        })
    },
    at: function(x, y) {
        if (x === undefined && y === undefined) { //Not sure about this...
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
        this.requires('Actor, Solid, spr_tree');
    },
});

Crafty.c('Food', {
    init: function() {
        this.requires('Actor, spr_food'); 
        
    },

    collect: function() {
        this.destroy(); //3. Decrements Crafty('Food').length
        //console.log('Food destroyed', Crafty('Food').length);
        Crafty.trigger('FoodEaten', this); //4. Crafty.trigger() combines with .bind?? Read up on https://www.digitalocean.com/community/conceptual-articles/understanding-this-bind-call-and-apply-in-javascript and https://www.w3schools.com/js/js_function_bind.asp
    }
});

Crafty.c('Mushroom', {
    init: function() {
        this.requires('Actor, spr_mushroom');
    },

    collect: function() {
        this.destroy();
        Crafty.trigger('MushroomEaten', this);
    }
});

Crafty.c('PlayerCharacter', {
    init: function() {
      this.requires('Actor, Fourway, Collision, spr_player, SpriteAnimation')
        .fourway(4) //Fourway is a component that allows an entity to have it’s movement controlled by one of two four-direction control sets: W, A, S, and D or the Up, Left, Down, and Right keys
        .stopOnSolids()
        .onHit('Food', this.eatFood) //1. When the player hits a food square, this.eatFood is called
        .onHit('Mushroom', this.eatMushroom)
        .reel('PlayerMovingUp', 600, 0, 0, 2)
        .reel('PlayerMovingRight', 600, 0, 1, 2)
        .reel('PlayerMovingDown', 600, 0, 2, 2)
        .reel('PlayerMovingLeft', 600, 0, 3, 2);
        
        this.animationSpeed = 10;
        

        
        this.bind('NewDirection', function(data){
            console.log('data', data.x)
            if (data.x > 0 ) {
                this.animate('PlayerMovingRight',this.animationSpeed, -1);
                
            } else if (data.x < 0) {
                this.animate('PlayerMovingLeft',this.animationSpeed, -1);
                
            } else if (data.y > 0) {
                this.animate('PlayerMovingDown',this.animationSpeed, -1);
                
            } else if (data.y < 0) {
                this.animate('PlayerMovingUp',this.animationSpeed, -1);
                
            } else {
                this.pauseAnimation();
            }
        });
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
        //console.log('Inside eat_Food');
        food = data[0].obj;
        food.collect(); //2. Calls food.collect() within Crafty.c('Food') (difference in capitalisation?)
    },


    eatMushroom: function(data) { //where does this data come from?
        mushroom = data[0].obj;
        mushroom.collect();
    }
});






