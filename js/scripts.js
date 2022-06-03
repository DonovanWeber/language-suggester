$(document).ready(function() {
  $("form#favoriteAnimal").submit(function(event) {
    const favoriteAnimal = $("select#favoriteAnimal").val();
    const favoriteMusic = $("select#favoriteMusic");
  let result;
  if (favoriteAnimal === "Dogs") {
    result = $("#dogs").show();
  } else if (favoriteAnimal === "Cats") {
    result = $("#cats").show();
  }
   
  
  });
});