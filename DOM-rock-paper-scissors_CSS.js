const score={wins:0, losses:0, ties:0};
   
         updateScore();

         function pickComputerMove()
         {
            let computerMove='';
            const randomNumber = Math.random();
         if (randomNumber >=0 && randomNumber<(1/3))
         {
            computerMove='Rock';
         }else if(randomNumber>= 1/3 && randomNumber < 2 / 3){
            computerMove='Paper';
         }else{
            computerMove='Scissors';
         }
         return computerMove;
         }

         function playGame(playerMove)
         {
         let computerMove=pickComputerMove();
         let result='';
         if(playerMove==='Rock')
         {
            if(computerMove==='Rock')
            {
               result='Tie.';
            }else if(computerMove=='Paper')
            {
               result='You lose.';
            }else if(computerMove==='Scissors')
            {
               result='You win.';
            }
         } 
         else if(playerMove==='Paper')
         {
               if(computerMove==='Rock')
            {
               result='You win.';
            }else if(computerMove=='Paper')
            {
               result='Tie.';
            }else if(computerMove==='Scissors')
            {
               result='You lose.';
            }
         }else if(playerMove==='Scissors')
         {
            if(computerMove==='Rock')
            {
               result='You lose.';
            }else if(computerMove=='Paper')
            {
               result='You win.';
            }else if(computerMove==='Scissors')
            {
               result='Tie.';
            }
         }
         if(result==='You win.')
         {
            score.wins +=1;
         }
         else if(result==='You lose.')
         {
            score.losses +=1;
         }
         else if(result==='Tie.')
         {
            score.ties +=1;
         }
         updateScore();

         document.querySelector('.js-result').innerHTML=result;

         document.querySelector('.js-moves').innerHTML=`You <img src="${playerMove}-emoji.png" class='move-icon'>  <img src="${computerMove}-emoji.png" class='move-icon'> Computer`;

         //alert(`You picked ${playerMove}. computer picked ${computerMove}. ${result}\nWins: ${score.wins},Losses: ${score.losses},Ties: ${score.ties}`);
         }

         function updateScore()
         {
            document.querySelector('.js-score').innerHTML=`Wins: ${score.wins},Losses: ${score.losses},Ties: ${score.ties}`;
         }