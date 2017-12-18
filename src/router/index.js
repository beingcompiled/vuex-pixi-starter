import Vue from 'vue'
import Router from 'vue-router'
import Users from '@/components/Users'
import Test from '@/components/Test'

Vue.use(Router)

const testProps = {
	msg: 'example router prop'
}

export default new Router({
	mode: 'history',
	base: __dirname,
	routes: [
		{
			path: '/',
			name: 'Users',
			component: Users
		},
		{
			path: '/test',
			name: 'Test',
			component: Test,
			props: testProps
		}
	]
})
