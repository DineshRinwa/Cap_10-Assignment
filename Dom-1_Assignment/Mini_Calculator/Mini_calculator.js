// add function
function addNumber(){

    let inputFirst = document.querySelector("#input1").value;
    let inputSecound = document.querySelector("#input2").value;

    let add = Number(inputFirst) + Number(inputSecound);
    alert(add);
}


// substract function
function subtractNumber(){

    let inputFirst = document.querySelector("#input1").value;
    let inputSecound = document.querySelector("#input2").value;

    let subtract = Number(inputFirst) - Number(inputSecound);
    if(subtract < 0){
        alert(-(subtract));
    }else{
        alert(subtract);
    }
}

// multily function
function MultiplyNumber(){
    let inputFirst = document.querySelector("#input1").value;
    let inputSecound = document.querySelector("#input2").value;

    let Multiply = Number(inputFirst) * Number(inputSecound);
    alert(Multiply);
}

// divid function
function DivideNumber(){
    let inputFirst = document.querySelector("#input1").value;
    let inputSecound = document.querySelector("#input2").value;

    let Divide = Number(inputFirst) / Number(inputSecound);
    alert(Divide);
}


