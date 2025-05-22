const args = process.argv[2];
num = parseInt(args);
const message = "C is fun";
if (Number.isNaN(num)){
  console.log("Missing number of occurrences");
}
else{
  for (let i = 1; i <= args; i++){
    console.log(message);
  }
}