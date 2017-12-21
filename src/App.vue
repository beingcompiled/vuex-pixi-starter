<template>
	<div id='app'>
		<app-header v-bind:nav='nav'></app-header>
		<router-view/>
	</div>
</template>

<script>
	import Header from './components/Header.vue'

	import { pages } from './assets/locale/en.json'

	export default {
		name: 'app',
		components: {
			'app-header': Header
		},
		data () {
			return {
				'nav': pages
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
	margin-top: 60px;
}
a {
	color: red;
}
</style>
