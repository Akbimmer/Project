const obj = {
    name: 'Ramazan,',
    age: 25,
    isMarried: false

};
// console.log(obj.name);
console.log(obj ['age']);


let arr = ['daun.png', 'apple.jpg', 6, 'apple.bmp', {}];
console.log(arr[1]); 


var listOfNumbers = [2, 3, "Член", 7, 11];
let index = 0;

function count() {
    if (index <listOfNumbers.length) {
        return index++;
    } else {
        index =0;
        return index++;
    }
}

for (let i = 0; i < 6; i++) {

console.log(listOfNumbers[count()]);
}
// → 2



let points = [
    {x: 2, y: 3},
    {x: 4, y: 1}
];
points.dist = function() {
    let p1 = this[0];
    let p2 = this[1];
    let a = p2.x - p1.x;
    let b = p2.y - p1.y;
    return Math.sqrt(a*a + b*b);    
}
console.log(points.dist());




let primes = [2, 3, 5, 7, 11]; 

function abs (x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}

console.log(abs (-10) === abs (10));

function sum(array) {
    let sum = 0;
    for (let x of array) {
        sum += x;
    }
    return sum;
}
console.log(sum(primes));

function factorial (n) {
    let producte = 1;
    while (n > 1) {
        producte *= n;
        n--;
    }
    return producte;
}

console.log(factorial(4));

function factorial2 (n) {
    let i, producte = 1;
    for (i=2; i <=n; i++)
        producte *=i;
    return producte

}
console.log(factorial2(6));


const obj {
    'Anna' : 500,
    'Alice' : 700
    
};


const arr = ['a', 'b', 'c'];
const arr0bj = {
    a: 'a',
    1: 'b',
    2: 'c'
};
console.log(arr[1]);
console.log(arr0bj[1]);


const arr0bj = {
    a: 'a',
    1: 'b',
    2: 'c',
    abc: {
        adf [{}, {}],
        def: {

        }
    }
};

const b = 'b';

arr0bj.b = '1234';

console.log(arr0bj['b']);

let storeName = "Magazik";
let storeDescription = {
    budget: 10000,
    employees: ['John', 'Pit', 'Mathey'],
    products: {
        anal: 500,
        classic: 200
    },
    open: true
};
console.log((storeDescription(employees[1])), + anal); 