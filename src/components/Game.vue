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

export default {

	name: 'Game',

	data () {
		return {
			counter: 0
		}
	},
	
	mounted () {
		console.log('mounted')
		
		let cvs = document.getElementById('cvs')

		let app = new Pixi.Application(800, 600, {view: cvs, backgroundColor : 0x1099bb});

		let logo = Pixi.Sprite.fromImage(imgLogo)
		logo.anchor.set(0.5);
		logo.x = app.screen.width / 2;
		logo.y = app.screen.height / 2;
		app.stage.addChild(logo)

		let basicText = new Pixi.Text('counter: 0');
		basicText.x = 10;
		basicText.y = 10;
		app.stage.addChild(basicText)

		app.ticker.add((delta) => {
			logo.rotation += 0.1 * delta;

			this.counter++
			basicText.text = 'counter: ' + this.counter
		})	
	}
}
</script>

<style lang="stylus" scoped>
	@import '~styl/component/Game.styl'
</style>
