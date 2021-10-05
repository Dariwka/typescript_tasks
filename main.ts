console.log("hello world!");

var something = {
  day: "Teachers day",
  whatever: true,
};
console.log(something.whatever);

const myFunction = () => {
  console.log("arrow function example");
};

type NumberOrString = number | string;

let a: NumberOrString;
let b: string;
let c: boolean;

a = "Hello World";
a = 20;
c = true;
b = "some awesome string";

let getMessage = (first: NumberOrString, second: string, third: any) => {
  return `${first} ${second} ${third}`;
};
console.log(getMessage(a, b, c));

type BooStrNum = boolean | number | string;

let arr1 = [1, 2, 3, 4];
let arr2 = ["hello", "world", "is", "great"];
let arr3 = [true, false, true, false];
let arr4 = [true, 20];
let arr5: string[] = [];
let arr6: BooStrNum[] = [];

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

let obj1 = {
    name: "Diana",
    age: 25,
    resting: false
}

obj1= {
    name: 20,
    age: "Jane"
    rest: true,
}

obj2 = {
    ...obj1,
    lastName: "Korotkevica"
}

console.log(obj2);