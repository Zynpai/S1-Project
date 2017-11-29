var menuState = {
	
	create: function() {
		game.add.sprite(0, 0, 'menu');
		
		var skey = game.input.keyboard.addKey(Phaser.Keyboard.S);
		
		skey.onDown.addOnce(this.start, this);
		
		var tkey = game.input.keyboard.addKey(Phaser.Keyboard.T);
		
		tkey.onDown.addOnce(this.start2, this);
		
		var ckey = game.input.keyboard.addKey(Phaser.Keyboard.C);
		
		ckey.onDown.addOnce(this.start3, this);
	},
	
	
	start: function() {
		game.state.start('game');

	},
	
	start2: function() {
		game.state.start('controls');

	},
	
	start3: function() {
		game.state.start('credits');

	},
}