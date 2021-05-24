function Calculator(a,b){
    this.a = a;
    this.b = b;
}

Calculator.prototype.add=function(){
    return this.a + this.b;
}

Calculator.prototype.sub=function(){
    return this.a - this.b;
}

Calculator.prototype.mult=function(){
    return this.a * this.b;
}

Calculator.prototype.log=function(){
    console.log( 'a + b = ' + this.add(this.a,this.b)+'\n'+
            'a - b = ' + this.sub(this.a,this.b)+'\n'+
            'a * b = ' + this.mult(this.a,this.b));
}

var c1 = new Calculator(5,10);
c1.log();

function alertFunc() {
   c2.log();
  }
setTimeout(alertFunc,2000);