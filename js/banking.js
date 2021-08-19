// common input value function 
function getInputValue(cssId) {
    const inputField = document.getElementById(cssId);
    const inputText = inputField.value;
    const amount = parseFloat(inputText);
    // clear input field after clicked
    inputField.value = '';
    return amount;
}

function totalFieldUpdate(totalField, amount) {
    // debugger;
    const totalElement = document.getElementById(totalField);
    const totalText = totalElement.innerText;
    const previousAmount = parseFloat(totalText);
    totalElement.innerText = previousAmount + amount;
}
function getCurentBalance() {
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(totalBalanceText);
    return previousTotalBalance;
}
function updateBalanceUpdate(amount, isAdd) {
    const totalBalance = document.getElementById('balance-total');
    const previousTotalBalance = getCurentBalance();
    if (isAdd == true) {
        totalBalance.innerText = previousTotalBalance + amount;
    }
    else {
        totalBalance.innerText = previousTotalBalance - amount;
    }
}
// Handel diposite amount 
document.getElementById('deposit-btn').addEventListener('click', function () {
    // get deposit and
    // const depositInput = document.getElementById('deposit-input');
    // const depositInputText = depositInput.value;
    // const depositAmount = parseFloat(depositInputText);


    // update total deposit
    // const totalDeposit = document.getElementById('deposit-total');
    // const totalDepositText = totalDeposit.innerText;
    // const previousDepositAmount = parseFloat(totalDepositText);
    // totalDeposit.innerText = previousDepositAmount + depositAmount;


    // upadate balance 
    // const totalBalance = document.getElementById('balance-total');
    // const totalBalanceText = totalBalance.innerText;
    // const previousTotalBalance = parseFloat(totalBalanceText);
    // totalBalance.innerText = previousTotalBalance + depositAmount;
    // console.log(totalBalanceText);
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        totalFieldUpdate('deposit-total', depositAmount);
        updateBalanceUpdate(depositAmount, true);
    }


})

// Handle withdraw amount 
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // get withdraw and 
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawInputText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawInputText);


    // update total withdraw
    // const totalWithdraw = document.getElementById('total-withdraw');
    // const totalWithdrawText = totalWithdraw.innerText;
    // const previousWithdrawAmount = parseFloat(totalWithdrawText);
    // totalWithdraw.innerText = previousWithdrawAmount + withdrawAmount;


    // upadate balance 
    // const totalBalance = document.getElementById('balance-total');
    // const totalBalanceText = totalBalance.innerText;
    // const previousTotalBalance = parseFloat(totalBalanceText);
    // totalBalance.innerText = previousTotalBalance - withdrawAmount;


    // clear input field after clicked
    // withdrawInput.value = '';
    const withdrawAmount = getInputValue('withdraw-input');
    if (withdrawAmount > 0 && withdrawAmount < getCurentBalance()) {
        totalFieldUpdate('total-withdraw', withdrawAmount);
        updateBalanceUpdate(withdrawAmount, false);
    }
    if (withdrawAmount > getCurentBalance()) {
        alert('Withdraw money will be less than ' + getCurentBalance());
    }

})