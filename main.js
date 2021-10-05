"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
console.log("hello world!");
var something = {
    day: "Teachers day",
    whatever: true,
};
console.log(something.whatever);
var myFunction = function () {
    console.log("arrow function example");
};
var a;
var b;
var c;
a = "Hello World";
a = 20;
c = true;
b = "some awesome string";
var getMessage = function (first, second, third) {
    return first + " " + second + " " + third;
};
console.log(getMessage(a, b, c));
var arr1 = [1, 2, 3, 4];
var arr2 = ["hello", "world", "is", "great"];
var arr3 = [true, false, true, false];
var arr4 = [true, 20];
var arr5 = [];
var arr6 = [];
arr6.push("Diana", 20, true, "red");
console.log(arr6);
arr4.push(25);
arr1.push(false);
arr2.push(20);
arr3.push("false");
console.log(arr1 + "- arr1");
console.log(arr2 + "- arr2");
console.log(arr3 + "- arr3");
console.log(arr4 + "- arr4");
console.log(arr5 + "- arr5");
console.log(arr6 + "- arr6");
var obj1 = {
    name: "Diana",
    age: 25,
    resting: false
};
obj1 = {
    name: 20,
    age: "Jane",
    rest: true,
};
obj2 = __assign(__assign({}, obj1), { lastName: "Korotkevica" });
console.log(obj2);
