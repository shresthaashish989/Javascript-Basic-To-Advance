//create an atm machine using conditional statement (if,ele if)
//check pin
//welcome to atm dashboard given alert
//fastcash
//check balance
//withdraw money
//cancel


//if user click 1 give 4 option  4 option 1.1000 2.3000 3.4000 4.5000
//if user click 2 give option to get desire  amount by user
//if user click 3 give the statement of bank balance
//if user click 4 give msg you are out from atm machine

const userpin = 1111
let pin = Number(prompt("enter the pin number"))
if (pin === userpin) {
    alert("welcome to atm dashboard")

    const num = Number(prompt("choose one option below \n 1.fastcahsh \n 2.withdraw \n 3. bslsnce statement \n 4.cancel"))
    if (num === 1) {
        alert("fast cash")
        const fastcash = Number(prompt("enter the amount you want to withdraw \n 1000 \n 3000 \n 4000 \n 5000"))
        if (fastcash === 1000) {
            alert("you have withdraw 1000")
        } else if (fastcash === 3000) {
            alert("you have withdraw 3000")
        } else if (fastcash === 4000) {
            alert("you have withdraw 4000")
        } else if (fastcash === 5000) {
            alert("you have withdraw 5000")
        } else {
            alert("wrong amount")
        }
    } else if (num === 2) {
        alert("withdraw money")
        const Withdrawmoney=25000;

        const withdraw = Number(prompt("enter the amount you want to withdraw"))
        if (withdraw < Withdrawmoney) {
            alert(`your withdeaw money Rs ${withdraw}`)
      
        } else {
            alert("you can not withdraw more than 25000")
        }
    } else if (num === 3) {
        alert("check balance")
        alert("your balance is 10000")
    } else if (num === 4) {
        alert("you are out from atm machine")
    } else {
        alert("wrong option")
    }

    if(num===4){
        alert("you are out from atm machine")
    }
}
else {
    alert("wrong pin")
}












