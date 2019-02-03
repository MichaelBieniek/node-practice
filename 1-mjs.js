// block scope
console.log("***Block scope***");
// object literals
console.log("***Object literals***");
const mystery = "p2";
const PI = Math.PI;
this.id = "root";
const obj = {
    p1: 10,
    f1() {
        console.log(this);
    },
    f2: () => {
        console.log(this);
    },
    [mystery]: 42, // dynamic property - name evaluated first
    PI
};
console.log(obj);
function aTemp() {
    obj.f1(); // prints function (caller) scope
    obj.f2(); // prints scope of where it was defined
}
aTemp();

// closures
console.log("***Closures***");
function outer() {
    var b = 10;
    function inner() {
        var a = 20;
        console.log(a + b);
    }
    return inner;
}
outer()();
outer()();

// destructuring
// default args skipped with ,,

// template strings and "interpolation"
