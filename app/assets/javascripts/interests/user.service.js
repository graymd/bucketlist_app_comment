(function () {
  "use strict";
  angular.module('interests')
    .factory('UserService', function($http) {

        var user = [];

        var addUserBucket=function (newUserBucket) {
            // user.push(newUserBucket);
            console.log('this is the NUB ' + newUserBucket.bucket_list_items[1].id);
            $http.patch('/users/' + newUserBucket.id + '.json', newUserBucket ).success(function() {
    });
        };
        var getUserBucket= function () {
            return user;
        };

        var getSingleItem= function(id) {
          return $http.get('/users/' + id + '.json');
          console.log(user);
      };

        var removeUserBucket = function (item) {
            var index = user.indexOf(item);
            user.splice(index,1);
        };

        return {
            getUserBucket: getUserBucket,
            addUserBucket: addUserBucket,
            removeUserBucket: removeUserBucket,
            getSingleItem: getSingleItem,
        };
    });

})();
