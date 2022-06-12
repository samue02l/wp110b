function filter357(a,b){
    var array = [];
    for (let x=a;x<=b;x++){
        if((x%3!=0) && (x%5!=0) && (x%7!=0))
        array.push(x);
        
    }
    console.log(array);
}

filter357(5,10);
filter357(5,15);