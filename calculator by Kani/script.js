let num1="";
let operator="";
let num2="";

function ans(value) {
   let v = document.getElementById('box');
   if(value ==='AC'){
      num1="";
      operator="";
      num2="";
      v.value="";
   }
   else{
    num2 += value;
    v.value = num2;
 }
}

function operation(op){
   if(num2 !== "") {
      operator=op;
      num1=num2;
      num2="";
   }
}

function Result() {
   if(!operator || !num1) return;
   switch (operator) {
     case "+":
       num2=(parseFloat(num1)+parseFloat(num2));
       break;
     case "-":
       num2=(parseFloat(num1)-parseFloat(num2));
       break;
     case "*":
       num2=(parseFloat(num1)*parseFloat(num2));
       break;
     case "/":
       num2=(parseFloat(num1)/parseFloat(num2));
       break;
     default:
       return; // No valid operator, do nothing
   }
    document.getElementById('box').value = num2;
    operator="";
    num1="";
 }

 function Delete(){
   var del=document.getElementById('box');
   num2=num2.slice(0,-1);
   del.value=num2;
 }

 function Clear() {
    var inp = document.getElementById('box');
    num2="";
    inp.value = "";
 }


Clear();

//  function Back() {
//     var ev = document.getElementById('box');
//     ev.value = ev.value.slice(0,-1);
//  }


