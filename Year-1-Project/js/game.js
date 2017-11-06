
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, init: init });

var score = 0;
var text;

function preload() {
	
    game.load.spritesheet('player', 'img/placeholderplayer.png', 50, 50);
	game.load.image('sky', 'img/sky.png');
	game.load.image('laser', 'img/star.png');
}

var player;
var cursors;
var lasers;  
  

function init() {
	// Listen to space & enter keys
	var keys = [Phaser.KeyCode.SPACEBAR];
	// Create Phaser.Key objects for listening to the state
	phaserKeys = game.input.keyboard.addKeys(keys);
	// Capture these keys to stop the browser from receiving this event
	game.input.keyboard.addKeyCapture(keys);
}

function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);

	game.add.sprite(0, 0, 'sky');
	player = game.add.sprite(32, game.world.height - 150, 'player');
	game.physics.arcade.enable(player);
	
	player.animations.add('left', [2], 1, true);
    player.animations.add('right', [3], 1, true);
	player.animations.add('top', [1], 1, true);
    player.animations.add('down', [4], 1, true);
	
	cursors = game.input.keyboard.createCursorKeys();
	
	// Create the group using the group factory
	lasers = game.add.group();
	// To move the sprites later on, we have to enable the body
	lasers.enableBody = true;
	// We're going to set the body type to the ARCADE physics, since we don't need any advanced physics
	lasers.physicsBodyType = Phaser.Physics.ARCADE;
	/*
 
		This will create 20 sprites and add it to the stage. They're inactive and invisible, but they're there for later use.
		We only have 20 laser bullets available, and will 'clean' and reset they're off the screen.
		This way we save on precious resources by not constantly adding & removing new sprites to the stage
 
	*/
	lasers.createMultiple(20, 'laser');
 
	/*
 
		Behind the scenes, this will call the following function on all lasers:
			- events.onOutOfBounds.add(resetLaser)
		Every sprite has an 'events' property, where you can add callbacks to specific events.
		Instead of looping over every sprite in the group manually, this function will do it for us.
 
	*/
	lasers.callAll('events.onOutOfBounds.add', 'events.onOutOfBounds', resetLaser);
	// Same as above, set the anchor of every sprite to 0.5, 1.0
	lasers.callAll('anchor.setTo', 'anchor', 0.5, 1.0);
 
	// This will set 'checkWorldBounds' to true on all sprites in the group
	lasers.setAll('checkWorldBounds', true);
}

function fireLaser() {
	// Get the first laser that's inactive, by passing 'false' as a parameter
	var laser = lasers.getFirstExists(false);
	if (laser) {
		// If we have a laser, set it to the starting position
		laser.reset(player.x +25, player.y );
		// Give it a velocity of -500 so it starts shooting
		laser.body.velocity.y = -500;
	}
 
}

function resetLaser(laser) {
	// Destroy the laser
	laser.kill();
}

function update() {
    player.body.velocity.x = 0;
	player.body.velocity.y = 0;

    if (cursors.left.isDown)
    {
        //  Move to the left
        player.body.velocity.x = -150;

        player.animations.play('left');
    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
        player.body.velocity.x = 150;

        player.animations.play('right');
    }
    else if (cursors.down.isDown)
    {
        //  Move down
        player.body.velocity.y = 150;

        player.animations.play('down')
    }
	else if (cursors.up.isDown)
    {
        //  Move up
        player.body.velocity.y = -150;

        player.animations.play('top')
	}
	else
	{
        //  Stand still
        player.animations.stop();

        player.frame = 0;
    }
	
	// Loop over the keys
	for (var index in phaserKeys) {
		// Save a reference to the current key
		var key = phaserKeys[index];
		// If the key was just pressed, fire a laser
		if (key.justDown) {
			fireLaser();
		}
	}
    
  
}
