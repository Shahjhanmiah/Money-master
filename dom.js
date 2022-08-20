function getInputField(inputId){
    const inputElement =document.getElementById(inputId);
    const inputValueString= inputElement.value;
    const inputValue=parseInt(inputValueString);
    getInputField.value='';
    return inputValue;

}
function gerTextfieldById(textId){
    const textFieldElements= document.getElementById(textId);
    const textFieldString = textFieldElements.innerText;
    const textFieldValue =parseInt(textFieldString);
    return textFieldValue;
}


function setTextElementById(elementId,newelement);
const textElement= document.getElementById(elementId);
textElement.innerText=newelement;



document.getElementById('calculate').addEventListener('click',function(){
    const income= getInputField('income');


    const incomeValue = inputField('income');
    const foodValue= inputField('food');
    const rentValue= inputField('rent');
    const colthValue= inputField('cloth');


    //const totalExpenseOut =  gerTextfieldById('total-expenses');
    const totalExpense= incomeValue+foodValue+rentValue+colthValue;
    if(totalExpense > income){
        alert('you can not expinse more than income' );
        return;
    }
    setTextElementById('total-expenses', totalExpense);

    //const totalBalance = gerTextfieldById('balance')
    const Balance = income - totalExpense;
    setTextElementById('balance', Balance);
})