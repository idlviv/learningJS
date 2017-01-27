//index.html
<!DOCTYPE html>
<html lang="en">
  <head>
  <meta charset="UTF-8">
  <title>Title</title>


  <link href="index.css" rel="stylesheet">
  </head>
  <body ng-app="id">
  <div ng-controller="myController">
  <input type="text" ng-model="user">
  <h1>Hello, {{user}}</h1>
Loaded
</div>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.1/angular.js"></script>
  <script src="index.js"></script>

  </body>
  </html>


//index.js
  angular.module('id',[]);

angular.module('id').controller('myController', function ($scope) {
  $scope.user = 'John';
});

