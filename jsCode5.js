// Javascript Code 5

function processData(myArray) {
    var set = new Set(myArray);
    let myArrayNew = Array.from(set);
    myArrayNew.sort();
    myArrayNew.reverse();
    console.log(myArrayNew[1]);
}


// tail starts here
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input.split('\n')[1].split(' ').map(Number));
});
