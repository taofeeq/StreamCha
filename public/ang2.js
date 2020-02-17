var fetch = angular.module('myapp', []);
fetch.controller('userCtrl', ['$scope', '$http', function ($scope, $http) {
 $http({
  method: 'get',
  url: 'getData.php'
 }).then(function successCallback(response) {
  // Store response data
  $scope.users = response.data;
 });
   $scope.reload = function()
{
   location.reload(); 
}
}]);

var moduleA = angular.module("MyModuleA", []);
moduleA.controller("MyControllerA", function($scope) {
  var expectFriendNames = function(expectedNames, key) {
  element.all(by.repeater(key + ' in friends').column(key + '.name')).then(function(arr) {
    arr.forEach(function(wd, i) {
      expect(wd.getText()).toMatch(expectedNames[i]);
    });
  });
};

it('should search across all fields when filtering with a string', function() {
  var searchText = element(by.model('searchText'));
  searchText.clear();
  //searchText.sendKeys('m');
  //expectFriendNames(['Mary', 'Mike', 'Adam'], 'friend');

  searchText.clear();
  //searchText.sendKeys('76');
  //expectFriendNames(['John', 'Julie'], 'friend');
});

it('should search in specific fields when filtering with a predicate object', function() {
  var searchAny = element(by.model('search.$'));
  searchAny.clear();
  //searchAny.sendKeys('i');
  //expectFriendNames(['Mary', 'Mike', 'Julie', 'Juliette'], 'friendObj');
});
it('should use a equal comparison when comparator is true', function() {
  var searchName = element(by.model('search.name'));
  var strict = element(by.model('strict'));
  searchName.clear();
  //searchName.sendKeys('Julie');
  strict.click();
  //expectFriendNames(['Julie'], 'friendObj');
});
});

var mainModule = angular.module("mainModule", [])
  .controller("mainController", function ($scope)
  {
    // Initialization
    
    $scope.onKeyUpResult = "";
    // Utility functions

    var getKeyboardEventResult = function (keyEvent, keyEventDesc)
    {
      return keyEventDesc + " (keyCode: " + (window.event ? keyEvent.keyCode : keyEvent.which) + ")";
    };

    // Event handlers
    $scope.onKeyUp = function ($event) {
      $scope.onKeyUpResult = getKeyboardEventResult($event, "Key up");
      
   
            
    };
	$scope.reload = function()
{
   location.reload(); 
}

angular.module("CombineModule", ["myapp","mainModule", "MyModuleA"]);