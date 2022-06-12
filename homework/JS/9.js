function f(a){
    var array=new Array(a);
    array[0]=1;
    array[1]=1;
    for( let x=2;x<a;x++){
        array[x]=array[x-1]+array[x-2];
    }
    console.log(array[a-1]);
}

f(7);