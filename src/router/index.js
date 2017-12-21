import Vue from 'vue'
import Router from 'vue-router'

import { routes, footer } from '@/assets/locale/en.json'

import Page from '@/components/Page'
import Legal from '@/components/Legal'

/*

	Adapt JSON for router

*/

routes.forEach(function (o) { o.component = Page })
footer.forEach(function (o) { o.component = Legal })

/*

	Router

*/

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: __dirname,
	routes: routes.concat(footer)
})
