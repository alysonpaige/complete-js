// BUDGET CONTROLLER
var budgetController = (function() {
  // add code
})();

// UI CONTROLLER
var UIController = (function() {
  // add code
})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

  var ctrlAddItem = function() {
    // 1. Get input data
    // 2. Add item to budget controller
    // 3. Add item to UI
    // 4. Calculate budget
    // 5. Display budget (UI)
    console.log('It works');
  }

  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

  // when user hits enter instead of button
  document.addEventListener('keypress', function(event) {
    if(event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });

})(budgetController, UIController);

