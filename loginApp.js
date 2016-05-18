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
			data: vm.username+"&"+vm.password
		};

		$http(req).then(function (response) {       //successCallback
			console.log("entre al exitoso");//debugger borrar--------------
			console.log(response.data);//debugger borrar--------------
    			$scope.result = response.data;
    		// $window.location.href = "" ---aqui va el link de la pagina que sigue
  		}, function (response) {
    	    		console.log("entre al error");//debugger borrar--------------
    	   		console.log(response.data);//debugger borrar--------------
    		//$scope.error = response.data;
  		});
			
	};
	

}]);
})();
