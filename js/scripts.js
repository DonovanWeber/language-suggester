$(document).ready(function() {
  $("form#favoriteAnimal").submit(function(event) {
    event.preventDefault();
    const favoriteAnimal = $("select#favoriteAnimal").val();
    const favoriteMusic = $("select#favoriteMusic");
    const favoriteElf = $("input:radio[name=elf]:checked").val();
    let result;
  if (favoriteAnimal === "dogs") {
    return $("#dogs").show();
  } else if (favoriteAnimal === "cats") {
    $("#cats").show();
  } else (favoriteAnimal === "snakes") 
    $("#snakes").show();
  
  $("#outputResult").show(result);
  
  });
});

// function favoriteAnimal(favoriteAnimal) {
//   if ("#fa")
// }

