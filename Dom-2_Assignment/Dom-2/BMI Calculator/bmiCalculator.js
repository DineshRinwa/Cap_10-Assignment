

let btn = document.querySelector("button");
btn.addEventListener("click", function(){

    // Input tag
    let inputWet = document.querySelector("#numberWet").value;
    let inputHet = document.querySelector("#numberHet").value;

    inputWet = Number(inputWet);
    inputHet = Number(inputHet);
    
    // This is correct formula for BMI
    let bmi = inputWet*100 / (inputHet + inputHet);
    let head2 = document.createElement("h2");
    console.log(bmi);

    if(bmi <= 18.4){
        head2.textContent = `Your BMI is ${bmi} which mean You are UnderWeight`;
        document.body.append(head2);
    }else if(bmi >= 18.5 && bmi <= 24.9){
        head2.textContent = `Your BMI is ${bmi} which mean You are Normal Weight`;
        document.body.append(head2);
    }else if(bmi >= 25 && bmi <= 29.9){
        head2.textContent = `Your BMI is ${bmi} which mean You are Over Weight`;
        document.body.append(head2);
    }else if(bmi >= 30){
        head2.textContent = `Your BMI is ${bmi} which mean You are Normal Weight`;
        document.body.append(head2);
    }

})