function f(n){
    if(n==0){
        console.log("first",n);
        return 1
    }
    console.log("sec",n);
    return n+f(n-1)

}
console.log(f(5))