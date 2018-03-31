$(document).ready(function() {

// actual working code


// MAKING THE ICE CREAM SCOOPS FALL DOWN


function myMove() {
  var elem = document.getElementById("scoop");
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 510) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.marginTop = pos + 'px';
      // elem.style.left = pos + 'px';
    }
    // function sayHi() {
    //   // setTimeout(function(){ alert("Hello"); }, 3000);
    //   }
    //   setTimeout(frame, 1000);
  }
}


$('button').click(function(e) {
        $('#landingView').hide();
        $('#myAnimation').show();  // got a problem with IC showing up
        $('#gameView').show();

        e.preventDefault();
        myMove();

    });


});
function move() {
  let x = $('#scoop').css('margin-top');
  let y= $('#cone').css('left');
  // var height = $('#cone').height();
  // let width = $('#cone').width();

  // console.log(height);
  // console.log(width);

}

// setInterval(function(){
//   move();

// }, 1000/60);



// MAKING THE CONE MOVE USING ARROW PRESSED FUNCTION

var imageOffset = 0;

function leftArrowPressed() {
  imageOffset -= 20;
  // margin-left -=2;
  // var el = $('.cone');
  var el = document.getElementsByClassName("cone")[0];

   el.style.left = imageOffset + "px";

}

function rightArrowPressed() {
  imageOffset += 20;
  var el = document.getElementsByClassName("cone")[0];
  el.style.left = imageOffset + "px";

}



function moveSelection(evt) {
  switch (evt.keyCode) {
     case 37:
      leftArrowPressed();
      console.log('left pressed');
      break;
     case 39:
      rightArrowPressed();
      console.log('right pressed');
      break;
     // case 38:
     //   upArrowPressed();
     //   break;
     // case 40:
     //   downArrowPressed();
     //   break;
    default:
      break;
  }
}

function docReady() {
  window.addEventListener("keydown", moveSelection);
}

leftArrowPressed();
rightArrowPressed();
docReady();



// another method to find x, y coordinates and width and height







// Objects - Collision Detection
// find coordinates of scoop
// find coordinates of cone

var $scoop = $('#scoop');
var scoop = document.querySelector('#scoop');
var $cone = $('#cone');
var cone = document.querySelector('#cone');
var $scoopRef = $('.scoopRef');


function detectColl() {
if (cone.x < scoop.x + scoop.width &&
   cone.x + cone.width > scoop.x &&
   cone.y < scoop.y + scoop.height &&
   cone.height + cone.y > scoop.y) {
  console.log('detected');
    // collision detected!

  // console.log('detected for real');
  var imageOffset1 = 0;
    return function () {
      return imageOffset1 -= 20;
      var scoopRef = document.querySelectorAll('.scoopRef');
      scoopRef.style.left = imageOffset + "px";
    }

} else {
  // no collision
  console.log('nothing');
  // document.getElementById("cone").style.border = "red";
  }

};

detectColl();

// create new class for scoops with collision detection
// attempt to make the scoop move with the cone
// this does not work
// keep getting error in console.log


function leftArrowScoop() {
  imageOffset -= 20;
  // margin-left -=2;
  let scoopRef = document.querySelectorAll('.scoopRef');
      scoopRef.style.left = imageOffset + "px";

}

leftArrowScoop();

// CREATING AN ARRAYS FOR ICE CREAM SCOOPS AND CONE
// second option, since class name did not keep scoops on cone
// array flavors will help keep scoop on cone
// array score will track score

var flavors = [1, 2, 3, 4, 5];
var cone = [];
var score = [];

flavors.push();




// }

// // filling in the values
// // scoop values < cone values

// if (8 > -40 &&
//     85 < 180 &&
//     540 < 1330 &&
//     85 < 155) {
    // collision detected!


