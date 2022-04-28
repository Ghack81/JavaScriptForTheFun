// Some example for training
// It's a good programming practice to declare all variables at the beginning of a script.
//JavaScript Data Types

const pi = 3.14;
let personn = "John Witch";
let answer = "No, i'm not a killer !";

// Star function for example
function myPersonn(){
    //Add code
    console.log(personn);
    return(myPersonn);
}

// We create a variable called carName and assign the value "Volvo" to it.
// Then we "output" the value inside an HTML paragraph with id="demo" :
//<p id="demo"></p>

//<script>
let carName = "Volvo";
document.getElementById("demo").innerHTML = carName;
//</script>

// You can declare many variables in one statement
// Start the statement with LET and separate the variables by COMMA :
let person = "John Witch", carName = "Porche", price = 200000;
// Or a declaration can span multiple lines :
let person = "John Witch",
carName = "Porche",
price = 200000;

// Example with a string + integer
let x = "5" + 2 + 3;

console.log(x);
// In output => 523 !
// Because if you put a number in quotes, 
//the rest of the numbers will be  treated as strings, and concatenated.
// Try this :
let x = 2 + 3 + "5";

console.log(x);
// output => 55
