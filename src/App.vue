<template>
	<div id='app'>
		<app-header :title='header.title' :nav='nav'></app-header>
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
	import { Events, EventBus } from '@/event-bus'
	import Header from './components/Header.vue'
	import Footer from './components/Footer.vue'

	export default {
		name: 'app',
		props: ['pages', 'footer', 'header'],
		components: {
			'app-header': Header,
			'app-footer': Footer
		},
		data () {
			return {
				'nav': this.pages,
				'links': this.footer
			}
		},
		created: function () {
			console.log('App created!')
		},
		mounted () {
			EventBus.$on(Events.EVENT_NAME, function (e) {
				console.log('App.vue on EVENT_NAME', e)
				alert('App.vue on EVENT_NAME', e)
			})

			// this.$store.dispatch('increment')
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