const Arg = process.argv[2];
const num = parseInt(Arg);

if (Number.isNaN(num)) {
  console.log("Not a number");
} else {
  console.log(`My number: ${num}`);
}