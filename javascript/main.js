const startBtnDOM = document.querySelector("#start-btn");
const startScreenDOM = document.querySelector("#splash-screen");
const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");
const restartBtn = document.querySelector("#restart-btn")
let game;
const gameOverScrreenDOM = document.querySelector("#gameover-screen");
// const sound = document.querySelector("#jet-pack-sound")


const startGame = () => {

  startScreenDOM.style.display = "none";
  gameOverScrreenDOM.style.display ="none"
  canvas.style.display = "block";
 
  // 2. crear un objeto de la clase Game
  game = new Game();

  // 3. iniciar el juego (el game loop)
  game.gameLoop();
};

startBtnDOM.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);
window.addEventListener("keydown", (event) => {
    
    if(event.code === "Space"){
        game.jetPack.jumpJet()
    }else if(event.code === "ArrowRight"){
        game.jetPack.movejetRight()
    }else if(event.code === "ArrowLeft"){
        game.jetPack.movejetLeft()
    }
    // else  if(event.code === "ArrowDown"){
    //     game.jetPack.moveJetDown()
    // }
})
