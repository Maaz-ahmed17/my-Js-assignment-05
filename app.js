// ///////question no. 01/////////

// let studentNames = [];
// studentNames.push("maaz");
// studentNames.push("maaz");
// console.log(studentNames); 


// ////////////question no. 02///////
// const studentName = new Array();
// studentName.push("maaz");
// studentName.push("maaz");
// console.log(studentName); 


// /////question no.03//////////////
// let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];

// let color = new Array("Red", "Green", "Blue", "Yellow", "Purple");
// console.log(colors.length);

// ///////question no. 04 ///////////

// let numbers = [10, 20, 30, 40, 50];

// let number = new Array(10, 20, 30, 40, 50);

// console.log(numbers[0]); 
// console.log(numbers[4]); 

// //////////question no. 05/////////

// let boolValues = [true, false, true, false, true];
// let boolValue = new Array(true, false, true, false, true);
// console.log(boolValues[0]); 
// console.log(boolValues[3]); 

// ///////////question no. 06 /////////

// let mixedArray = [1, "hello", true, 3.14, null, undefined, [1, 2, 3], {name: "maaz"}];
// console.log(mixedArray[0]); 
// console.log(mixedArray[6]); 
// console.log(mixedArray[7].name);

// /////////question no. 07 /////////////

// ////////CHECK THE HTML FILE!!! ////////

////////QUESTION NO. 08 //////////////

// let studentNames = ["maaz", "usman ", "hashir"];
// let studentScores = [420, 380, 450];
// let totalMarks = 500;
// document.write("score of " + studentNames[0] +"is"+ studentScores[0] +"out of "+ totalMarks) 
// document.write("<br>"+"score of " +studentNames[1] +"is"+ studentScores[1] +"out of "+ totalMarks)
// document.write("<br>"+"score of " +studentNames[2] +"is"+ studentScores[2] +"out of "+ totalMarks)

///////////question no. 09 ////////////
///////////check html file/////////////


///////////question no. 10 /////////////
let studentScores = [85, 90, 78, 92, 88, 76, 95, 89];


console.log("Unsorted Array:");
console.log(studentScores);


studentScores.sort((a, b) => a - b);

console.log("Sorted Array (Ascending):");
console.log(studentScores);


//////////question no. 11 ////////////

let cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia"];


console.log("Cities Array:");
console.log(cities);


let selectedCities = cities.slice(0, 3);
console.log("Selected Cities Array:");
console.log(selectedCities);


////////////question no. 12 ////////////


var arr = ["This ", " is ", " my ", " cat"];
var sentence = arr.join("");
console.log(sentence);

////////////question no. 13 //////////////



class Queue {
    constructor() {
      this.elements = [];
    }
  
    enqueue(value) {
      this.elements.push(value);
    }
  
    
    dequeue() {
      return this.elements.shift();
    }
  

    peek() {
      return this.elements[0];
    }
  
    
    isEmpty() {
      return this.elements.length === 0;
    }
  }

  let queue = new Queue();
  
  
  queue.enqueue("Apple");
  queue.enqueue("Banana");
  queue.enqueue("Cherry");
  
  console.log(queue.elements); 
  

  console.log(queue.dequeue()); 
  console.log(queue.dequeue()); 
  console.log(queue.dequeue());
  
  console.log(queue.isEmpty()); 

//////////////question no. 14 /////////////////



class Stack {
  constructor() {
    this.elements = [];
  }


  push(value) {
    this.elements.push(value);
  }
  pop() {
    return this.elements.pop();
  }

  
  peek() {
    return this.elements[this.elements.length - 1];
  }

  isEmpty() {
    return this.elements.length === 0;
  }
}

let stack = new Stack();


stack.push("Apple");
stack.push("Banana");
stack.push("Cherry");

console.log(stack.elements); 


console.log(stack.pop()); 
console.log(stack.pop()); 
console.log(stack.pop());

console.log(stack.isEmpty()); 

//////////////question no. 15 ///////////


  let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

  document.write("<select>");
  document.write("<option>Select a manufacturer</option>");
  for (let i = 0; i < manufacturers.length; i++) {
    document.write(`<option value="${manufacturers[i]}">${manufacturers[i]}</option>`);
  }

  document.write("</select>");





