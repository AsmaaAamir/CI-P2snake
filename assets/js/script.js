// Variables and Constants // 


let snakeDirection ={x:0, y:0}; 
let snakeSpeed = 3;
let lastRenderTime = 0; 
let snakeBody = [{x: 10, y: 10}]
let food = [{ x:5, y:5}]



// Frame Rending 
function game(currentTime){
    window.requestAnimationFrame(game);
    console.log(currentTime);
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

    //Creating the food 
    food.forEach((element, index) => {
        foodElemenet = document.createElement('div');
        foodElemenet.style.gridRowStart = element.y;
        foodElemenet.style.gridColumnStart = element.x;
        foodElemenet.classList.add('food');
        gameboard.appendChild(foodElemenet);
    })
    //snake move 
        for (let i = snakeBody.length - 2; i >= 0; i -- ){
            snakeBody[i + 1] = { ...snakeBody[i] }
        }
        //snakeBody[0].x += 0 
        //snakeBody[0].y += 1
// Event Listener
    window.addEventListener ('keydown', element => {
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
// snake move and direction 




//Snake eating food 





function collide (snakeB) {
    // If snake hit the wall
   

    //If snake collide into it self
    
}