<template>
	<div id='app'>
		<app-header v-bind:nav='nav'></app-header>
		<router-view/>
		<app-footer v-bind:links='footer'></app-footer>
	</div>
</template>

<script>
	import { routes, footer } from './assets/locale/en.json'
	import Header from './components/Header.vue'
	import Footer from './components/Footer.vue'

	export default {
		name: 'app',
		components: {
			'app-header': Header,
			'app-footer': Footer
		},
		data () {
			return {
				'nav': routes,
				'footer': footer
			}
		},
		created: function () {
			console.log('App created:: ')
		}
	}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
body {
	margin: 0;
	padding: 0;
}
</style>