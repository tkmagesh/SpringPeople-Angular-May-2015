describe("Greet Controller", function(){

    beforeEach(module("myApp"));

    it("Should intialize the name with empty string", inject(function($controller){

        var scope = {};

        var controller = $controller('greetController', {$scope : scope});

        expect(scope.name).toBe('');
    }));
    it("Should intialize the greetMsg with empty string", inject(function($controller){

        var scope = {};

        var controller = $controller('greetController', {$scope : scope});

        expect(scope.greetMsg).toBe('');
    }));
    it("Should greet when greeted", inject(function($controller){

        var scope = {};

        var controller = $controller('greetController', {$scope : scope});

        scope.name = "Magesh";
        scope.greet();
        expect(scope.greetMsg).toBe('Hi Magesh, Have a nice day!');
    }));
})
