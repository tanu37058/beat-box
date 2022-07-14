/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
// var sound = new Howl({
//   src: ['dice-sound.mp3']
// });

// // Clear listener after first call.
// sound.once('load',  function(){
//   sound.play();
//   init();
// });

const songs = ['dice-sound.mp3', 'hold.wav', 'win.wav'];

    const playDiceSong = () => {
        const audioTag = document.getElementById("audio");
        audioTag.src = songs[0];
        audioTag.play();
    }
	const playHoldSong = () => {
        const audioTag = document.getElementById("audio");
        audioTag.src = songs[1];
        audioTag.play();
    }
	const playWinSong = () => {
        const audioTag = document.getElementById("audio");
        audioTag.src = songs[2];
        audioTag.play();
    }

var scores, roundScore, activePlayer, gamePlaying ;
var winningScore =100;
var num1=document.querySelector('input');

num1.addEventListener('change',function(){
 winningScore=Number(this.value);
     scores=[0, 0];
	activePlayer=0;
	roundScore=0;
	gamePlaying=true;
	window.addEventListener('load',(event)=>{
 	var sound = new Howl({
  src: ['dice-sound.mp3']
});sound.play();
});
document.querySelector('.dice').style.display='none';
document.querySelector('.dice2').style.display='none';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.getElementById('name-0').textContent='player 1';
document.getElementById('name-1').textContent='player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
 	var sound = new Howl({
  src: ['dice-sound.mp3']
});sound.play();
 
});

 init();

document.querySelector('.btn-roll').addEventListener('click',function(){
	if(gamePlaying){
		var sound = new Howl({
        src: ['dice-sound.mp3']
         });
		sound.play();
	  var dice = Math.floor(Math.random() *6 +1);
	  var dice1 = Math.floor(Math.random() *6 +1);
      // var diceDom=document.querySelector('.dice');
      document.querySelector('.dice').style.display='block';
      document.querySelector('.dice2').style.display='block';
      document.querySelector('.dice').src='dice-'+dice+'.png';
      document.querySelector('.dice2').src='dice-'+dice1+'.png';
      // diceDom.src='dice-'+dice+'.png';
      if (dice!=1 && dice1!=1) {
	    roundScore=roundScore+dice+dice1;
	    document.querySelector('#current-'+ activePlayer).textContent=roundScore;
      } else 
      {
      		nextCode();
      }
	}
});

document.querySelector('.btn-hold').addEventListener('click', function() {
	if(gamePlaying){
		 	var sound = new Howl({
  src: ['dice-sound.mp3']
});sound.play();
	scores[activePlayer] += roundScore;
	document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];	
	if(scores[activePlayer]>=winningScore){
		const audioTag = document.getElementById("audio");
        audioTag.src = 'win.mp3';
        audioTag.play();
		document.querySelector('#name-'+activePlayer).textContent='winner';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.dice2').style.display='none';
        document.querySelector('.player-'+ activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+ activePlayer+'-panel').classList.remove('active');
        gamePlaying=false;
	}
	else{
	 nextCode();
    }
}
});

function nextCode(){
	    activePlayer===0? activePlayer=1 : activePlayer=0;
	    roundScore=0;
	    document.getElementById('current-0').textContent='0';
	    document.getElementById('current-1').textContent='0';
	    document.querySelector('.player-0-panel').classList.toggle('active');
	    document.querySelector('.player-1-panel').classList.toggle('active');
	    document.querySelector('.dice').style.display='none';
	    document.querySelector('.dice2').style.display='none';
     }	;

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
	const audioTag = document.getElementById("audio");
        audioTag.src = 'new.mp3';
        audioTag.play();
    scores=[0, 0];
	activePlayer=0;
	roundScore=0;
	gamePlaying=true;


document.querySelector('.dice').style.display='none';
document.querySelector('.dice2').style.display='none';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.getElementById('name-0').textContent='player 1';
document.getElementById('name-1').textContent='player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.instructions').addEventListener('click', function() {
    document.querySelector('.modal').classList.add('show');
    document.querySelector('.close').addEventListener('click', function() {
      document.querySelector('.modal').classList.remove('show');
    })
})

}



