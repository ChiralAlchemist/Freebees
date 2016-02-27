angular.module('auth', [])

.controller('AuthController', function($scope, $window, AuthFactory) {
  $scope.user = {};
  $scope.login = function() {
    console.log("Login called")
    AuthFactory.login({
      username: $scope.user.username,
      password: $scope.user.password
    }, function(data) {
      if(data.success) {
        $window.localStorage.token = data.token;
        alert(data.message);
      } else {
        alert(data.message);
      }
    });
  }

  $scope.signup = function() {
    console.log("Signup called")
    AuthFactory.signup({
      username: $scope.user.username,
      password: $scope.user.password
    }, function(data) {
      if(data.success) {
        $window.localStorage.token = data.token;
        alert(data.message);
      } else {
        alert(data.message);
      }
    })
  }

  $scope.logout = function() {
    console.log("Logout called")
    AuthFactory.logout();
  }
})

.factory('AuthFactory', function($http, $q, $window) {
  var login = function(data, cb) {
    if((data.username || data.password) === (null || undefined))
      return alert("No username or password provided");
    return $http.post('/login', data)
      .then(function(res) {
        cb(res.data);
      })
  };

  var signup = function(data, cb) {
    if((data.username || data.password) === (null || undefined))
      return alert("No username or password provided")
    return $http.post('/signup', data)
      .then(function(res) {
        cb(res.data);
      })
  };

  var logout = function() {
    delete $window.localStorage.token;
    alert("Logged out.");
  };

  return {
    login: login,
    signup: signup,
    logout: logout
  }
})