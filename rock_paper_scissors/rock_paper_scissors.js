

    
    let score = JSON.parse(localStorage.getItem('score'))|| {
        Wins : 0,
        Losses : 0,
        Ties : 0,
        
    };
    
    updateScore();
    

    function playGame(playermove){
        const computer_move = pickComputer_move();
        let result = '';
        if(playermove === 'scissors'){
            if(computer_move === 'rock'){
            result = 'You Loose.';
            }else if( computer_move === 'paper'){
            result = 'You Win.'
            }else {
            result = 'Tie.'
            }
        }else if(playermove === 'rock'){
            if(computer_move === 'rock'){
                result = 'Tie.';
            }else if( computer_move === 'paper'){
                result = 'You Loose.'
            }else {
                result = 'You Win.'
            }
        }else{
            if(computer_move === 'rock'){
            result = 'You Win.';
            }else if( computer_move === 'paper'){
            result = 'Tie.'
            }else {
            result = 'You Loose.'
            }
        }
        
        
        if( result === 'You Win.'){
            score.Wins = score.Wins +1 ;
        }else if(result === 'You Loose.'){
            score.Losses = score.Losses + 1 ;
        }else if (result === 'Tie.'){
            score.Ties +=1

        }

        document.querySelector('.js-result')
            .innerHTML = result;
        document.querySelector('.js-move')
            .innerHTML =`You <img class="move-icon" src="game-icons/${playermove}-emoji.png" alt=""> <img class="move-icon" src="game-icons/${computer_move}-emoji.png" alt="">Computer`;

        updateScore();
        localStorage.setItem('score' , JSON.stringify(score));
        
        
        
        
        
        
    
    }
    function updateScore(){
        document.querySelector('.js-score')
            .innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
    }
    
    
    function pickComputer_move() {
        let computer_move = '';
        const random_number = Math.random();
        if(random_number >= 2/3 && random_number < 1){
        computer_move = 'scissors';
        } else if(random_number >=0 && random_number < 1/3 ){
        computer_move = 'rock';
        }else if(random_number >= 1/3 && random_number < 2/3){
        computer_move = 'paper';}


        return computer_move;
    } 