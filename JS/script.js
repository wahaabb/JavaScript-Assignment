// --------NAME------ //
document.getElementById('name').onclick = function () {
    alert('MY NAME IS WAHAB')
    let statement = "alert('MY NAME IS WAHAB')"
    document.getElementById('statement').innerHTML = statement;
}
// -------NUMBER------//
document.getElementById('number').onclick = function () {
    alert('03026600078')
    let statement = "alert('03026600078')"
    document.getElementById('statement').innerHTML = statement;
}
// ------VARIABLES-----//
document.getElementById('variable').onclick = function () {
    let statement = "<ul><li>A variable name must start with a letter or the underscore character.</li><li>A variable name cannot start with a number.</li><li>A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ )</li><li>Variable names are case-sensitive (age, Age and AGE are three different variables)</li></ul>"
    document.getElementById('output').innerHTML=statement;
    document.getElementById('statement').innerHTML='';
}
// ------CAMELCASE------//
document.getElementById('camelcase').onclick = function () {
    let statement = "<h3>Example</h3><ul><li>user</li><li>userResponse</li><li>userResponseAge</li><li>userResponseAgeTime</li></ul>"
    document.getElementById('output').innerHTML=statement;
    document.getElementById('statement').innerHTML='';
}
//-----SUM OF 2 NUMBERS-----//
document.getElementById('sum').onclick = function (){
let num1=6;
let num2=9;
let sum=num1+num2;
document.getElementById('statement').innerHTML="let num1 =" + num1 + ";<br> let num2 =" + num2 + ";<br>sum = num1 + num2" 
document.getElementById('output').innerHTML=sum;
} 
//-----subtract OF 2 NUMBERS-----//
document.getElementById('subtract').onclick = function (){
let num1=6;
let num2=9;
let subtract=num1-num2;
document.getElementById('statement').innerHTML="let num1 =" + num1 + ";<br> let num2 =" + num2 + ";<br>subtract = num1 - num2" 
document.getElementById('output').innerHTML=subtract;
} 
//-----MULTIPLY 2 NUMBERS-----//
document.getElementById('multiply').onclick = function (){
let num1=6;
let num2=9;
let multiply=num1*num2;
document.getElementById('statement').innerHTML="let num1 =" + num1 + ";<br> let num2 =" + num2 + ";<br>product = num1 * num2" 
document.getElementById('output').innerHTML=multiply;
} 
//-----DIVIDE 2 NUMBERS-----//
document.getElementById('divide').onclick = function (){
let num1=6;
let num2=9;
let divide=num1/num2;
document.getElementById('statement').innerHTML="let num1 =" + num1 + ";<br> let num2 =" + num2 + ";<br>Divide = num1 / num2" 
document.getElementById('output').innerHTML=divide;
} 
//-----CALCULATE SOME NUMBERS-----//
document.getElementById('calculate').onclick = function (){
let equation="35/5*2+2**5+(6+5)";
let solution=35/5*2+2**5+(6+5);
document.getElementById('statement').innerHTML=equation;
document.getElementById('output').innerHTML=solution;
} 
// CLEAR ORIGINAL //
document.getElementById('clearstmnt').onclick = function (){
    document.getElementById('statement').innerHTML=''; 
}
// CLEAR OUTPUT //
document.getElementById('clearoutput').onclick = function (){
    document.getElementById('output').innerHTML=''; 
}
