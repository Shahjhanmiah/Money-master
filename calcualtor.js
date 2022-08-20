document.getElementById('calculate').addEventListener('click',function(){
    const incomeValue = inputField('income');
    const foodValue= inputField('food');
    const rentValue= inputField('rent');
    const colthValue= inputField('cloth');


    const totalExpenseOut =  gerTextfieldById('total-expenses');
    const totalExpense= incomeValue+foodValue+rentValue+colthValue;
    setTextElementById('total-expenses', totalExpense);

    const totalBalance = gerTextfieldById('balance')
    const BalanceElement = incomeValue - totalExpense;
    setTextElementById('balance', BalanceElement);
})