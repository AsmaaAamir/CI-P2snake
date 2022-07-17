// Variables and Constants // 
let snakeDirection ={x:0, y:0}; 
let snakeSpeed = 6;
let lastRenderTime = 0; 
let snakeBody = [{x: 10, y: 10}]
let food = {x: 8, y: 9};
let newSegments = 0;
const appleBite = new Audio('../assets/sound/snake-applebite.mp3')
const endGame = new Audio('../assets/sound/end-game.mp3')
let score = 0; 
let button = document.querySelector('button');
let jstick= document.getElementById('button-pad');

// Frame Rending 
function game(currentTime){
    window.requestAnimationFrame(game);
        if ((currentTime - lastRenderTime)/1000 < 2/snakeSpeed);
          else {
            lastRenderTime = currentTime
            runGame();    }
}
window.requestAnimationFrame(game);

function runGame(){

//creating snake body 
    gameboard.innerHTML = "";
        snakeBody.forEach((element, index) => {
            snakeElemenet = document.createElement('div');
            snakeElemenet.style.gridRowStart = element.y;
            snakeElemenet.style.gridColumnStart = element.x;
            snakeElemenet.classList.add('snake');
            gameboard.appendChild(snakeElemenet);
        })

//Creating the Food  
    foodElemenet = document.createElement('div');
    foodElemenet.style.gridRowStart = food.y;
    foodElemenet.style.gridColumnStart = food.x;
    foodElemenet.classList.add('food')
    gameboard.appendChild(foodElemenet);

//Moving the Snake 
    for (let i = snakeBody.length - 2; i >= 0; i -- ){
        snakeBody[i + 1] = { ...snakeBody[i] }
        }
        snakeBody[0].x += snakeDirection.x;
        snakeBody[0].y += snakeDirection.y;
//Add a new segment to Snake Body
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1]})
    }
    
   
//Snake eating food and new locotion for food
    if (snakeBody[0].y === food.y && snakeBody[0].x === food.x){
        appleBite.play();
        score += 1;
        scoreBox.innerHTML = "score:" + score;
        snakeBody.unshift({x: snakeBody[0].x + snakeDirection.x, y: snakeBody[0].y + snakeDirection.y});
            food = {x:Math.floor(Math.random()*20 +1 ), y: Math.floor(Math.random()*20 +1)}
        
    }
    if(snakeCollide(snakeBody)) {
        endGame.play();
        score = 0;
        snakeDirection = {x:0, y:0};
        alert('Game Over !!!! Press any key to play again....')
        snakeBody = [{x: 10, y: 10}];
        food = {x: 8, y: 9};
        }

// Event Listener
    window.addEventListener ('keydown', element => {
        snakeDirection ={x:0, y:1};
            switch (element.key) {
                case 'ArrowUp' :
                    snakeDirection = { x: 0, y: -1}
                break

                case 'ArrowRight' :
                    snakeDirection = { x: 1, y: 0}
                break

                case 'ArrowDown' :
                    snakeDirection = { x: 0, y: 1}
                break

                case 'ArrowLeft' :
                    snakeDirection = { x: -1, y: 0}
                break 
        }
    })
   }
    function moveUp(){
    snakeDirection = { x: 0, y: -1};
   }

   function moveDown(){
    snakeDirection = { x: 0, y: 1}
   }

    function moveRight(){
    snakeDirection = { x: 1, y: 0}
   }
    function moveLeft(){
    snakeDirection = { x: -1, y: 0}
   }


  


function snakeCollide(snakeBody){
   // If the snake bums into itself
    for (let i = 1; i < snakeBody.length; i++) {
     if (snakeBody[i].x === snakeBody[0].y && snakeBody[i].y === snakeBody[0].x){
         return true;
      } 
    }

    // If the Snake bums into the wall
    if (snakeBody[0].x >= 22 || snakeBody[0].x <= -1 || snakeBody[0].y >= 22 || snakeBody[0].y <=-1){
        return true;
        } 
    
     
    
    }
    



