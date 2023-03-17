//1. Print odds 1-20
for(var x = 1; x <= 20; x+=2) {
    console.log(x);
}

//2. Decreasing Multiples of 3
for(var x = 100; x >= 0; x--) {
    if(x % 3 == 0) {
        console.log(x);
    }
}

//3. Print the sequence
for(var x = 4; x >= -3.5; x-=1.5) {
    console.log(x);
}

//4. Sigma
var sum = 0;
for(var x = 0; x <= 100; x++) {
    sum += x;
}
console.log(sum);

//5. Factorial
var product = 1;
for(var x = 1; x <= 12; x++) {
    product *= x;
}
console.log(product);