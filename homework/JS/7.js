function transpose(a){
    var b=[];
    for (let i=0;i<a[0].length;i++)
    b.push(new Array(a.length));
   
    for (let x = 0; x < a.length; x++)
    {
        for (let y = 0; y < a[0].length; y++)
        {
            b[y][x] = a[x][y];
        }
    }
    console.log(b);
}
transpose([[1,2,3],[3,2,1]]);