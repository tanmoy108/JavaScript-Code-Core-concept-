//set is as type of array but it's value must be unique . in array it's not mandatory

const l = new Set(["a",1,"b"]);
console.log(l); //["a",1,"b"]
l.add("e"); // adding
l.add("b"); // XXXX it's take unique value
l.delete("a"); // delete
console.dir(l); // [1,"b","e"]
console.log(l.size); //3
(l).constructor; // set
