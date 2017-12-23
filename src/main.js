import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import vueResource from 'vue-resource'

/*

	Route Components

*/

import Page from './components/Page'
import Legal from './components/Legal'
import Test from './components/Test'
import Users from './components/Users'

/*

	Static data

*/

import { pages, examples, footer } from './assets/json/static.json'

/*

	Adapt JSON for router (just an example)

*/

pages.forEach(function (o) { o.component = Page })
footer.forEach(function (o) { o.component = Legal })
examples[0].component = Test
examples[1].component = Users

/*

	Vue

*/

Vue.config.productionTip = false

Vue.use(vueResource)

Vue.use(Router)

let router = new Router({
	mode: 'history',
	base: __dirname,
	routes: pages.concat(examples, footer)
})

/* Redirect (problematic for deeplinking) */
// router.replace({ path: '/', redirect: '/' })

new Vue({
	router,
	el: '#app',
	template: '<App :pages="pages" :footer="footer"/>',
	components: { App },
	data () {
		return {
			pages: pages,
			footer: footer
		}
	}
})
