$(document).ready(function() {
  $("form#favoriteAnimal").submit(function(event) {
    event.preventDefault();
    const favoriteAnimal = $("select#favoriteAnimal").val();
    // const favoriteMusic = $("select#favoriteMusic");
    // const favoriteElf = $("input:radio[name=elf]:checked").val();
   
  if (favoriteAnimal === "dogs") {
    $("#resultDogs").show();
    $("#resultDogs").hide();
  } else if (favoriteAnimal === "cats") {
    $("#resultCats").show();
    $("#resultCats").hide();
  } else (favoriteAnimal === "snakes") 
    $("#resultSnakes").show();
    $("#resultSnakes").hide(); 
  
  });
});

// function favoriteAnimal(favoriteAnimal) {
//   if ("#fa")
// }

