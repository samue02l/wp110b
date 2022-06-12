function isPrime(b){
    var count=0;
    if (Number.isInteger(b) && b>=2) {
        for (let x=2;x<=Math.floor(Math.sqrt(b));x++)
        {
            if (b%x==0) count=1;
        }
    }
    else return 0;

    if (count==0) return 1;
    else return 0;
}
function factor(b){
    var array=[];
    var array1=[];
    for (let x=1;x<=b;x++){
        if (isPrime(x)==1 && b%x==0) array.push(x);
    }
        for (let x=0;x<array.length;x++)
    {
            while(b!=1 && b%array[x]==0)
        {
             b/=array[x];
             array1.push(array[x]);
        }
    }
    console.log(array1);
}
factor(45);
factor(27);