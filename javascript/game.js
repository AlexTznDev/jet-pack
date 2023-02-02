class Game {
  // propiedades

  constructor() {
    this.bg = new Image();
    this.bg.src = "./Images/bg.png";
    this.jetPack = new JetPack();
    this.jauge = new Jauge();
    this.counterCoins = new CounterCoins();
    this.frame = 1; // quantité de frame passé dans le jeux
    this.isGameon = true;
    this.isGameOn = true;
    this.missileArr = [];
    this.missileArrLeft = [];
    this.gazolinaArr = [];
    this.count = 10;
    this.missileSeparation = 300;
    this.diamantArr = [];
    this.pointArr = [];
    this.countCoins = 0;
    this.numberOfcoins;
    this.protection = false;
    this.bubbleArr = [];
    this.explosion = new Explosion(0);
    this.positionExplosionArr = [];
    this.nivel = 1;
    this.breakNivel = false;
    this.twoPoint = new More2();
    this.twoPointPositionARR = [];
    this.twoPointBoolean = false;
    this.twentyPoint = new More20();
    this.twentyPointPositionARR = [];
    this.twentyPointBoolean = false;
    this.countBubble = 0;
  }

  gameOver = () => {
    this.isGameon = false;
    canvas.style.display = "none";
    gameOverScrreenDOM.style.display = "flex";
    soundLoose.pause();
  };

  CheckCounter = () => {
    if (
      this.frame % 120 === 0 &&
      this.protection === false &&
      this.breakNivel === false
    ) {
      this.count--;
    }
    if (this.count === 0) {
      this.isGameOn = false;
      soundLoose.play();
      this.jetPack.missileTouch();
    }
  };

  checkColition = () => {
    this.missileArr.forEach((eachMisile) => {
      if (
        this.breakNivel === false &&
        this.isGameOn &&
        this.protection === false &&
        eachMisile.x < this.jetPack.x + this.jetPack.w &&
        eachMisile.x + eachMisile.w > this.jetPack.x &&
        eachMisile.y < this.jetPack.y + this.jetPack.h &&
        eachMisile.h + eachMisile.y > this.jetPack.y
      ) {
        // Collision detected!

        this.positionExplosionArr.push(eachMisile.y - 50);
        this.positionExplosionArr.push(eachMisile.x - 50);
        this.missileArr.splice(eachMisile.target, 1);
        this.jetPack.missileTouch();
        this.isGameOn = false;
        soundexplosion.play();
        soundLoose.play();
      }
    });
    this.missileArrLeft.forEach((eachMisile) => {
      if (
        this.breakNivel === false &&
        this.isGameOn &&
        this.protection === false &&
        eachMisile.x < this.jetPack.x + this.jetPack.w &&
        eachMisile.x + eachMisile.w > this.jetPack.x &&
        eachMisile.y < this.jetPack.y + this.jetPack.h &&
        eachMisile.h + eachMisile.y > this.jetPack.y
      ) {
        // Collision detected!

        this.positionExplosionArr.push(eachMisile.y);
        this.positionExplosionArr.push(eachMisile.x + 50);
        this.missileArrLeft.splice(eachMisile.target, 1);
        this.jetPack.missileTouch();
        this.isGameOn = false;
        soundexplosion.play();
        soundLoose.play();
      }
    });
  };

  colitionBotom = () => {
    if (this.jetPack.y > canvas.height) {
      this.gameOver();
    }
  };

  drawBg = () => {
    //image background
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
  };

  pointApparence = () => {
    if (
      this.pointArr.length === 0 ||
      (this.frame % 180 === 0 && this.breakNivel === false)
    ) {
      let randomPosX = Math.random() * canvas.width - 100;
      if (randomPosX < 50) {
        randomPosX = 50;
      }
      let coins = new Points(randomPosX);
      this.pointArr.push(coins);
    }
  };

  bipSound = () => {
    if (
      this.count === 3 &&
      this.breakNivel === false &&
      this.protection === false
    ) {
      soundBip.play();
    } else if (
      this.count === 2 &&
      this.breakNivel === false &&
      this.protection === false
    ) {
      soundBip.play();
    } else if (
      this.count === 1 &&
      this.breakNivel === false &&
      this.protection === false
    ) {
      soundBip.play();
    }
  };

  diamantApparence = () => {
    if (this.frame % 600 === 0 && this.breakNivel === false) {
      let randomPosX = Math.random() * canvas.width - 100;
      if (randomPosX < 50) {
        randomPosX = 50;
      }
      let coins = new Diamant(randomPosX);
      this.diamantArr.push(coins);
    }
  };

  misileApparecenRight = () => {
    if (
      this.missileArr.length === 0 ||
      (this.frame % 300 === 0 && this.nivel === 1 && this.breakNivel === false)
    ) {
      let randomPosY = Math.random() * canvas.height;
      let missileRight = new Missile(randomPosY, canvas.width + 200, true);
      this.missileArr.push(missileRight);
    } else if (
      this.missileArr.length === 0 ||
      (this.frame % 60 === 0 && this.nivel === 2 && this.breakNivel === false)
    ) {
      let randomPosY = Math.random() * canvas.height;
      let missileRight = new Missile(randomPosY, canvas.width + 200, true);
      this.missileArr.push(missileRight);
    }
  };

  misileApparecenLeft = () => {
    if (
      this.missileArr.length === 0 ||
      (this.frame % 300 === 0 && this.nivel === 1 && this.breakNivel === false)
    ) {
      let randomPosY = Math.random() * canvas.height;
      let missileRight = new Missile(randomPosY, -200, false);
      this.missileArrLeft.push(missileRight);
    } else if (
      this.missileArr.length === 0 ||
      (this.frame % 60 === 0 && this.nivel === 2 && this.breakNivel === false)
    ) {
      let randomPosY = Math.random() * canvas.height;
      let missileRight = new Missile(randomPosY, -200, false);
      this.missileArrLeft.push(missileRight);
    }
  };

  gazolinaApparence = () => {
    if (
      this.gazolinaArr.length === 0 ||
      (this.frame % 400 === 0 && this.breakNivel === false)
    ) {
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
        soundgazolina.play();
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
        this.twoPointPositionARR = [eachCoin.x, eachCoin.y];
        this.twoPointBoolean = false;
        setTimeout(() => {
          this.twoPointBoolean = true;
        }, 500);

        this.pointArr.splice(eachCoin.target, 1);
        this.countCoins += 2;
        soundSCoin.play();

        if (this.countCoins >= 20 && this.nivel === 1) {
          this.nivel = 2;
          this.breakNivel = true;
          nivelNextDOM.style.display = "flex";
          nivelNextPopUpDOM.style.display = "flex";
          blackScreenDOM.style.display = "flex";
        }
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
        this.twentyPointPositionARR = [eachDiamant.x, eachDiamant.y];
        this.twentyPointBoolean = false;
        setTimeout(() => {
          this.twentyPointBoolean = true;
        }, 1000);

        this.diamantArr.splice(eachDiamant.target, 1);
        this.countCoins += 20;
        soundSCoin.play();

        if (this.countCoins >= 20 && this.nivel === 1) {
          this.nivel = 2;
          this.breakNivel = true;
          nivelNextDOM.style.display = "flex";
          nivelNextPopUpDOM.style.display = "flex";
          blackScreenDOM.style.display = "flex";
        }
      }
    });
  };

  bubbleApparence = () => {
    if (this.frame % 400 === 0 && this.breakNivel === false) {
      let randomPosXBuble = Math.random() * canvas.width;
      this.bubble = new Bubble(randomPosXBuble);
      this.bubbleArr.push(this.bubble);
    }
  };

  bubbleCollition = () => {
    this.bubbleArr.forEach((eachBubble) => {
      if (
        eachBubble.x < this.jetPack.x + this.jetPack.w &&
        eachBubble.x + eachBubble.w > this.jetPack.x &&
        eachBubble.y < this.jetPack.y + this.jetPack.h &&
        eachBubble.h + eachBubble.y > this.jetPack.y
      ) {
        this.bubbleArr.splice(eachBubble.target, 1);
        this.protection = true;
        soundBubble.play();
        this.countBubble = 5;
      }
    });

    if (
      this.frame % 60 === 0 &&
      this.protection === true &&
      this.countBubble > 0
    ) {
      this.countBubble--;
    }else if (this.countBubble === 0) {
      this.protection = false;
    }



  };

  gameLoop = () => {
    this.frame++;
    // 1.limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. movimientos y acciones de todos los elementos
    if (
      this.isGameOn === true &&
      this.protection === false &&
      this.breakNivel === false
    ) {
      this.jetPack.gravityJet(2.5);
    } else if (
      this.isGameOn === false &&
      this.protection === false &&
      this.breakNivel === false
    ) {
      this.jetPack.gravityJet(5.5);
    } else if (this.protection === true && this.breakNivel === false) {
      this.jetPack.gravityJet(1.7);
    }

    this.checkColition();

    if (this.breakNivel === false) {
      this.coinsColition();
      this.gazolinaColition();
      this.CheckCounter();
      this.colitionBotom();
      this.diamantColition();
      this.bubbleCollition();
    }

    //sound methode
    this.bipSound();

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

    this.diamantArr.forEach((eachdiamant) => {
      eachdiamant.moveDiamant();
    });
    this.bubbleArr.forEach((eachBubble) => {
      eachBubble.moveBubble();
    });

    this.pointApparence();
    this.diamantApparence();
    this.gazolinaApparence();
    this.misileApparecenLeft();
    this.misileApparecenRight();
    this.bubbleApparence();

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

    this.counterCoins.drawCounter();

    this.numberOfcoins = new NumberOfcoins(this.countCoins);
    this.numberOfcoins.drawNumber();

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

    this.bubbleArr.forEach((eachBubble) => {
      eachBubble.drawBubble();
    });

    this.diamantArr.forEach((eachdiamant) => {
      eachdiamant.drawDiamant();
    });

    this.explosion.drawExplosion(
      this.positionExplosionArr[1],
      this.positionExplosionArr[0]
    );

    if (this.twoPointBoolean === false) {
      this.twoPoint.drawTwoPoint(
        this.twoPointPositionARR[0],
        this.twoPointPositionARR[1]
      );
    }

    if (this.twentyPointBoolean === false) {
      this.twentyPoint.drawTwentyPoint(
        this.twentyPointPositionARR[0],
        this.twentyPointPositionARR[1]
      );
    }

    if (this.isGameOn === true && this.protection === false) {
      this.jetPack.drawJet();
    } else if (this.isGameOn === false && this.protection === false) {
      this.jetPack.drawDiedJet();
    } else if (this.countBubble === 5 && this.protection === true) {
      this.jetPack.drawBubbleJet5();
    } else if (this.countBubble === 4 && this.protection === true) {
      this.jetPack.drawBubbleJet4();
    } else if (this.countBubble === 3 && this.protection === true) {
      this.jetPack.drawBubbleJet3();
    } else if (this.countBubble === 2 && this.protection === true) {
      this.jetPack.drawBubbleJet2();
    } else if (this.countBubble === 1 && this.protection === true) {
      this.jetPack.drawBubbleJet1();
    }

    if (this.isGameon === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
