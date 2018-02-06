import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './Components/Authentication/Login.vue'
import Register from './Components/Authentication/Register.vue'
import Feed from './Components/Views/Feed.vue'


const Router= new VueRouter({
	routes:[
	{
		path: "/Login",
		component: Login,
		meta: {
			forVisitors: true
		}
	}, 

	{
		path:"/Register",
		component:Register,
		meta:{
			forVisitors: true
		}
	},


	{
		path:"/Feed",
		component: Feed,
		meta:{
			forAuth: true
		}


	}


	]
})

Vue.use(VueRouter)
export default Router