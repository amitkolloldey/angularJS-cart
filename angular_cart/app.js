var angularCart = angular.module("angularCart", ["ngRoute", "ngAnimate"]);

angularCart.config(function($routeProvider){
    $routeProvider
        .when("/products",{
            templateUrl: "partial/products.html",
            controller: "allProduct"
        }) 
        .when("/cart",{
            templateUrl: "partial/cart.html",
            controller: "cartProduct"
        }) 
        .otherwise({
            redirectTo: "/products"
        });
});

angularCart.controller("headerController",function($scope,$location){
    $scope.apptitle = {
        title : "Angular Cart"
    }
    $scope.nav = {};
	$scope.nav.isActive = function(path) {
		if (path === $location.path()) {
			return true;
		}
		
		return false;
	}
}); 

angularCart.factory("cartService", function() {
	var cart = [];
	
	return {
		getCart: function() {
			return cart;
		},
		addToCart: function(product) {
			cart.push(product);
            alert(product.name + ' Is Added To The Cart');
		},
		buyNow: function(product) {
			alert("Thanks for buying: " + product.name);
		}
	}
});
angularCart.factory("productService", function() {
	var products = [
        {
            id: 1,
            img: 'black.jpg',
            name: 'Black t-shirt',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            price: 10,
            color: 'Black',
            size: 'S/M/L',
            status: 'In-Stock'
        },
        {
            id: 2,
            img: 'blue.jpg',
            name: 'Blue t-shirt',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            price: 11,
            color: 'Blue',
            size: 'S/M/L/XL',
            status: 'In-Stock'
        },
        {
            id: 3,
            img: 'red.jpg',
            name: 'Red t-shirt',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            price: 12,
            color: 'Red',
            size: 'S/M/L/XL',
            status: 'In-Stock'
        },
        {
            id: 4,
            img: 'purple.jpg',
            name: 'Purple t-shirt',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            price: 12,
            color: 'purple',
            size: 'S/M/L/XL',
            status: 'In-Stock'
        },
        {
            id: 5,
            img: 'green.jpg',
            name: 'Green t-shirt',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            price: 11,
            color: 'green',
            size: 'S/M/L',
            status: 'In-Stock'
        },
        {
            id: 6,
            img: 'grey.jpg',
            name: 'Grey t-shirt',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            price: 11,
            color: 'grey',
            size: 'S/M/L',
            status: 'In-Stock'
        },
        {
            id: 7,
            img: 'yello.jpg',
            name: 'Yellow t-shirt',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            price: 15,
            color: 'Yellow',
            size: 'S/M/L/XL',
            status: 'In-Stock'
        },
        {
            id: 8,
            img: 'navy.jpg',
            name: 'Navy t-shirt',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            price: 15,
            color: 'navy',
            size: 'S/M/L/XL',
            status: 'In-Stock'
        },
        {
            id: 9,
            img: 'orange.jpg',
            name: 'Orange t-shirt',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            price: 10,
            color: 'orange',
            size: 'S/M/L/XL',
            status: 'In-Stock'
        },
        {
            id: 10,
            img: 'white.jpg',
            name: 'White t-shirt',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            price: 10,
            color: 'white',
            size: 'S/M/L/XL',
            status: 'In-Stock'
        },
        {
            id: 11,
            img: 'marron.jpg',
            name: 'Marron t-shirt',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            price: 10,
            color: 'marron',
            size: 'S/M/L/XL',
            status: 'In-Stock'
        },
        {
            id: 12,
            img: 'pink.jpg',
            name: 'Pink t-shirt',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            price: 12,
            color: 'pink',
            size: 'S/M/L/XL',
            status: 'In-Stock'
        }
    ];
	
	return {
		getproducts: function() {
			return products;
		},
		addToCart: function(product) {
			cart.push(product);
		}
	}
});


angularCart.controller("cartProduct", function($scope, cartService) {
	$scope.cart = cartService.getCart();
	
	$scope.buyNow = function(product) { 
		cartService.buyNow(product);
	}
});
 

angularCart.controller("allProduct", function($scope, productService, cartService) {
	$scope.products = productService.getproducts();
	
	$scope.addToCart = function(product) {
		cartService.addToCart(product);
	}
});
