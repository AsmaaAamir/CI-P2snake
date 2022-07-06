// Variables and Constants // 


let direction ={x:0, y:0}; 
let speed = 2;
let lastRenderTime = 0; 
let snakeBody = [{x: 10, y: 10}]
let food = [{ x:5, y:5}]



// Frame Rending 
function game(currentTime){
    window.requestAnimationFrame(game);
    console.log(currentTime);
        if ((currentTime - lastRenderTime)/1000 < 1/speed);
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

}








