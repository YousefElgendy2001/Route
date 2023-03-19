$("#navBar").animate({ left:-$(".socials").innerWidth() }, 0)
$(".nav i").click(function () {
  if ($("#navBar").css("left") == "0px") {
      $("#navBar").animate({ left:-$(".socials").innerWidth() }, 1000)
      $(".open").removeClass("d-none");
      $(".close").addClass("d-none")

  } else {
      $("#navBar").animate({ left: "0px" }, 1000)
      $(".open").addClass("d-none");
      $(".close").removeClass("d-none")
      
  }
})











async function SearchByName(obj) {
    

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${obj}`)
    response = await response.json()

    response.meals ? displayMeals(response.meals) : displayMeals([])

}

async function SearchByFirstLetter(obj) {
   
    obj == "" ? obj = "a" : "";
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${obj}`)
    response = await response.json()

    response.meals ? displayMeals(response.meals) : displayMeals([])

}




function displayMeals(arr) {
    var BlackBox = "";

    for (var i = 0; i < arr.length; i++) {
        BlackBox += `
        <div class="col-md-3">
        <div class="position-relative rounded-3 overflow-hidden">
        
        
        
        <div onclick="getMealDetails('${arr[i].idMeal}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
            <img class="w-100" src="${arr[i].strMealThumb}" alt="" srcset="">
            <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                <h2>${arr[i].strMeal}</h2>
            </div>
        </div>
        
        
        
        </div>
        </div>
        `
    }

   document.getElementById("searchContainer") .innerHTML = BlackBox
}



        
