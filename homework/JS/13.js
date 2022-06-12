class Ratio{
    constructor(a,b){
        this.a=a;
        this.b=b;
    }
    mul(x){
        return new Ratio(this.a*x.b,this.b*x.b)
    }
    div(x){
        return new Ratio(this.a*x.b,this.b*x.b)
    }
    toString(){
        return this.a+'/'+this.b;
    }

}
var r1 = new Ratio(1,-3);
var r2 = new Ratio(2,4); 
var r3 = r1.mul(r2);
var r4=r1.div(r2);
console.log(r3.toString()); 
console.log(r4.toString()); 