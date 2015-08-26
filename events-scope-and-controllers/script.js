angular.module('app', []);
angular.module('app').controller('mainController',function($scope){
  $scope.user1 ={
    name: 'Luke Skywalker',
    address: {
      street:'8470 Mars Dr.',
      city: 'Buena Park',
      planet: 'Earth',
    },
    friends: [
      'Han',
      'Chewie',
      'Carol'
    ]
    
  }
  $scope.user2 ={
    name: 'Han Solo',
    address: {
      street:'8470 Mars Dr.',
      city: 'Buena Park',
      planet: 'Earth',
    },
    friends: [
      'Han',
      'Chewie',
      'Carol'
    ]
    
  }
});
angular.module('app').directive('mxUserInfoCard', function(){
  return{
    templateUrl: 'userInfoCard.html',
    restrict: 'E',
    replace: true,
    scope:{
      user: '=person',
      initialCollapsed: '@collapsed'
    },
    controller: function($scope){
      
      $scope.collapsed = ($scope.initialCollapsed === 'true');
      $scope.knightMe = function(user){
        user.rank = 'knight';
      }
      $scope.collapse = function(){
        $scope.collapsed = !$scope.collapsed;
      }
      
      $scope.removeFriend = function(friend){
        var idx = $scope.user.friends.indexOf(friend);
        if(idx > -1) {
          $scope.user.friends.splice(idx, 1);
        }
      }
      
    }
  }
});
angular.module('app').directive('removeFriend', function(){
  return{
    templateUrl: 'removeFriend.html',
    restrict: 'E',
    scope:{
      notifyParent: '&method'
    },
    controller: function($scope){
      
      $scope.removing = false;
      $scope.startRemove = function(){
        $scope.removing = true;
      }
      $scope.cancelRemove = function(){
        $scope.removing = false;
      }
      $scope.confirmRemove = function(){
        $scope.notifyParent();
      }
      
    }
  }
});
angular.module('app').directive('address', function(){
  return{
    templateUrl: 'address.html',
    restrict: 'E',
    scope: true,
    controller: function($scope){
      $scope.collapsed = false;
      $scope.collapseAddress = function(){
        $scope.collapsed = true;
      }
      
      $scope.expandAddress = function(){
        $scope.collapsed = false;
      }
    }
  }
})