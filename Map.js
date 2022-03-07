//In Map you can key as a number but in object key must be string ... 

const f = new Map();
f.set("a","sd");
f.set (1,"d"); // 1 is number
console.log(f); // f = { "a" : "sd" , 1 : "d" };
f.get(1) // d
f.delete("a") // delete a key and it's value
f.has(1) // true
