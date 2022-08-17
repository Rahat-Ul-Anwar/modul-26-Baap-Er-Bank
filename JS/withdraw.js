
const btnWithdraw = document.getElementById('btn-withdraw');

btnWithdraw.addEventListener('click', function () {

     
    const withdrawField = document.getElementById('withdraw-field');

    //for input we take value and by default it will be string 
    //we can convert into number
    const withdrawFieldString = withdrawField.value;
    const NewWithdrawFieldAmount = parseFloat(withdrawFieldString);

    // withdrawField.value = NewWithdrawFieldAmount;
    // withdraw amount check
    const withdraw = document.getElementById('withdraw');
    const previousWithdrawString = withdraw.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawString);
    const currentWithdrawTotalAmount = NewWithdrawFieldAmount + previousWithdrawAmount;
    withdraw.innerText = currentWithdrawTotalAmount;



    //current blance
    const balance = document.getElementById('balance');
    const balanceSting = balance.innerText;
   
    const previousBalanceAmount = parseFloat(balanceSting);
    withdrawField.value = '';

    const currentBalanceTotal = previousBalanceAmount - NewWithdrawFieldAmount;

    balance.innerText = currentBalanceTotal;
})
