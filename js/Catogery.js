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


async function getCatogery(){

    var data = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    var res = await data.json()
    // console.log(res);
    var items = res.categories
    // console.log(items);
    
    displayItems(items)
    }
    getCatogery() 
    
    function displayItems(array){
    
     var blackBox="";
     for (var i = 0; i < array.length; i++) {
       blackBox +=` <div class="col-md-3">
       <div onclick="getCategoryMeals('${array[i].strCategory}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
       <div class="position-relative rounded-3 overflow-hidden ">
       <div class="layerCatogery text-center ">
       <h2>${array[i].strCategory}</h2>
       <p>${array[i].strCategoryDescription}</p>
   
       </div>
       <img class="w-100" src="${array[i].strCategoryThumb}" alt="" />
       
       </div>
       </div>
       </div>`
       
    
     }
    
    document.getElementById("catogery").innerHTML =blackBox
    
    }


    async function getCategoryMeals(category) {
  
  
      let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      response = await response.json()
  
      displayMeals(response.meals.slice(0, 20))
  
  }
  
  
  function displayMeals(arr) {
      var blackBox = "";
  
      for (var i = 0; i < arr.length; i++) {
          blackBox += `
          <div class="col-md-3">
          <div onclick="getMealDetails('${arr[i].idMeal}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
          <img class="w-100 " src="${arr[i].strMealThumb}" alt="" srcset="">

          <div class="layerHome position-absolute d-flex justify-content-center align-items-center text-black p-2 ">
          <h2>${arr[i].strMeal}</h2>
      </div>
          </div>
          </div>
          `
      }
  
      document.getElementById("catogery").innerHTML =blackBox

  }

// فانكشن مش عارف اشغلها صح للديتيلز بتاعت الميلز 
  // async function getMealDetails(id){

    
  //   let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  //   console.log(response);
  //   response = await response.json()
  //   console.log(response);
    
  //   // displayMeals((response.meals[0]))
  //   displayDetails((response.meals[0]))
  //   // displayDetails(response)
  // }


  
//   function displayDetails(arr) {


    
//     var blackBox = "";

//     for (var i = 0; i < arr.length; i++) {
//         blackBox += `
//         <div class="col-md-6">    
//         <div class="row">
//          <div class="col-md-6">
//              <img class="w-100 src="${arr[i].strMealThumb}" alt="">

//          </div>
        

//         </div>
//         <div class="skill text-white fs-1">
//          <p>${arr[i].strCategory}</p>
         
//  </div>

// </div>
// <div class="col-md-6">
// <h3 class="fs-1">Instructions</h3>
// <p>${arr[i].strInstructions}</p>

//      <h3>${arr[i].strArea}</h3>
//      <h3>${arr[i].strCategory}</h3>
//      <h3>${arr[i].strMeal}</h3>
//         <p class="alert p-1 m-1 d-inline-block ">${arr[i].strMeasure1}</p>
//         <p class="alert p-1 m-1 d-inline-block ">${arr[i].strMeasure2}</p>
//         <p class="alert p-1 m-1 d-inline-block ">${arr[i].strMeasure3}</p>
//         <p class="alert p-1 m-1 d-inline-block ">${arr[i].strMeasure4}</p>
//         <p class="alert p-1 m-1 d-inline-block ">${arr[i].strMeasure5}</p>
//         <p class="alert p-1 m-1 d-inline-block ">${arr[i].strMeasure6}</p>
//         <p class="alert p-1 m-1 d-inline-block ">${arr[i].strMeasure7}</p>
    
//         <h3>Recipes : </h3>
//        <ul class="list-unstyled d-flex flex-wrap g-4 ">
//          <li class="px-2 "><a href="" class="btn btn-success  text-white text-decoration-none target="_self >${arr[i].strSource}</a></li>
//          <li><a href="" class="btn btn-danger text-white text-decoration-none target="_self >${arr[i].strYoutube}</a></li>
         
//        </ul>

// </div>
//         `
//     }

//     document.getElementById("details").innerHTML =blackBox

// }




  
  
