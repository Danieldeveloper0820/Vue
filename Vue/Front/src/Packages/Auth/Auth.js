export default function(Vue){
	Vue.auth={
		setToken(token , expiration){  //Almacenamos el token en nuestro localstorage
			localStorage.setItem('token' , token)
			localStorage.setItem('expiration' , expiration)
		},

		getToken () {
			var token = localStorage.getItem('token')
			var expiration = localStorage.getItem('expiration')

			if(!token || !expiration) //Si el token no esta almacenado o la expiracion no esta almacenada
				return null;

			if (Date.now()> parseInt(expiration)) {
				this.destroyToken();
				return null;
			} else{
				return token;


			}

		},

		destroyToken (){  //Basicamente sera el deslogeo del sistema 

			localStorage.removeItem('token')
			localStorage.removeItem('expiration')

		},



		isAuthenticated (){ 
			if(this.getToken())
				return true
			else	
				return false



		}
	}
	Object.defineProperties(Vue.prototype,{  //Creamos este bloque para tener acceso a la propiedad auth
		$auth: {
			get: ()=>{
				return Vue.auth
			}
		}


	})
}