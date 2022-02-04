("use strict")

let stringWhite = " ";
let stringBlack = "#"

let stringEntry = Number(prompt("Enter grid number"));
 
for (let x = 0; x < stringEntry-1; x++) {
	if (x % 2 == 0){
  		stringWhite= stringWhite + "#";
  		stringBlack= stringBlack + " ";
      }
  
  	else {
      stringWhite= stringWhite + " ";
  		stringBlack= stringBlack + "#";
      }
}
	
  if (stringEntry %2 ==0){
 		for(let y = 0; y< stringEntry/2; y++){
   
			console.log(stringWhite +"\n");
			console.log(stringBlack +"\n");}
      }

	else {
    {
      for(let y = 0; y< stringEntry/2-1; y++){
        console.log(stringWhite +"\n");
			  console.log(stringBlack +"\n")}
        }
          console.log(stringWhite);
    }
    