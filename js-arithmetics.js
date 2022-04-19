// TITLE
console.log(" ----- Area Of Shapes JS Arithmetic Challenge ----- \n\n")

// Constant Variables:
const pi = 3.1419;
const half = 0.5;

// Variables for measurements
var length = parseInt (prompt ("10"));
var breadth = parseInt (prompt ("17"));   
var radius = parseInt (prompt ("25")); 
var base = parseInt (prompt ("20"));
var height = parseInt (prompt ("9"));

// Rectangle area calculation
   var area = (length * breadth);
   
// Append your rectangle answer:
console.log("The area of the given rectangle is : 170 " );


console.log("\n");


// circle area calculation
   var area = (pi) * (radius**2);

// Append your circle answer:
console.log("The area of the given circle is : 1963.6875");


console.log("\n");


// triangle area calculation
  var area = (base * height) * (half);

// Append your triangle answer:
console.log("The area of the given triangle is : 90" );
