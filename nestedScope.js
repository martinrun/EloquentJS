/*Nested Scope
The flat and mountain functions can “see” the variable called result, since they are inside the function that defines it. But they cannot see each other’s count variables since they are outside each other’s scope. The environment outside of the landscape function doesn’t see any of the variables defined inside landscape. In short, each local scope can also see all the local scopes that contain
45it. The set of variables visible inside a function is determined by the place of that function in the program text. All variables from blocks around a function’s definition are visible—meaning both those in function bodies that enclose it and those at the top level of the program. This approach to variable visibility is called lexical scoping.*/

var landscape = function () { 
  var result = ""; 
  var flat = function(size) { 
    for (var count = 0; count < size; count ++) 
      result += "_";
  }; 
  var mountain = function(size) { 
    result += "/"; 
    for (var count = 0; count < size; count ++) 
      result += " ' "; 
    result += "\\"; //since backslash is a special character, to give "\" as string value, write "\\"
  };

flat (3); 
mountain (4); 
flat (6); 
mountain (1); 
flat (1); 

return result;
};

console.log(landscape ()); // →
// ___ / ' ' ' ' \ ______ / ' \_
