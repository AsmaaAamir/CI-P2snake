// Variables and Constants // 


let direction ={x:0, y:0}; 
let speed = 2;
let lastRenderTime = 0; 
let snakeBody = [{x: 10, y: 10}]



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
    snakeBody.forEach((element, index) => {
        snakeElemenet = document.createElement('div');
        snakeElemenet.style.gridRowStart = x:10;
        snakeElemenet.style.gridColumnStart = y:10;
    })


}








