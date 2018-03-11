// BUDGET CONTROLLER
var budgetController = (function() {
  // add code
})();

// UI CONTROLLER
var UIController = (function() {
  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  }
  return {
    getinput: function() {
      return {
        // will be either inc or exp
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },
    
    // expose DOM strings to public
    getDOMstrings: function() {
      return DOMstrings;
    }
  };
})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

  var DOM = UICtrl.getDOMstrings();

  var ctrlAddItem = function() {
    // 1. Get input data
    var input = UICtrl.getinput();
    console.log(input);
    // 2. Add item to budget controller
    // 3. Add item to UI
    // 4. Calculate budget
    // 5. Display budget (UI)
  }

  document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

  // when user hits enter instead of button
  document.addEventListener('keypress', function(event) {
    if(event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }

  });

})(budgetController, UIController);
