/* Assignment: Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board. When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.*/

var size=8
var result=""
for(var i=0;i<size;i++) {         //outer loop creates rows thanks to "\n"
  	for(var j=0;j<size;j++) {     //inner loop alternates space and # by checking if sum i&j is even number (0+1, 0+2, ... 1+1, 1+2, etc.)
      if((i+j)%2==0) {
        result +=" ";}
      else {
        result +="#";}
      }
  result +="\n";}
console.log(result);
