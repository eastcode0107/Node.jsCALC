const input = require('prompt-sync')();
const fs = require('fs');

function Menu(){
  console.log("--- Menu ---");
  console.log("1. Add")
  console.log("2. Sub")
  console.log("3. Div")
  console.log("4. Mult")

  userChoice = input("Option: ")
  
  switch(userChoice){
    case "1":
      Add()
      break;

    case "2":
      Sub()
      break;

    case "3":
      Div()
      break;

    case "4":
      Mult()
      break;

    default:
      console.log("Invalid Input!")
      Menu()
  }
}

function Add(){
  console.log("---Add---");
  let numOne = parseFloat(input("Num One: "));
  let numTwo = parseFloat(input("Num Two: "));
  let result = numOne + numTwo;
  console.log("Result:", result);
  
  fs.writeFile('output.txt', "Add Result: " + result.toString(), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File written successfully');
    Menu(); // Call Menu after the file is written
  });
}

function Sub(){
  console.log("---Sub---");
  let numOne = parseFloat(input("Num One: "));
  let numTwo = parseFloat(input("Num Two: "));
  let result = numOne - numTwo;
  fs.writeFile('output.txt', "Sub Result: " + result.toString(), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File written successfully');
    Menu(); // Call Menu after the file is written
  });
}

function Div(){
  console.log("---Div---");
  let numOne = parseFloat(input("Num One: "));
  let numTwo = parseFloat(input("Num Two: "));
  let result = numOne / numTwo;
  fs.writeFile('output.txt', "Div Result: " + result.toString(), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File written successfully');
    Menu(); // Call Menu after the file is written
  });
}

function Mult(){
  console.log("---Mult---");
  let numOne = parseFloat(input("Num One: "));
  let numTwo = parseFloat(input("Num Two: "));
  let result = numOne * numTwo;
  fs.writeFile('output.txt', "Mult Result: " + result.toString(), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File written successfully');
    Menu(); // Call Menu after the file is written
  });
}

Menu()