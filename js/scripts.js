$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const favoriteAnimal = $("select#favoriteAnimal").val();
    // const favoriteMusic = $("select#favoriteMusic");
    // const favoriteElf = $("input:radio[name=elf]:checked").val();
   console.log(favoriteAnimal);
  if (favoriteAnimal === "dogs") {
    $("#resultDogs").show();
    
  } else if (favoriteAnimal === "cats") {
    $("#resultCats").show();
    
  } else  {
    $("#resultSnakes").show();
  }
  $('.btn').click(function() {
    location.reload();
});
  
  
  });
});




