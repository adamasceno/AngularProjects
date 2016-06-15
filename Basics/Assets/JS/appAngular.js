
var appAngular = angular.module('tst',[]);

var persons = [{
    name: 'Jonh',
    age: 23,
    ocupation: 'DevNinja',
    cc:1,
    img:'/home/andre/Pictures/AJ.jpg'


  },
  {
    name:'Derek',
    age:28,
    ocupation:'Gamer',
    cc:2
  }
];


appAngular.controller("CtrlApp", function() {
  this.persons = persons;
  // this.AddPerson = function(){
  //  persons.push({name:this.name1, age:this.age1,ocupation:'Test'});
  this.AddPerson = function(contato)
  {
    persons.push(angular.copy(contato));
  };
  });

//
// appAngular.controller("CtrlApp", function($scope) {
//   $scope.nome = person.name;
//   });

// appAngular.controller("alertMsg",alertMsg());
//
//
// function alertMsg() {
//   alert('Its ALIVE!!!');
// }
