let loginPasswordInput = document.getElementById("loginPasswordInput");
let loginRePasswordInput = document.getElementById("loginRePasswordInput");



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


function validateProductName(pattern) {
    var valid = /^[A-Za-z ]+$/.test(pattern);
    if (valid) {
      console.log("if=>", valid);
      document.getElementById("NameErr").classList.add( "d-none")
      return valid;
    } else {
      console.log("else=>", valid);
      document.getElementById("NameErr").classList.remove("d-none")
      return valid;
    }
  }


  function validateEmailName(pattern) {
    var valid = /[\D]|.|(yahoo|gmail)\.com/.test(pattern);
    if (valid) {
      console.log("if=>", valid);
      document.getElementById("EmailErr").classList.add( "d-none")
      return valid;
    } else {
      console.log("else=>", valid);
      document.getElementById("EmailErr").classList.remove("d-none")
      return valid;
    }
  }


  function validatePhone(pattern) {
    var valid = /^01[0125][0-9]{8}$/.test(pattern);
    if (valid) {
      console.log("if=>", valid);
      document.getElementById("PhoneErr").classList.add( "d-none")
      return valid;
    } else {
      console.log("else=>", valid);
      document.getElementById("PhoneErr").classList.remove("d-none")
      return valid;
    }
  }

  function validateAge(pattern) {
// 90 ال من ازيد مش العمر 
    var valid = /^([1-7][0-9]|90)$/.test(pattern);
    if (valid) {
      console.log("if=>", valid);
      document.getElementById("AgeErr").classList.add( "d-none")
      return valid;
    } else {
      console.log("else=>", valid);
      document.getElementById("AgeErr").classList.remove("d-none")
      return valid;
    }
  }

  function passwordValidation(pattern) {
    var valid =/[a-zA-Z0-9]{8}$/.test(pattern);
    if (valid) {
      console.log("if=>", valid);
      document.getElementById("passwordErr").classList.add( "d-none")
      return valid;
    } else {
      console.log("else=>", valid);
      document.getElementById("passwordErr").classList.remove("d-none")
      return valid;
    }
  }


function repasswordValidation(valid) {
   if(loginRePasswordInput.value == loginPasswordInput.value){
    document.getElementById("repasswordInput").classList.add("d-none")

    console.log("if=>", valid);
    return valid
   }else{
    document.getElementById("repasswordInput").classList.remove("d-none")
    console.log("else=>", valid);
    return valid
   }
   
}







  
  