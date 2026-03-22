function calculateResult(){
    let s1 = Number(document.getElementById("s1").value);
    let s2 = Number(document.getElementById("s2").value);
    let s3 = Number(document.getElementById("s3").value);
    let s4 = Number(document.getElementById("s4").value);
    let s5 = Number(document.getElementById("s5").value);
    let s6 = Number(document.getElementById("s6").value);
    let s7 = Number(document.getElementById("s7").value);
    let s8 = Number(document.getElementById("s8").value);

    
     // Check for invalid marks
    if (
        s1 < 0 || s1 > 100 ||
        s2 < 0 || s2 > 100 ||
        s3 < 0 || s3 > 100 ||
        s4 < 0 || s4 > 100 ||
        s5 < 0 || s5 > 100 ||
        s6 < 0 || s6 > 100 ||
        s7 < 0 || s7 > 100 ||
        s8 < 0 || s8 > 100
    ) {
        document.getElementById("total").innerHTML = "";
        let resultElement = document.getElementById("result");
        resultElement.innerHTML = "Invalid marks! Enter values 0–100.";
        resultElement.style.color = "red";
        return; // stop function if invalid
    }
    
    let total = s1+s2+s3+s4+s5+s6+s7+s8;

    document.getElementById("total").innerHTML= "Total Marks: " + total + "/800";

    let resultText = "";
    let color = "";

    if (total > 800 || total < 0){
        resultText = "Invalid Input";
        color = "orange";
    }
    else if (total >= 700){
        resultText = "PASS (DISTINCTION)";
        color = "green";
    }
    else if (total >= 600){
        resultText = "PASS (1st Division)";
        color = "green"
    }
    else if (total >= 500){
        resultText = "PASS (2nd Division)";
        color = "green";
    }
    else if (total>=400){
        resultText = "PASS (3rd Division)";
        color = "green";
    }
    else{
        resultText = "FAIL";
        color = "red";
    }

let resultElement = document.getElementById("result");
resultElement.innerHTML = resultText;
resultElement.style.color = color;

}