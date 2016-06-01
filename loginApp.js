(function(){
var app = angular.module("loginApp", []); 

console.log("entre al modulo");//debugger borrar--------------

app.controller("loginCtrl", ['$scope','$http','$window', function($scope, $http, $window) {
    	
    	var vm = this;	
    
		vm.fdata = {};//no se esta utilizando 
		
    	console.log("entre al controlador");//debugger borrar--------------
    	
    	vm.login = function(){
  	 	
  		console.log("se muestra exitosamente");//debugger borrar--------------		

		var req = {
			method: 'POST',
			url: 'http://sharelatex.cenat.ac.cr:8080/interfazWRF/Login',
			headers: {
				'Content-Type': 'text/javascript'
			},
			data: vm.username+"&"+vm.password
		}

		$http(req).then(function (response) {       //successCallback, status, headers, config
			console.log("entre al exitoso");//debugger borrar--------------
			console.log(response);//debugger borrar--------------
			var respuesta = response.data;
			var comparacion = "autenticado";
			console.log(typeof respuesta);//debugger borrar--------------
			console.log(typeof comparacion);//debugger borrar--------------
			//compara lo que devuelve el servicio
			if(respuesta.localeCompare(comparacion)){
				console.log("entre en el autenticado t envio a proyectos");//debugger borrar--------------
				//funcion que envia los datos para el nuevo proyecto 
				var req2 = {
							method: 'POST', 
							url: 'http://sharelatex.cenat.ac.cr:8080/interfazWRF/Proyectos',
							data: "nuser"+"¡"+vm.username
				};
				$http(req2).then(function (response) {       //successCallback
						console.log("entre al exitoso");//debugger borrar--------------
						console.log(response.data);//debugger borrar--------------
  				}, function (response) {
    	    			console.log("entre al error");//debugger borrar--------------
						console.log(response.data);//debugger borrar--------------
  				});
  				//--------------------------------------------------	
				$window.location.href = "proyectos.html";
			}else if(respuesta.localeCompare("error")){
				console.log("entre al error tengo q mostrar uno ");//debugger borrar--------------
				document.getElementById("error").innerHTML="Usuario o Contraseña incorrectos";
			}
    		
  		}, function (data) {
    	    	console.log("entre al error");//debugger borrar--------------
    	   		console.log(data);//debugger borrar--------------
    	   		document.getElementById("error").innerHTML="Usuario o Contraseña incorrectos";
    	   		
  		});
			
	};
	

}]);
})();
