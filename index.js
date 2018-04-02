$(document).ready(function() {

// actual working code


// MAKING THE ICE CREAM SCOOPS FALL DOWN

// setTimeout(myFunction, 3000)


function myMove() {
  var elem = document.getElementById("scoop"); // vanilla
  var elem1 = document.getElementById("scoop1"); // cookies n cream
  var elem2 = document.getElementById("scoop2"); // mint chocolate
  var elem3 = document.getElementById("scoop3"); // caramel
  // var otherScoops = $('.scoop');
  var pos = 0;
  var id = setInterval(frame, 1);
  function frame() {

    if (pos == 500) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.marginTop = pos + 'px';
      elem1.style.marginTop = pos + 'px';
      elem2.style.marginTop = pos + 'px';
      elem3.style.marginTop = pos + 'px';
      // elem1.style.left = pos + 'px';
      // elem.style.left = pos + 'px';
    }
    // function sayHi() {
    //   // setTimeout(function(){ alert("Hello"); }, 3000);
    //   }
    //   setTimeout(frame, 1000);
  }
}


$('.startButton').click(function(e) {
        $('#landingView').hide();
        // $('#formView').hide();
        $('#formView').show();
        // $('#myAnimation').show();  // got a problem with IC showing up
        // $('#gameView').show();

        e.preventDefault();
        // myMove();

    });

$('.submit').click(function(w) {
        // $('#landingView').hide();
        $('#formView').hide();
        $('#myAnimation').show();  // got a problem with IC showing up
        $('#gameView').show();

        w.preventDefault();
        // call myMove, start game after submitting name
        myMove();

    });


});

function move() {
  // let x = $('#scoop').css('margin-top');
  let y= $('#cone').css('left');
  // var height = $('#cone').height();
  // let width = $('#cone').width();

  // console.log(height);
  // console.log(width);

}

setInterval(function(){
  move();

}, 1000/60);



// MAKING THE CONE MOVE USING ARROW PRESSED FUNCTION

var imageOffset = 0;

function leftArrowPressed() {
  imageOffset -= 20;
  // margin-left -=2;
  // var el = $('.cone');
  var el = $(".move");
  //console.log(el)

  // cream is the scoop
  // var cream = document.getElementsByClassName("cream")[0];
  // var moveCont = document.getElementsByClassName("container")[0];
  // cream.style.left = imageOffset + "px";
  // moveCont.style.left = imageOffset + "px";
  el.css("left",`${imageOffset}px`);

}

function rightArrowPressed() {
  imageOffset += 20;
  var el = $('.move');
  // cream is the scoop
  // var cream = document.getElementsByClassName("cream")[0];
  // var moveCont = document.getElementsByClassName("container")[0];
  // cream.style.left = imageOffset + "px";
  // moveCont.style.left = imageOffset + "px";
  // el.style.left = imageOffset + "px";
  el.css("left",`${imageOffset}px`);

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

let $scoop;
let scoop;
let $cone;
let cone;
let $scoopRef;
let $fallin;
let $container;

let scorePoints;

let count;


init();
function init () {
  $scoop = $('#scoop');
  scoop = document.querySelector('#scoop');
  $cone = $('#cone');
  cone = document.querySelector('#cone');
  // cone = $('.cone');
  $scoopRef = $('.scoopRef');
  $falling = $('.falling');
  $container = $('.container');

  scorePoints = 0;

  count = 0;
}

function reload() {
  // in reload clear the DOM, make it initial state and then call init
  wind
}


let vanillaScore = false;
// let cookNCreamScore = false;
// let mintNChocoScore = false;
// let caramelScore = false;

function detectColl() {
  setInterval(function(){
    let con =$('#cone')[0].getBoundingClientRect();
    let scoo = $('#scoop')[0].getBoundingClientRect();
    let scoo1 = $('#scoop1')[0].getBoundingClientRect();
    let scoo2 = $('#scoop2')[0].getBoundingClientRect();
    let scoo3 = $('#scoop3')[0].getBoundingClientRect();
    // call the win alert
    if (count === 4){
        alert('You won!')
        // $('body').append("<button class='replay'>Replay</button>")
        // $(".replay").on('click', function() {
        //   window.location.reload();
        // });
    }
    // console.log(scoo.y);
    // console.log(con.x);

    // VANILLA
  if (scoo.x < con.x + con.width &&
   scoo.x + scoo.width > con.x &&
   scoo.y < con.y + con.height &&
   scoo.height + scoo.y > con.y) {

  $('.count').text(++count);

    console.log('Vanilla grabbed')
    if (vanillaScore === false) {
      console.log('vanillaScore = false');
      console.log(`score is ${scorePoints}`)
      scorePoints++;
      console.log(`score applied and is now ${scorePoints}`)
      vanillaScore = true;
      console.log('vanillaScore is true')
    }

// score ++;

  // console.log('Hey, 1st score', scorePoints);

  // console.log('detected');

    // detect collision // collision detected!
    // remove scoop from DOM - rem for remove
    // var rem = document.querySelector('scoop');
    // $falling.remove();
    // prepend the scoop to the container with cone
    // $container.prepend();

$("#scoop").addClass('move');
$('#scoop').css("margin-left","50px");
$('#scoop').css("bottom","200px");


} // COOKIES N CREAM
if (scoo1.x < con.x + con.width &&
   scoo1.x + scoo1.width > con.x &&
   scoo1.y < con.y + con.height &&
   scoo1.height + scoo1.y > con.y){
   $('.count').text(++count);
  //console.log('2nd', score);

  // console.log('detected too');
//score ++;

$("#scoop1").addClass('move');
$('#scoop1').css("margin-left","50px");
$('#scoop1').css("bottom","250px");



} // MINT N CHOCOLATE
if (scoo2.x < con.x + con.width &&
   scoo2.x + scoo.width > con.x &&
   scoo2.y < con.y + con.height &&
   scoo2.height + scoo2.y > con.y){
  $('.count').text(++count);

  //score ++;
  console.log('detected too');

$("#scoop2").addClass('move');
$('#scoop2').css("margin-left","50px");
$('#scoop2').css("bottom","300px");



}
// CARAMEL
if (scoo3.x < con.x + con.width &&
   scoo3.x + scoo.width > con.x &&
   scoo3.y < con.y + con.height &&
   scoo3.height + scoo3.y > con.y){
  $('.count').text(++count);

  //score++;
  //console.log(scorePoints);

  console.log('detected too');

$("#scoop3").addClass('move');
$('#scoop3').css("margin-left","50px");
$('#scoop3').css("bottom","350px");
// alert('You win');



}

else {
  // no collision

  // console.log('nothing');
  // $falling.addClass('container');
  // $cone.addClass('container');

  // document.getElementById("cone").style.border = "red";
  }

}, 1000/60);


};

detectColl();

// create new class for scoops with collision detection
// attempt to make the scoop move with the cone
// this does not work
// keep getting error in console.log

// SCORE COUNT
function winScore() {
  if (count === 4){
    alert('You won!')
  }
}

winScore();
// function countUp(count) {
//   var div_by = 5,
//       speed = Math.round(count / div_by),
//       $display = $('.count'),
//       run_count = 1,
//       int_speed = 1500;
//       // int_speed = 1000/60;




//   var int = setInterval(function() {

//     if(run_count < div_by){
//       $display.text('Score: ' +speed * run_count);
//       run_count ++;
//       // alert('You win');
//       // checkWin();
//     // } if(display == 4) {
//     //   alert('You win');
//     }
//      else if(parseInt($display.text()) < count) {
//       var curr_count = parseInt(display.text()) + 1;
//       display.text(curr_count);
//       checkWin();
//     } else {
//       clearInterval(int);
//     }
//   }, int_speed);
// }

// countUp(5);


// function win(){
//   alert("Win!");
// }
// setTimeout(win, counter = 10000);

// explode();
// clearTimeout(explode);


// function checkWin() {
//   if (curr_count === 4 || run_count === 4) {
//       alert('You win');
//       console.log('win');
//   } else {
//     console.log('lose');
//   }
// }

// checkWin();

console.log(`score is ${scorePoints}`)

// function revealScore() {
//   let scoreString = score +'';
//   for (let i = scoreString.length; i < 4; i++) {
//     scoreString = '0' + scoreString;

//   }

//   $('h3').html*(`SCORE: $${scoreString}`);
//   return scoreString;
// }

// if (detectColl (scoop, cone))


//   score++

// update to the DOM


// create a function reset
// whatever I do at the start, reset it and call it in the function
// global object
// reset fields
// call that global object whenever I want to

// update the global var to function

// wrap up set up stuff into a function
// call that function at the beginning and whenever I want to relod

