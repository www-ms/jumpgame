var character = document.getElementById('character');
var block = document.getElementById('block');
var block2 = document.getElementById('block2');
var score = document.getElementById('score');
var scorecount = 1;
document.onclick = () => {
    if (character.classList != 'animation') {
        character.classList.add('animation');
    }
    setTimeout(function () {  
        character.classList.remove('animation');
    },400)
}
var checkdead = setInterval(() => {
    scorecount += .1;
    score.innerHTML = Math.floor(scorecount);
    var charactertop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    var block2left = parseInt(window.getComputedStyle(block2).getPropertyValue('left'));
    if (((blockleft<20 && blockleft>0) || (block2left<20 && block2left>0)) && charactertop>130) {
        block.style.animation = 'none';
        block2.style.animation = 'none';
        alert('game over! SCORE:='+Math.floor(scorecount));
        window.location.reload();
    }
},10);