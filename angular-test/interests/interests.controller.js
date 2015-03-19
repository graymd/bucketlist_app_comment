(function () {
    "use strict";
    angular.module('interests')
    .controller('InterestController', function (InterestService, $routeParams, $location, $scope) {

    var interestCtrl = this;

    InterestService.getInterests().success(function (data) {
        interestCtrl.interests = data;
    });

    InterestService.getOneInterest($routeParams.interestId).success(function (data) {
        interestCtrl.singleItem=data;
    });

    interestCtrl.currentIndex= $routeParams.interestId;

    interestCtrl.addNewInterest = function(newInterest) {
        InterestService.addNewInterst(newInterest);
        // $location.path('/interests');
    };

    interestCtrl.deleteInterest= function (id) {
        InterestService.deleteInterest(id);
        console.log('delete button works');
    };

    interestCtrl.goToItemPage =function () {
        $location.path('/bucketlistitem');
        console.log('bucket list item page works');
    };

});

})();
