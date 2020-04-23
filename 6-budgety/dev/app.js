// This is an example of encapsulation using a module pattern

var budgetController = (function() {
    
    var x = 23;
    
    var add = function(a) {
        return x + a;
    }
    
    return {
        publicTest: function(b) {
            console.log(add(b));
        }
    }
    
})();

//
// -----------------------------------------------------------

// NOTE - "separation of concerns" is two separate modules that are independent of each other.



// At the console, budgetController.x is "undefined" and budgetController.add() throws an error when you try to call it.
//
// But, budgetController.publicTest() works because it is returned to the previous scope?

// UI CONTROLLER
var UIController = (function() {
    
    // Some code
    

})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
    
    document.querySelector('.add__btn').addEventListener('click', function() {

        // 1. Get the field input data
        
        // 2. Add the item to the budget controller
        
        // 3. Add the item to the UI
        
        // 4. Calculate the budget
        
        // 5. Display the budget on the UI
        
        
    });
    
    // Add a keypress listener on the global document, because it's not linked to a specific element like the button above
    document.addEventListener('keypress', function(event) {
        
        // See this event in the Debug Console for more information on the event "prototype" object.
        console.log(event);
        
        // NOTE - keyCode "13" is the Enter key
        // NOTE - "which" property is used on older browsers so using for compatability
        if (event.keyCode === 13 || event.which === 13) {
            
            // TODO 
        }

    });
    
    
    
})(budgetController, UIController);