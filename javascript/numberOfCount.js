class NumberOfcoins {

constructor(result){

    this.x = canvas.width - 120;
    this.y = 106;
    this.h = 200;
    this.w = 200;
    this.result = result

}



drawNumber = () =>{

    ctx.font = "30px Arial";
    ctx.fillText(this.result, this.x, this.y);

}









}