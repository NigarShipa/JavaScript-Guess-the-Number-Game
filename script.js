/*
again
number
check
message
score
highscore
guess
*/
'use strict'
let secretNumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;
document.querySelector('.check').addEventListener
('click',function()
{
    let guess=Number(document.querySelector('.guess').value);
    //If Input is Empty
    if(!guess)
{
    document.querySelector('.message').textContent='No number!';
}
//guess and secrect number is equal
else if(guess===secretNumber)
{
    document.querySelector('.message').textContent='Correct Number';
    document.querySelector('.number').textContent=secretNumber;
    document.querySelector('body').style.backgroundColor='#CD5C5C';
    document.querySelector('.number').style.width='30rem';

    if(score>highscore)
    {
        highscore=score;
        document.querySelector('.highscore').textContent=highscore;
    }

}
else if(guess!==secretNumber)
{
    if(score>1)
    {
     //if guess>secretNumber output will Too high otherwise Too low   
    document.querySelector('.message').textContent=guess>secretNumber ?'Too high' : 'Too low';
    score--;
    document.querySelector('.score').textContent=score;
    }
    else
    {
        document.querySelector('.message').textContent='You lost the game!';
        document.querySelector('.score').textContent=0;
    }

}
/*else if(guess>secretNumber)
{
    if(score>1)
    {
    document.querySelector('.message').textContent='Too high';
    score--;
    document.querySelector('.score').textContent=score;
    }
    else
    {
        document.querySelector('.message').textContent='You lost the game!';
        document.querySelector('.score').textContent=0;
    }
}
else if(guess<secretNumber)
{
    if(score>1)
    {
        document.querySelector('.message').textContent='Too low';
        score--;
         document.querySelector('.score').textContent=score;
    }
     else
    {
        document.querySelector('.message').textContent='You lost the game!';
        document.querySelector('.score').textContent=0;
    }   
}*/
});
document.querySelector('.again').addEventListener('click',function()
{
    score=20;
    secretNumber=Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';

});



