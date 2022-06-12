function add(a,b){
    var c=a;
    for(let x=0;x<a.length;x++){
        for (let y=0;y<a[0].length;y++){
            c[x][y]=a[x][y]+b[x][y];
        }
    }
    console.log(c);
}

add([[1,2],[3,4]], [[1,1],[1,1]]);