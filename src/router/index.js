import Vue from 'vue'
import Router from 'vue-router'
import Page from '@/components/Page'

import { pages } from './../assets/locale/en.json'

pages.forEach(function (o) { o.component = Page })

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: __dirname,
	routes: pages
})
