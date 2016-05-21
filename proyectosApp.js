(function () {
var app = angular.module("proyectoApp", []); 

console.log("entro modulo");//debugger eliminar-----------------------------

app.controller("proyectoCtrl",['$scope','$window','$http', function($scope, $window, $http) {
	console.log("entro controler");//debugger eliminar-----------------------------
	//inicializadores necesarios para la ventana pop up
	$scope.showModal = false;
    $scope.buttonClicked = "";
    $scope.toggleModal = function(btnClicked){
        $scope.buttonClicked = btnClicked;
        $scope.showModal = !$scope.showModal;
    };
    //funciones extra de prueba
    $scope.msj ="hola mundo";
    /*
    //funcion para cargar los proyectos 
	$http.get(/*direccion en server para traer los proyectos).success(function(data){
		$scope.proyectos=data
	})
	$scope.gridOptions = {
		data: 'proyectos'

	}
	*/
	//prueba para el ng repaet 
	$scope.projects = [
	{
		nombre: "mi primer proyecto", descripcion: "probando el sistema"
	},
	{
		nombre: "probando wrf", descripcion: "prueba"
	},
	{
		nombre: "ejemplo1", descripcion: "ejemplo del area metropolitana"
	},
	{
		nombre: "ejercicioA", descripcion: "ejercicio del proyeto"
	},
	{
		nombre: "meteorologico de CR", descripcion: "prueba para el meteorologico"
	},
	{
		nombre: "wrf-001", descripcion: "ejercicio de prueba"
	}
	];  
	//funcion para mostrar la informacion 
	$scope.showInfo = false; //mantiene la info oculta
	$scope.show = function(name, descripcion){
		$scope.showInfo = true;	
		document.getElementById("nombre").innerHTML=name;
		document.getElementById("descripcion").innerHTML = descripcion;
	};
	//funcion para devolverlo a la pagina de salida 
	$scope.logOut = function(){
		//$window.location.href = "" ---aqui va el link de la pagina que sigue
	};
    //------------------------------------------------
  }]); 
//codigo de la ventana que se mostrara 
app.directive("modal", function () {
		console.log("entro directiva");//debugger eliminar-----------------------------
    return {
      template: '<div class="modal fade">' + 
          '<div class="modal-dialog">' + 
            '<div class="modal-content">' + 
              '<div class="modal-header">' + 
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' + 
                '<h4 class="modal-title">Nuevo Proyecto</h4>' + 
              '</div>' + 
              '<div class="modal-body" ng-transclude></div>' + 
            '</div>' + 
          '</div>' + 
        '</div>',
      restrict: 'E',
      transclude: true,
      replace:true,
      scope:true,
      link: function postLink(scope, element, attrs) {
          scope.$watch(attrs.visible, function(value){
          if(value == true)
            $(element).modal('show');
          else
            $(element).modal('hide');
        });

        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
          });
        });

        $(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = false;
          });
        });
      }
    };
  });
//-------------------------------------------------

})();