import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import vueResource from 'vue-resource'

/*

	Route Components

*/

import Page from './components/Page'
import Legal from './components/Legal'

/*

	Static data

*/

import { routes, footer } from './assets/locale/en.json'

/*

	Adapt JSON for router

*/

routes.forEach(function (o) { o.component = Page })
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
	routes: routes.concat(footer)
})

router.replace({ path: '/', redirect: '/' })

new Vue({
	router,
	el: '#app',
	template: '<App :routes="routes" :footer="footer"/>',
	components: { App },
	data () {
		return {
			routes: routes,
			footer: footer
		}
	}
})
