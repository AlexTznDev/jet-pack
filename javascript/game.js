class Game {
  // propiedades

  constructor() {
    this.bg = new Image();
    this.bg.src = "../Images/bg.jpg";
    this.jetPack = new JetPack();
    this.jauge = new Jauge();
    this.counterCoins = new CounterCoins()
    this.frame = 1; // quantité de frame passé dans le jeux
    this.isGameon = true;
    this.missileArr = [];
    this.missileArrLeft = [];
    this.gazolinaArr = [];
    this.count = 10;
    this.isGameOn = true;
    this.missileSeparation = 300;
    this.diamantArr = []
    this.pointArr = [];
    this.countCoins = 0;
    this.numberOfcoins;
    
  }


  gameOver = () => {
    this.isGameon = false;
    canvas.style.display = "none";
    gameOverScrreenDOM.style.display = "flex";
  };

  CheckCounter = () => {
    if (this.frame % 120 === 0) {
      this.count--;
    }
    if (this.count === 0) {
      this.gameOver();
    }
  };

  checkColition = () => {
    this.missileArr.forEach((eachMisile) => {
      if (this.isGameOn && 
        eachMisile.x < this.jetPack.x + this.jetPack.w &&
        eachMisile.x + eachMisile.w > this.jetPack.x &&
        eachMisile.y < this.jetPack.y + this.jetPack.h &&
        eachMisile.h + eachMisile.y > this.jetPack.y 
      ) {
        // Collision detected!
        this.jetPack.missileTouch();
        this.isGameOn = false;
        setTimeout(() => {
          this.gameOver();
        }, 2400);
      }
    });
    this.missileArrLeft.forEach((eachMisile) => {
      if (this.isGameOn && 
        eachMisile.x < this.jetPack.x + this.jetPack.w &&
        eachMisile.x + eachMisile.w > this.jetPack.x &&
        eachMisile.y < this.jetPack.y + this.jetPack.h &&
        eachMisile.h + eachMisile.y > this.jetPack.y
      ) {
        // Collision detected!
        this.jetPack.missileTouch();
        this.isGameOn = false;
        setTimeout(() => {
          this.gameOver();
        }, 2400);
      }
    });
  };

  colitionBotom = () => {
    if ((this.jetPack.y > canvas.height)) {
      this.gameOver();
    }
  };

  drawBg = () => {
    //image background
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
  };

  pointApparence = () => {
    if (this.pointArr.length === 0 || this.frame % 180 === 0) {
      let randomPosX = Math.random() * canvas.width - 100;
      if(randomPosX < 50){
        randomPosX = 50
      }
      let coins = new Points(randomPosX);
      this.pointArr.push(coins);
    }
  };

  diamantApparence = () =>{
    if (this.diamantArr.length === 0 || this.frame % 600 === 0) {
      let randomPosX = Math.random() * canvas.width - 100;
      if(randomPosX < 50){
        randomPosX = 50
      }
      let coins = new Diamant(randomPosX);
      this.diamantArr.push(coins);
    }
  }

  misileApparecenRight = () => {
    if (this.missileArr.length === 0 || this.frame % 60 === 0) {
      let randomPosY = Math.random() * canvas.height;
      let missileRight = new Missile(randomPosY, canvas.width + 200, true);
      this.missileArr.push(missileRight);
    }
  };

  misileApparecenLeft = () => {
    if (this.missileArr.length === 0 || this.frame % 60 === 0) {
      let randomPosY = Math.random() * canvas.height;
      let missileRight = new Missile(randomPosY, -200, false);
      this.missileArrLeft.push(missileRight);
    }
  };

  gazolinaApparence = () => {
    if (this.gazolinaArr.length === 0 || this.frame % 400 === 0) {
      let randomPosXgaz = Math.random() * canvas.width;
      this.gazolina = new Gazolina(randomPosXgaz);
      this.gazolinaArr.push(this.gazolina);
    }
  };

  gazolinaColition = () => {
    this.gazolinaArr.forEach((eachGazolina) => {
      if (
        eachGazolina.x < this.jetPack.x + this.jetPack.w &&
        eachGazolina.x + eachGazolina.w > this.jetPack.x &&
        eachGazolina.y < this.jetPack.y + this.jetPack.h &&
        eachGazolina.h + eachGazolina.y > this.jetPack.y
      ) {
        // Collision detected!
        this.gazolinaArr.splice(eachGazolina.target, 1);
        this.count = 10;
      }
    });
  };

  coinsColition = () => {
    this.pointArr.forEach((eachCoin) => {
      if (
        eachCoin.x < this.jetPack.x + this.jetPack.w &&
        eachCoin.x + eachCoin.w > this.jetPack.x &&
        eachCoin.y < this.jetPack.y + this.jetPack.h &&
        eachCoin.h + eachCoin.y > this.jetPack.y
      ) {
        this.pointArr.splice(eachCoin.target, 1);
        this.countCoins += 2;
        console.log(this.countCoins);
      }
    });
  };

  diamantColition = () => {
    this.diamantArr.forEach((eachDiamant) => {
      if (
        eachDiamant.x < this.jetPack.x + this.jetPack.w &&
        eachDiamant.x + eachDiamant.w > this.jetPack.x &&
        eachDiamant.y < this.jetPack.y + this.jetPack.h &&
        eachDiamant.h + eachDiamant.y > this.jetPack.y
      ) {
        this.diamantArr.splice(eachDiamant.target, 1);
        this.countCoins += 20;
        
      }
    });
  }

  gameLoop = () => {
    this.frame++;
    // 1.limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. movimientos y acciones de todos los elementos
    this.jetPack.gravityJet();
    this.checkColition();
    this.gazolinaColition();
    this.CheckCounter();
    this.coinsColition();
    this.colitionBotom();
    this.diamantColition();

    this.missileArr.forEach((eachMisile) => {
      eachMisile.moveMissile();
    });

    this.missileArrLeft.forEach((eachMisile) => {
      eachMisile.moveMissileToRight();
    });

    this.gazolinaArr.forEach((eachGazolina) => {
      eachGazolina.moveGazolina();
    });

    this.pointArr.forEach((eachPoint) => {
      eachPoint.movePoint();
    });

    this.diamantArr.forEach((eachdiamant)=>{
      eachdiamant.moveDiamant()
    })

    this.pointApparence();
    this.diamantApparence() 
    this.gazolinaApparence();
    this.misileApparecenLeft();
    this.misileApparecenRight();

    // 3. dibujado de los elementos
    this.drawBg();

    if (this.count === 10) {
      this.jauge.drawJauge1();
    } else if (this.count === 9) {
      this.jauge.drawJauge2();
    } else if (this.count === 8) {
      this.jauge.drawJauge3();
    } else if (this.count === 7) {
      this.jauge.drawJauge4();
    } else if (this.count === 6) {
      this.jauge.drawJauge5();
    } else if (this.count === 5) {
      this.jauge.drawJauge6();
    } else if (this.count === 4) {
      this.jauge.drawJauge7();
    } else if (this.count === 3) {
      this.jauge.drawJauge8();
    } else if (this.count === 2) {
      this.jauge.drawJauge9();
    } else if (this.count === 1) {
      this.jauge.drawJauge10();
    } else if (this.count === 0) {
      this.jauge.drawJauge11();
    }

    this.counterCoins.drawCounter()

    this.numberOfcoins = new NumberOfcoins(this.countCoins)
    this.numberOfcoins.drawNumber()


  
    this.missileArr.forEach((eachMisile) => {
      eachMisile.drawMissile();
    });
    this.missileArrLeft.forEach((eachMisile) => {
      eachMisile.drawMissile();
    });
    this.gazolinaArr.forEach((eachGazolina) => {
      eachGazolina.drawGazolina();
    });
    this.pointArr.forEach((eachPoint) => {
      eachPoint.drawPoint();
    });

    this.diamantArr.forEach((eachdiamant)=>{
      eachdiamant.drawDiamant()
    })

    if (this.isGameOn === true) {
      this.jetPack.drawJet();
    } else {
      this.jetPack.drawDiedJet();
    }

    if (this.isGameon === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
