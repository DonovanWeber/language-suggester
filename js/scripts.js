$(document).ready(function() {
  $("form#favoriteAnimal").submit(function(event) {
    event.preventDefault();
    const favoriteAnimal = $("select#favoriteAnimal").val();
    const favoriteMusic = $("select#favoriteMusic");
    const favoriteElf = $("input:radio[name=elf]:checked").val();
  
  if (favoriteAnimal === "dogs") {
    return $("#dogs").show();
  } else if (favoriteAnimal === "cats") {
    $("#cats").show();
  } else (favoriteAnimal === "snakes") 
    $("#snakes").show();
  
  
  });
});

// function favoriteAnimal(favoriteAnimal) {
//   if ("#fa")
// }

