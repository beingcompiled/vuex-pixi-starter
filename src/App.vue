<template>
	<div id='app'>
		<app-header v-bind:nav='nav'></app-header>
		<router-view/>
		<app-footer v-bind:links='links'></app-footer>
	</div>
</template>

<script>
	import Header from './components/Header.vue'
	import Footer from './components/Footer.vue'

	export default {
		name: 'app',
		props: ['routes', 'footer'],
		components: {
			'app-header': Header,
			'app-footer': Footer
		},
		data () {
			return {
				'nav': this.routes,
				'links': this.footer
			}
		},
		created: function () {
			console.log('App created:: ')
		}
	}
</script>

<style lang='styl'>
	@import '~styl/global.styl'
</style>