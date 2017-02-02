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
