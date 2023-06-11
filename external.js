function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);


function slidee() {
  var slidees = document.querySelectorAll(".slidee");

  for (var i = 0; i < slidees.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = slidees[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      slidees[i].classList.add("active");
    } else {
      slidees[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", slidee);

function rotatee() {
  var rotatees = document.querySelectorAll(".rotatee");

  for (var i = 0; i < rotatees.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = rotatees[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      rotatees[i].classList.add("active");
    } else {
      rotatees[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", rotatee);



function scaleCont() {
  var scaleConts = document.querySelectorAll(".scaleCont");

  for (var i = 0; i < scaleConts.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = scaleConts[i].getBoundingClientRect().top;
    var elementVisible = 700;

    if (elementTop < windowHeight - elementVisible) {
      scaleConts[i].classList.add("active");
    } else {
      scaleConts[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", scaleCont);



function chngbg() {
  var chngbgs = document.querySelectorAll(".chngbg");  // this selects all the classes with name .chngbg
  let blackCol = "black";
  let blueCol= "#1c286e";
  let pinkCol= "#521254";
  let greenCol= "3c5015";
  let orangeCol = "69360a";
  let tealCol = "14484a";
  let count = 0;
  for (var i = 0; i < chngbgs.length; i++) {
    var windowHeight = window.innerHeight;
    var elementVisible = 500;
    var elementTop = chngbgs[i].getBoundingClientRect().top;  // this selects top height of every single element of chngbg
    

    if (elementTop < windowHeight- elementVisible) {
      count = count+1;
    } 
  }

  if(count == 1)
  {
    for (var i = 0; i < chngbgs.length; i++) {
      chngbgs[i].style.backgroundColor = null; 
    } 
  }
  if(count == 2)
  {
    for (var i = 0; i < chngbgs.length; i++) {
      chngbgs[i].style.backgroundColor = blueCol;  
    } 
  }
  if(count == 3)
  {
    for (var i = 0; i < chngbgs.length; i++) {
      chngbgs[i].style.backgroundColor = pinkCol;  
    } 
  }
  if(count == 4)
  {
    for (var i = 0; i < chngbgs.length; i++) {
      chngbgs[i].style.backgroundColor = greenCol;  
    } 
  }
  if(count == 5)
  {
    for (var i = 0; i < chngbgs.length; i++) {
      chngbgs[i].style.backgroundColor = orangeCol;  
    } 
  }
  if(count == 6)
  {
    for (var i = 0; i < chngbgs.length; i++) {
      chngbgs[i].style.backgroundColor = tealCol;  
    } 
  }
}



window.addEventListener("scroll", chngbg);

