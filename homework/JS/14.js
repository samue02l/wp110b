function gcd(a,b){
    if (a%b==0) return Math.abs(b);
    else return gcd(b, a%b);
}
class Ratio{
    constructor(x,y){
        if (y<0){
            this.x=-1*x;
            this.y=-1*y;
        }
        else {
            this.x=x;
            this.y=y;
        }
    }
    add(k){
        return new Ratio(this.x*k.y+k.x*this.y,this.y*k.y)
    }
    sub(k){
        return new Ratio(this.x*k.y-k.x*this.y,this.y*k.y)
    }
    mul(k){
        
        return new Ratio(this.x*k.x,this.y*k.y);
       
    }
    div(k){
        return new Ratio(this.x*k.y,this.y*k.x);
    }
    toString(){
     if (this.y/gcd(this.x,this.y)!=1) return this.x/gcd(this.x,this.y)+'/'+this.y/gcd(this.x,this.y)
                  else return this.x/gcd(this.x,this.y);
     
    }
}

var r1= new Ratio(20,-8);
var r2= new Ratio(-8,8);
console.log(r1.toString());
console.log(r2.toString()); 
console.log((r1.add(r2)).toString());
console.log((r1.sub(r2)).toString());
console.log((r1.mul(r2)).toString());
console.log((r1.div(r2)).toString());