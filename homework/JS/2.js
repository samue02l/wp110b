function mul(n) {
    // 出口
    if(n == 1 || n == 0){
        return 1;
    }
    //規律
    return n * mul(n - 1);
}