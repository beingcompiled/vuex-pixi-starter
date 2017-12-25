<template>
	<section class='game'>
		<div class='content'>
			<canvas id='cvs' class='canvas'></canvas>
		</div>
	</section>
</template>

<script>
import imgLogo from '@/assets/image/logo.png';

import * as Pixi from 'pixi.js'
console.log('---', Pixi)

export default {

	name: 'Game',

	data () {
		return {

		}
	},
	
	mounted: () => {
		let cvs = document.getElementById('cvs')

		var app = new PIXI.Application(800, 600, {view: cvs, backgroundColor : 0x1099bb});

		var logo = PIXI.Sprite.fromImage(imgLogo)
		logo.anchor.set(0.5);
		logo.x = app.screen.width / 2;
		logo.y = app.screen.height / 2;
		app.stage.addChild(logo)

		app.ticker.add(function(delta) {
		    logo.rotation += 0.1 * delta;
		})
	}
}
</script>

<style lang="stylus" scoped>
	@import '~styl/component/Game.styl'
</style>
