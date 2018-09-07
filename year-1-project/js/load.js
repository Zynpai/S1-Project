var loadState = {

	preload: function() {
		loading = this.add.sprite(0, 0, 'loading');
		
		game.load.spritesheet('player', 'img/player.png', 52, 52);
		game.load.image('baddie', 'img/baddie.png');
		game.load.image('sbaddie', 'img/sbaddie.png');
		game.load.image('sky', 'img/sky.png');
		game.load.image('gameOver', 'img/gameover.png');
		game.load.image('laser', 'img/star.png');
		game.load.image('menu', 'img/menu.jpg');
		game.load.image('Bstairs', 'img/bstairs.png');
		game.load.image('stairs', 'img/stairs.png');
		game.load.image('block', 'img/block.png');
		game.load.image('slaser', 'img/slaser.png');
		game.load.image('Qskill', 'img/qskill.png');
		game.load.image('QLskill', 'img/qlskill.png');
		game.load.image('Eskill', 'img/eskill.png');
		game.load.image('ELskill', 'img/elskill.png');
		game.load.image('Toolbar', 'img/toolbar.png');
		game.load.image('elaser', 'img/eb.png');
		game.load.image('bossNF', 'img/boss2.png');
		game.load.image('bossF', 'img/boss1.png');
		game.load.image('blaser', 'img/blaser.png');
		game.load.image('bossF1', 'img/bossflame.png');
		game.load.image('bossF2', 'img/bossflame2.png');
		game.load.image('win', 'img/win.png');
		game.load.image('gb', 'img/gb.png');
		game.load.image('controls', 'img/controls.png');
		game.load.image('credits', 'img/credits.png');
	},

	
	create: function() {
		var l = game.add.sprite(0, 0, 'loading');
		game.state.start('menu');
		
	},
	
}