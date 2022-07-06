// Variables and Constants // 


let direction ={x:0, y:0}; 
let speed = 2;
let lastRenderTime = 0; 



// Frame Rending 
function game(currentTime){
    window.requestAnimationFrame(game);
    console.log(currentTime);
    if ((currentTime - lastRenderTime)/1000 < 1/speed){
        return;
    } else 
    lastRenderTime = currentTime
    runGame();    
}
 function runGame(){
    
 }



window.requestAnimationFrame(game);



function direction (){

}

function snakeMove (){

}

function snakesFoodv(){

    
}