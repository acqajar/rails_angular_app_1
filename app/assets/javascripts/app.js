angular.module('app', []);

angular.module('app').controller("MainController", function(){
    var vm = this;
    vm.title = 'Book List in AngularJS';
    vm.searchInput = '';
    vm.books = [
        {
            title: 'The End of Power',
            year: 2011,
            author: 'Moisés Naím',
            favorite: true
        },
        {
            title: 'Creativity, Inc.',
            year: 2010,
            author: 'Ed Catmull',
            favorite: false
        },
        {
            title: 'The Better Angels of Our Nature',
            year: 2015,
            author: 'Steven Pinker',
            favorite: true
        },
        {
            title: 'The Structure of Scientific Revolutions',
            year: 2014,
            author: ' Thomas S. Kuhn',
            favorite: true
        },
        {
            title: 'Dealing with China',
            year: 2015,
            author: 'Henry M. Paulson',
            favorite: false
        },
        {
            title: 'The Magic of Reality: How We Know What’s Really True',
            year: 2012,
            author: 'Richard Dawkins',
            favorite: false
        },
        {
            title: 'On Immunity: An Inoculation ',
            year: 2014,
            author: 'Eula Biss',
            favorite: false
        },
        {
            title: 'How to Lie With Statistics ',
            year: 1993,
            author: 'Eula Biss',
            favorite: false
        }

    ];
    vm.orders = [
        {
            id: 1,
            title: 'Year Ascending',
            key: 'year',
            reverse: false
        },
        {
            id: 2,
            title: 'Year Descending',
            key: 'year',
            reverse: true
        },
        {
            id: 3,
            title: 'Title Ascending',
            key: 'title',
            reverse: false
        },
        {
            id: 4,
            title: 'Title Descending',
            key: 'title',
            reverse: true
        },
        {
            id: 5,
            title: 'Author Ascending',
            key: 'author',
            reverse: false
        },
        {
            id: 6,
            title: 'Author Descending',
            key: 'author',
            reverse: true
        }
    ];
    vm.order = vm.orders[0];
    vm.new = {};
    vm.addBook = function() {
        vm.books.push(vm.new);
        vm.new = {};
    };

    vm.removeBook=function(book){ 
      var index = vm.books.indexOf(book)
      vm.books.splice(index,1); 
    }    
});



