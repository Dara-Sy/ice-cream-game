$(document).ready(function() {

// actual working code


// MAKING THE ICE CREAM SCOOPS FALL DOWN

function myMove() {
  var elem = document.getElementById("scoop"); // vanilla
  var elem1 = document.getElementById("scoop1"); // cookies n cream
  var elem2 = document.getElementById("scoop2"); // mint chocolate
  var elem3 = document.getElementById("scoop3"); // caramel
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
    }
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

}, 1000/30);



// MAKING THE CONE MOVE USING ARROW PRESSED FUNCTION

var imageOffset = 0;

function leftArrowPressed() {
  imageOffset -= 20;
  var el = $(".move");
  el.css("left",`${imageOffset}px`);

}

function rightArrowPressed() {
  imageOffset += 20;
  var el = $('.move');
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

// function reload() {
//   // in reload clear the DOM, make it initial state and then call init
//   wind
// }



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

    }

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

  $("#scoop").addClass('move');
  $('#scoop').css("margin-left","50px");
  $('#scoop').css("bottom","200px");


  } // COOKIES N CREAM
  if (scoo1.x < con.x + con.width &&
     scoo1.x + scoo1.width > con.x &&
     scoo1.y < con.y + con.height &&
     scoo1.height + scoo1.y > con.y){
     $('.count').text(++count);

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

    }

  }, 1000/60);


  };

detectColl();

// create new class for scoops with collision detection
// attempt to make the scoop move with the cone

// SCORE COUNT
function winScore() {
  if (count === 4){
    alert('You won!')
  }
  break;
}

