// Input Field 
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const inputTotalAmount = parseFloat(inputText);
    // clear field 
    inputField.value = '';
    return inputTotalAmount;
};
// Deposite / witdraw field 
function updateTotalField(totalFieldId, amount){
    const totalField = document.getElementById(totalFieldId);
    const totalText = totalField.innerText;
    const toalAmount = parseFloat(totalText);
    totalField.innerText= toalAmount + amount;
    
}
function getCurrentBalance(){
    const balanceInput = document.getElementById('balance-update');
    const balanceText = balanceInput.innerText;
    const updateBalance = parseFloat(balanceText);
    return updateBalance;
}
// balance Field 
function previousBalanceTotal(amount, isAdd){
    const balanceInput = document.getElementById('balance-update');
 /*    const balanceText = balanceInput.innerText;
    const updateBalance = parseFloat(balanceText); */
    const previousBalanceTotal = getCurrentBalance();
    if(isAdd==true){
        balanceInput.innerText = previousBalanceTotal + amount;
    }
    else{
        balanceInput.innerText = previousBalanceTotal - amount;
    }
}

// Deposite 

document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositTotal = getInputValue('deposit-amount');
if(depositTotal > 0){
    updateTotalField('current-deposit',depositTotal);
    previousBalanceTotal(depositTotal,true);
}
else {
    alert('Plese inout valided amount');
}
});

// withdrow 
document.getElementById('withdrow-btn').addEventListener('click', function(){
    const newWithdrowAmount = getInputValue('withdrow-amount');
    const currentBalance = getCurrentBalance();
    if(newWithdrowAmount > 0 && newWithdrowAmount < currentBalance){
    updateTotalField('current-withdraw', newWithdrowAmount);
    previousBalanceTotal(newWithdrowAmount, false);
    }
    else {
        alert('error');
    }
});