function solution(x) {
    let n = x;
    let sum = 0;
    do{
        sum += n%10;
        n = Math.floor(n/10);
    }while(n>0);
    return x % sum !== 0 ? false : true;
}