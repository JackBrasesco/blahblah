var quantityInput = $(".element-quantity-input")

quantityInput.keydown(function(e) {
  var inputValue = quantityInput.val();
  var keycode = 13;

  // enter key!
  if (keycode == 13) {	
    addElementsToThePage(inputValue);
  }
})

function addElementsToThePage(numberOfElements) {	  
  for (var i = 0; i < numberOfElements.val(); i++) {
    var newEl = $("<div class='new-el'>Hi there!</div>");		
    $(".element-display").append(newEl);
  }
}


