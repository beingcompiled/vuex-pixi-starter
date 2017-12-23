<template>
	<div id='app'>
		<app-header v-bind:nav='nav'></app-header>
		<transition name='fade' mode='out-in' v-on:after-enter='afterEnter' appear>
			<!--  
				Vue Router does not register any routing change if the same component is being used. 
				Using key, any change to the path will trigger a reload of the component with the new data.
			-->
			<router-view :key='$route.fullPath'/>
		</transition>
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
			console.log('App created!')
		},
		methods: {
			afterEnter: function (el) {
				console.log('App route entered:', this.$route.name)
			}
		}
	}
</script>

<style lang='styl'>
	@import '~styl/global.styl'
</style>