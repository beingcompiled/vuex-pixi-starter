import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import vueResource from 'vue-resource'
import store from './store'

/*

	Route Components

*/

import Page from './components/Page'
import Legal from './components/Legal'

/*

	Static data

*/

import { pages, footer } from './assets/json/static.json'

/*

	Adapt JSON for router (just an example)

*/

pages.forEach(function (o) { o.component = Page })
footer.forEach(function (o) { o.component = Legal })

/*

	Vue

*/

Vue.config.productionTip = false

Vue.use(vueResource)

Vue.use(Router)

let router = new Router({
	mode: 'history',
	base: __dirname,
	routes: pages.concat(footer)
})

/* Redirect (problematic for deeplinking) */
// router.replace({ path: '/', redirect: '/' })

new Vue({
	router,
	el: '#app',
	template: '<App :pages="pages" :footer="footer"/>',
	components: { App },
	store,
	data () {
		return {
			pages: pages,
			footer: footer
		}
	}
})
