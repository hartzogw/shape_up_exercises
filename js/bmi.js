function calculateBMI(){
    let feet = parseInt(document.getElementById("feet").value);
    let inches = parseInt(document.getElementById("inch").value);
    let weight = parseInt(document.getElementById("weight").value);
    return 703 * weight / Math.pow((feet * 12) + inches, 2);
}

function setOutput(){
    let bmi = calculateBMI();
    document.getElementById("output").innerText = bmi;
}