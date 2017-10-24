var app = angular.module('docsSimpleDirective', [])

app.controller('Controller', function ($scope, nameStorage) {
    console.log(nameStorage)
  
   
  
})
    .factory('nameStorage', function () {
        var product = []
      return
      {
        getData: getArr()
        {
            return product
        }
        addData: addData(name)
        {
            product.push(name);
        }

      }
});


app.directive('myCustomer', function() {
    return {
      templateUrl: 'var.html',
      scope:
      {
        param:'=info'
      },
      controller: 'myController',
      link: function(scope, element, attrs, ctrl) {
       
      }
    };
   
  });
  app.controller('myCtrl', function($scope, $element, $attrs) {
    this.name = 'myCtrl'
  