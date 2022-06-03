$(document).ready(function() {
  $("form#favoriteAnimal").submit(function(event) {
    const favoriteAnimal = $("select#favoriteAnimal").val();
    const favoriteMusic = $("select#favoriteMusic");
    const favoriteElf = $("inpu:radio[name=elf]:checked").val();
  let result;
  if (favoriteAnimal === "Dogs") {
    result = $("#dogs").show();
  } else if (favoriteAnimal === "Cats") {
    result = $("#cats").show();
  } else if (favoriteAnimal === "Snakes") {
    result = $("#snakes").show();
  }
   $("#outputResult").show(result);
  
  });
});

