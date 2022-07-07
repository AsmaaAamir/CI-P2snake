// Variables and Constants // 


let snakeDirection ={x:0, y:0}; 
let snakeSpeed = 3;
let lastRenderTime = 0; 
let snakeBody = [{x: 10, y: 10}]
let food = {x: 8, y: 9};
const snakeGrowth = 2;
let score = 0;
let newSegments = 0;


// Frame Rending 
function game(currentTime){
    window.requestAnimationFrame(game);
    //console.log(currentTime);
        if ((currentTime - lastRenderTime)/1000 < 1/snakeSpeed);
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
        snakeBody[0].x += snakeDirection.x
        snakeBody[0].y += snakeDirection.y

//Add segment to Snake Body
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1]})
    }
    
   
//Snake eating food and new locotion for food
    if (snakeBody[0].y === food.y && snakeBody[0].x === food.x){
        snakeBody.unshift({x: snakeBody[0].x + snakeDirection.x, y: snakeBody[0].y + snakeDirection.y});
        while (food.x = Math.random() * (20 - 1), y = Math.random() * (20 - 1) );
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
    });

}

//If snake collide into it self
    //if(isCollide(snakeBody)){
        //snakeDirection = {x:0, y:0};
       // alert( 'Game Over !!!! Press any key to play again....')
       // snakeBody = [{x: 10, y: 10}];
       // score = 0 






//function snakeCollide(snakeBody){
    //return false;
