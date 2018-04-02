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
  console.log(el)

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

var $scoop = $('#scoop');
var scoop = document.querySelector('#scoop');
var $cone = $('#cone');
var cone = document.querySelector('#cone');
// var cone = $('.cone');
var $scoopRef = $('.scoopRef');
var $falling = $('.falling');
var $container = $('.container');




function detectColl() {
  setInterval(function(){
    let con =$('#cone')[0].getBoundingClientRect();
    let scoo = $('#scoop')[0].getBoundingClientRect();
    let scoo1 = $('#scoop1')[0].getBoundingClientRect();
    let scoo2 = $('#scoop2')[0].getBoundingClientRect();
    let scoo3 = $('#scoop3')[0].getBoundingClientRect();

    // console.log(scoo.y);
    // console.log(con.x);

    // VANILLA

  if (scoo.x < con.x + con.x + con.width &&
   scoo.x +  scoo.x + scoo.width > con.x &&
   scoo.y < con.y + con.y + con.height &&
   scoo.height + scoo.y + scoo.y > con.y) {
  console.log('detected');

    // detect collision // collision detected!
    // remove scoop from DOM - rem for remove
    // var rem = document.querySelector('scoop');
    // $falling.remove();
    // prepend the scoop to the container with cone
    // $container.prepend();

$("#scoop").addClass('move');
$('#scoop').css("margin-left","50px");
$('#scoop').css("bottom","200px");
    //Sameer commented
    // var co = document.querySelector('.cone');
    // var scp = document.querySelector('.scoop');

} // COOKIES N CREAM
if (scoo1.x < con.x + con.x + con.width &&
   scoo1.x +  scoo1.x + scoo.width > con.x &&
   scoo1.y < con.y + con.y + con.height &&
   scoo1.height + scoo1.y + scoo1.y > con.y){
  console.log('detected too');

$("#scoop1").addClass('move');
$('#scoop1').css("margin-left","50px");
$('#scoop1').css("bottom","250px");

} // MINT N CHOCOLATE
if (scoo2.x < con.x + con.x + con.width &&
   scoo2.x +  scoo2.x + scoo.width > con.x &&
   scoo2.y < con.y + con.y + con.height &&
   scoo2.height + scoo2.y + scoo2.y > con.y){
  console.log('detected too');

$("#scoop2").addClass('move');
$('#scoop2').css("margin-left","50px");
$('#scoop2').css("bottom","300px");

}
// CARAMEL
if (scoo3.x < con.x + con.x + con.width &&
   scoo3.x +  scoo3.x + scoo.width > con.x &&
   scoo3.y < con.y + con.y + con.height &&
   scoo3.height + scoo3.y + scoo3.y > con.y){
  console.log('detected too');

$("#scoop3").addClass('move');
$('#scoop3').css("margin-left","50px");
$('#scoop3').css("bottom","350px");

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



// leftArrowScoop();

// CREATING AN ARRAYS FOR ICE CREAM SCOOPS AND CONE
// second option, since class name did not keep scoops on cone
// array flavors will help keep scoop on cone
// array score will track score

var flavors = [1, 2, 3, 4, 5];
var cone = [];
var score = [];

flavors.push();


