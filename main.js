
var answer = document.getElementById("answer");
var numButtons = document.getElementsByClassName("num");
var operators = document.getElementsByClassName("operators");
document.getElementById("enter").addEventListener("click",calculation);
var operator;
document.getElementById("clear").addEventListener("click", clear);
document.getElementById("backspace").addEventListener("click", backspace);


function changingAnswer(event){
    button = event.target.innerText;
    if(button=="+"){
        operator="+";
    }
    else if(button=="-"){
        operator="-";
    }
    else if(button=="X"){
        operator="X";
    }
    else if(button=="/"){
        operator="/";
    }
    answer.innerText += button;
}

for (var i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener("click", changingAnswer);
}
for(var i=0;i<operators.length;i++){
    operators[i].addEventListener("click",changingAnswer);
}

function calculation(event){
    var ansLen = answer.innerText.length;
    ans = answer.innerText;
    var i=0;
    var firstTerm=0;
    var secondTerm=0;

    while((ans[i]!=operator)&& i<ansLen){
        firstTerm+=ans[i];
        i+=1;
    }
    console.log(firstTerm);
    console.log(operator);
    
    // if(ans[i]=="+"||ans[i]=="-"||ans[i]=="X"||ans[i]!=="/"){
    //    var operator = ans[i];
    // }
    i+=1;
    while(i<ansLen){
        secondTerm+= ans[i];
        i+=1;
    }
    console.log(secondTerm);

    if(operator=="+"){
        firstTerm = parseInt(firstTerm);
        secondTerm = parseInt(secondTerm);
        ans = firstTerm+secondTerm;
        answer.innerText = ans;
    }
    else if(operator=="-"){
        firstTerm = parseInt(firstTerm);
        secondTerm = parseInt(secondTerm);
        ans = firstTerm-secondTerm;
        answer.innerText = ans;
    }
    else if(operator=="X"){
        firstTerm = parseInt(firstTerm);
        secondTerm = parseInt(secondTerm);
        ans = firstTerm*secondTerm;
        answer.innerText = ans;
    }
    else if(operator=="/"){
        firstTerm = parseInt(firstTerm);
        secondTerm = parseInt(secondTerm);
        ans = firstTerm/secondTerm;
        answer.innerText = ans;
    }

}
function clear(event){
    answer.innerText = "";
}
function backspace(event){
    var ansLen = answer.innerText.length;
    var ans = answer.innerText;
    answer.innerText = ans.slice(0,ansLen-1);
}

