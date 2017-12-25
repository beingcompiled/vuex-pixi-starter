import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import vueResource from 'vue-resource'
import store from './store'

/*

	Route Components

*/

import Game from './components/Game'
import Page from './components/Page'
import Legal from './components/Legal'

/*

	Static data

*/

import fr from './assets/static/fr.json'
import en from './assets/static/en.json'

let staticData = (process.env.LOCALE === 'fr') ? fr : en

console.log('process.env.LOCALE: ', process.env.LOCALE)

/*

	Adapt JSON for router (just an example)

*/

staticData.game.component = Game
staticData.pages.forEach(function (o) { o.component = Page })
staticData.footer.forEach(function (o) { o.component = Legal })

/*

	Vue

*/

Vue.config.productionTip = false

Vue.use(vueResource)

Vue.use(Router)

let routes = staticData.pages.concat(staticData.game, staticData.footer)

let router = new Router({
	mode: 'history',
	base: __dirname,
	routes: routes
})

/* Redirect (problematic for deeplinking) */
// router.replace({ path: '/', redirect: '/' })

new Vue({
	router,
	el: '#app',
	template: '<App :pages="pages" :footer="footer" :header="header"/>',
	components: { App },
	store,
	data () {
		return {
			pages: staticData.pages.concat(staticData.game),
			footer: staticData.footer,
			header: staticData.header
		}
	}
})
