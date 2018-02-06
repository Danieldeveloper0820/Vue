import Vue from 'vue'
import App from './App.vue'
import Router from './Router.js'
import VueResource from 'vue-resource'
import Auth from './Packages/Auth/Auth.js'

Vue.use(VueResource)
Vue.use(Auth)

//Basicamente son los middlewere que utilizabamos en laravel ,el to se usa para saber a donde vamos
//From es la ruta actual en la que estamos y next 

Router.beforeEach(  
	(to, from , next)=>{
		if (to.matched.some(record=>record.meta.forVisitors)) {
			if (Vue.auth.isAuthenticated()) {

				next({

					path: '/Feed'
				})
			} else next()


		}

		 else if (to.matched.some(record=>record.meta.forAuth)) {
			if ( !Vue.auth.isAuthenticated()) {

				next({

					path: '/Login'
				})
			} else next()


		}



		 else next()


	}


	)

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router
})
