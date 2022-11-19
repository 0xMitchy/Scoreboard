// Test by casually console logging out a message to be clear that the button is working
// Test to know whether the correct id is being called

//create variables for DOM
//create variable to count the score
//define different functions for home and guest

let numEl = document.getElementById("score-1")
let numEl2= document.getElementById("score-2")
let score1 = 0
let score2 = 0


// Declaring functions for the addition operations
function addOne()
{
    score1 += 1
    numEl.textContent = score1   
}

function addOne_()
{
    score2 += 1
    numEl2.textContent = score2  
}

function addTwo()
{
    score1 += 2
    numEl.textContent = score1   
}

function addTwo_()
{
    score2 += 2
    numEl2.textContent = score2   
}

function addThree()
{
    score1 += 3
    numEl.textContent = score1  
}

function addThree_()
{
    score2 += 3
    numEl2.textContent = score2
}