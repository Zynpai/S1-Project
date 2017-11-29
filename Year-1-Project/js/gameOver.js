var gameOver = {
	
	create: function() {
		game.add.sprite(0, 0, 'gameOver');
		
		var rkey = game.input.keyboard.addKey(Phaser.Keyboard.R);
		
		rkey.onDown.addOnce(this.start, this);
	},
	
	
	start: function() {
		game.state.start('game');

	},
}