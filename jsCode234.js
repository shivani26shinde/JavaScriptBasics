//JavaScript Code 2

function processData(input) {
    console.log(input);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

//JavaScript Code 3

if(marks > 90){
    console.log("AA");
}
else if(marks > 80 && marks <= 90){
    console.log("AB");
}
else if(marks > 70 && marks <= 80){
    console.log("BB");
}
else if(marks > 60 && marks <= 70){
    console.log("BC");
}
else if(marks > 50 && marks <= 60){
    console.log("CC");
}
else if(marks > 40 && marks <= 50){
    console.log("CD");
}
else if(marks > 30 && marks <= 40){
    console.log("DD");
}
else{
    console.log("FF");
}

//JavaScript Code 4

switch(num){
    case 1:
        console.log("ONE");
        break;
    case 2:
        console.log("TWO");
        break;
    case 3:
        console.log("THREE");
        break;
    case 4:
        console.log("FOUR");
        break;
    case 5:
        console.log("FIVE");
        break;
    case 6:
        console.log("SIX");
        break;
    case 7:
        console.log("SEVEN");
        break;
    case 8:
        console.log("EIGHT");
        break;
    case 9:
        console.log("NINE");
        break;
    default:
        console.log("PLEASE TRY AGAIN");
}
