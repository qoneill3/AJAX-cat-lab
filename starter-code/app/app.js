 
$(function(){

// Pull the cats api in and make it into an object
var getCats = $.get('https://ga-cat-rescue.herokuapp.com/api/cats').done(function(data){

      // Parse the data into a new object and iterate through the data to display the name and note values
      var catObject = JSON.parse(data);
      for (i = 0; i < catObject.length; i++) {
        $('#cats').append('<li>' + catObject[i].name + " - " + catObject[i].note + '</li>');
      }
});

// Create an event listener for the submit button 
$('form').on('submit', function(){
  event.preventDefault();

  // Cat name input field
  var name = $('#cat-name').val();

  // Cat note input field
  var note = $('#cat-note').val();

  // Appends the values to the cats unordered list.
  $('#cats').append('<li>' + name + " - " + note + '</li>');

  newCat = {
    name: name,
    note: note
  };

  // Adds the entry to the API
  $.ajax({
  method: "POST",
  url: "https://ga-cat-rescue.herokuapp.com/api/cats",
  data: JSON.stringify(newCat)
});

});



});
