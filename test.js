const add = require("./app")

if (add(2,3) === 5){
    console.log("Passes");
    process.exit(0);
}else{
    console.log("Failed");
    process.exit(1);
}