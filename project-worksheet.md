# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

|  Day | Deliverable | 
|---|---| 
|Day 1: Tue| Wireframes and Priority Matrix|
|Day 2: Wed| Project Approval /  Pseudocode / actual code|
|Day 3: Thur| Basic Clickable Model |
|Day 4: Fri| Working Prototype |
|Day 5: Sat| Final Working Project |
|Day 6: Sun| Bugs / Stylying / PostMVP |
|Day 7: Mon| Project Presentations |


## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

I am creating an Ice Cream Game. 

The game will consist of a landing view, a form, a game view, and a replay option at the end. 
The landing view will have a 'start game' button. The form will ask for the player's name. 

This game only requires 1 player at a time. 

In the game view, you will have a cone positioned at the bottom of the screen. It will have a key pressed function with the left and right arrows that will move the cone across the game view. Ice cream scoops of various flavors (colors) will fall from the top of the game view, as if it were raining ice cream. The goal to win is to catch or top 4 ice cream scoops on the cone. The player essentially wins the game.


## Wireframes

Include images of your wireframes. 
![wire-fame](http://res.cloudinary.com/daracell/image/upload/v1522243220/Images/fullPage.jpg "Full Page Wire Frame")
![wire-fame](http://res.cloudinary.com/daracell/image/upload/v1522243219/Images/form.jpg "Form View")
![wire-fame](http://res.cloudinary.com/daracell/image/upload/v1522243220/Images/landing.jpg "Landing View")
![wire-fame](http://res.cloudinary.com/daracell/image/upload/v1522243219/Images/game.jpg "Game View")
![wire-fame](http://res.cloudinary.com/daracell/image/upload/v1522243219/Images/alert.jpg "Alert")


## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix. 
![wire-fame](http://res.cloudinary.com/daracell/image/upload/v1522243220/Images/matrix.jpg "Matrix") 

## Game Components

### Landing Page
What will a player see when they start your game?
The landing view will have a 'start game' button. Along the side are ice cream cones and the game title on the top. 

### Game Initialization
What will a player see when the game is started? 
When the game is started, the player will have a cone positioned at the bottom of the screen. Ice cream scoops of various flavors (colors) will fall from the top of the game view, as if it were raining ice cream.

### Playing The Game
What will be the flow of the game, what will the user be expeted to do and what will the user expect from the game

The goal to win is to catch or top 4 ice cream scoops on the cone. The player will win the game.

### Winning The Game
What does it look like when the game ends, what determines winning or losing?


I will use collision detection to keep track of the ice cream scoops topped on the cone. The player wins the game when 4 scoops are topped on the cone. 

<!-- function collisionDetection() {
    for(c=0; c<iceCreamCount; c++) {
        for(d=0; d<scoopsDroppedCount; d++) {
            var cone = cone[c];
            // calculations
        }
    }
} -->



<!-- cone.addEventListener(' ',function(){
 let score = document.querySelector('.icecreamscore');

 if(points<10){
  // add 1 points every time an ice cream scoop is topped on the cone
    points +=10;
 score.innerText=points;
 // when the user scores 10... deliver the alert ('You win!')
} 
 -->
### Game Reset
How will the user restart the game once it has been completed.

Whether win or lose, the player can choose to replay the game and start over. 

When the player wins, the alert shows up ('You win!'). 

 

## MVP 

Include the full list of features that will be part of your MVP 
- Pseudocode and organization
- Landing View
- Game View
- Form
- Collision Detection
- Event Listeners
- Physics 
- Score Count
- Win / lose


## POST MVP

Include the full list of features that you are considering for POST MVP
## Functional Components

- Favorite Ice Cream Reward (input value player types in on the form)
- Instructions Page View

Based on the initial logic defined in the previous game phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method. 

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. 

| Component | Priority | Estimated Time | Time Invested | Actual Time |

Form  |  H   | 10hrs   | 0hrs  |   0hrs
Dynamically Adding images   |  L   | 5hrs   | 0hrs  |   0hrs
Win Logic   |  H   | 15hrs   | 0hrs  |   0hrs
Creating classes    |  H   | 5hrs   | 0hrs  |   0hrs
Adding animations   |  H   | 5hrs   | 0hrs  |   0hrs
Keeping Score |  H   | 3hrs   | 0hrs  |   0hrs
Key Press Events    |  L   | 3hrs   | 0hrs  |   0hrs
Win Count   |  L   | 3hrs   | 0hrs  |   0hrs



## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| .setInterval() | This will run a function multiple times every X amount of milliseconds
| .push() | This will push the number of ice cream scoops  

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  

## jQuery Discoveries
 Use this section to list some, but not all, of the jQuery methods and\or functionality discovered while working on this project.

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.


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
#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
