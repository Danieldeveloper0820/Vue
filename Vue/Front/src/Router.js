import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './Components/Authentication/Login.vue'
import Register from './Components/Authentication/Register.vue'


const Router= new VueRouter({
	routes:[
	{
		path: "/login",
		component: Login
	}, 

	{
		path:"/register",
		component:Register
	}






	]
})

Vue.use(VueRouter)
export default Router