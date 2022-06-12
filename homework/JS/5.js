//不能被3，5，7整除的
function mean(a){
    var sum=0;
    for (let y=0;y<a.length;y++)
    sum+=a[y];
    console.log(sum/a.length);
}

mean([1,2,3,4,5]);
mean([1,2,3,4,5,6]);