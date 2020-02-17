angular.module('app',["pubnub.angular.service"])
.controller('ChatCtrl', function ($scope, Pubnub){
 $scope.channel = 'messages-channel';
 $scope.uuid = _.random(100).toString();
 Pubnub.init({
       publish_key: 'pub-c-ba411f9b-0096-4f96-88e2-bad04ae47ff0',
       subscribe_key: 'sub-c-ff757d1c-479f-11ea-94fd-ea35a5fcc55f',
       uuid: $scope.uuid
     });
  });

$scope.sendMessage = function(){
    if(!$scope.messageContent  || $scope.messageContent === ''){
      return;
     }
     Pubnub.publish({
       channel: $scope.channel,
       message: {
          content: $scope.messageContent,
          sender_uuid: $scope.uuid,
	  date: new Date()
       },
	callback: function(m){
	   console.log(m);
       }
    });
   $scope.messageContent ='';
} 

$scope.messages = [];

Pubnub.subscribe({
  channel: $scope.channel,
  triggerEvents: ['callback']
});

$scope.$on(Pubnub.getMessageEventnameFor($scope.channel), function(ngEvent, m){
	$scope.$apply(function (){
          $scope.messages.push(m)
     });
});

$scope.avatarUrl = function(uuid){
	return 'https://img.icons8.com/clouds/64/000000/discord-logo.png'+uuid+'?set=set2&bgset=bg2&size=70x70';
};


angular.module('app',[]);