
const btnDeposit = document.getElementById('btn-deposit');
btnDeposit.addEventListener('click', function () {
    
    const depositField = document.getElementById('deposit-field');
    const NewDepositSring = depositField.value;
    const NewDepositAmount = parseFloat(NewDepositSring);
    // console.log(deposit);
    
    // const depositAmount = document.getElementById('deposit');
    // depositAmount.innerText = deposit;
    // depositField.value = '';
     
    const previousDepositInnerText = document.getElementById('deposit');
    const previousDepositString = previousDepositInnerText.innerText;
    const previousDepositAmount = parseFloat(previousDepositString);

    const currentDepositeTotal = previousDepositAmount + NewDepositAmount;
    previousDepositInnerText.innerText = currentDepositeTotal;


    // connect with balance

    const balance = document.getElementById('balance');
    const balanceSting = balance.innerText;
   
    const previousBalanceAmount = parseFloat(balanceSting);


    const currentBalanceTotal = previousBalanceAmount + NewDepositAmount;
    console.log(currentBalanceTotal);

    balance.innerText = currentBalanceTotal;

 





    depositField.value = '';

})