class Ratio{
    constructor(a,b){
        this.a=a;
        this.b=b;
    }
    add(x){
        return new Ratio(this.a*x.b+this.a.a*this.b,this.b*x.b)
    }
    sub(x){
        return new Ratio(this.a*x.b-x.a*this.b,this.b*x.b)
    }
    toString(){
        return this.a+'/'+this.b;
    }

}
var r1 = new Ratio(1,-3);
var r2 = new Ratio(2,4); 
var r3 = r1.add(r2);
var r4=r1.sub(r2);
console.log(r3.toString()); 
console.log(r4.toString()); 