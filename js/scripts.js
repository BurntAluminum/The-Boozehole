$(document).ready(function() {
  var age = parseInt(prompt("How old are you? You don't need ID, we use the honor system"));

  if (age > 21) {
    $('.drinks').show();
  } else if (age === 21) {
    alert("Yeah sure you are.");
    $('.drinks').show();
  } else {
    $('#under-21').show();
  }
});
