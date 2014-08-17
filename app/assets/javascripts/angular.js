var c_app = angular.module("c_app", ['xeditable', 'ui.bootstrap']);

/** runtime settings  */
c_app.run(['editableOptions', function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme
}]);

console.log('hai');

c_app.controller('ClozerCtrl', ['$scope', '$http',
  function($scope, $http) {
    // var item, item_id;
    // $scope.contract_id = $scope.contract.id;
    console.log('cal');
  $scope.deal = { id: 1, name: "Tinder Series Z"}
  $scope.docs = [
    { id: 1, name: "Certificate of Incorporation"},
    { id: 2, name: "Voting Agreement"},
    { id: 3, name: "Indemnification Agreement"},
    { id: 3, name: "Investors Rights Agreement"},
    { id: 3, name: "Right of First Refusal and Co-Sale Agreement"},
    { id: 3, name: "Stock Purchase Agreement"}
  ];
  $scope.signatories = [{id: 1, name: "", email: ""}];
  // [
  //     {id: 1, name: 'Elon Musk', email: "dave.0614@gmail.com"},
  //     {id: 2, name: 'Mark Zuckerberg', email: "markzuck@facebook.com"},
  //     {id: 3, name: 'Winklevoss I', email: "winklevoss@facebook.com"},
  //     {id: 4, name: 'Bill Gates', email: "gates@microsoft.com"},
  //     {id: 5, name: 'Ashton Kutcher', email: "ashton@ashton.com"},
  //     {id: 6, name: 'Sheryl Sandberg', email: "ss@facebook.com"},
  //     {id: 7, name: 'LeBron James', email: "king@miamiheat.com"},
  //     {id: 8, name: 'Peter Thiel', email: "pt@paypal.com"},
  //     {id: 9, name: 'Bruce Wayne', email: "bw@gmail.com" }
  //   ];

  $scope.addSignatory = function() {
    console.log('cal');
    $scope.inserted = {
      id: $scope.signatories.length+1,
      name: '',
      email: ''
    };
    $scope.signatories.push($scope.inserted);
  };

// remove user
  $scope.removeSignatory = function(index) {
    $scope.signatories.splice(index, 1);
  };

    // console.log("contract id: "+ $scope.contract_id);
    // if($scope.contract_id != '') {
    //   itemModel.load($scope.contract_id)
    //     .success(function(data) {
    //       $scope.items = data.items;
    //       // if(data.items.length == 0) {
    //       //   $scope.addItem();
    //       // }
    //     });
    // } else {
    //   $scope.items = [{}];
    // }

    // $scope.saveItem = function(item, item_id) {
    //   itemModel.save($scope.contract_id, item, item_id)
    //   .success(function(data) {
    //     // console.log(data.item.id);
    //     item.id = data.item.id;
    //     $scope.contract_display.items = data.items;
    //     if($scope.contract_display.items.length == $scope.items.length && (item.description != '' && item.description != undefined && item.description.length > 0)) {
    //       $scope.addItem();
    //     }
    //   });
    // };

    // //clean up params - double
    // // {"title"=>"do more stuff", "description"=>"so much work", "amount"=>"10000.1", "action"=>"create", "controller"=>"api/v1/items", "contract_id"=>"1", "format"=>"json", "item"=>{"amount"=>"10000.1", "description"=>"so much work", "title"=>"do more stuff"}}

    // $scope.deleteItem = function (item_id, index) {
    //   $scope.items.splice(index, 1);
    //   if($scope.items.length == 0) {
    //     $scope.addItem();
    //   }
    //   //if item saved to db
    //   if (item_id != '' && item_id != undefined) {
    //     itemModel.delete($scope.contract_id, item_id, index)
    //       .success(function(data) {
    //         if (data.items.length  == 0) {
    //           $scope.contract_display.items = data.items;
    //         } else {
    //           $scope.items = $scope.contract_display.items = data.items;
    //         }
    //     });
    //   }
    // };

    // $scope.addItem = function () {
    //   itemModel.add($scope.items);
    //   // console.log("addItem()");
    // };
}]);