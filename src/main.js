import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(vueResource)

router.replace({ path: '/', redirect: '/' })

new Vue({
	router,
	el: '#app',
	template: '<App/>',
	components: { App }
})
