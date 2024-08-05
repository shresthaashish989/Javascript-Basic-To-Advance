const pin = 1111
const userpin = Number(prompt("enter your pin number"))
if (userpin === pin) {
    alert("welcome to dashboard")
    const option = Number(prompt("Choose the ption \n 1.FastCash \n 2.Withdrw \n 3.Bank Statement \n 4.Cancel"))
    if (option === 1) {
        alert("Fast Cash")
        const fcash = Number(prompt("Choose your FastCash \n 1.1000 \n 2.5000 \n 3.10000 \n 4.20000"))
        if (fcash === 1000) {
            alert("Your FastCash is 1000")
        }
        else if (fcash === 5000) {
            alert("Your FastCash is 5000")
        }
        else if (fcash === 10000) {
            alert("Your FastCash is 10000")
        }
        else if (fcash === 20000) {
            alert("Your FastCash is 20000")
        }
    }

    if(option === 2){
        alert("withdraw section")
        const maxamount=25000
        const withdraamt=Number(prompt("enter the withdraw amount"))
        if(maxamount>withdraamt){
            alert(`your withdraw amount is ${withdraamt}`)
        }
        else{
            alert("you can't withdraw more than 25000")
        }
    }

        if(option === 3){
            alert("Bnak Statement")
            alert("Your Bank Balance is $30000000000")
        }


        if(option === 4){
            alert("thank you for using This Atm")
        }
    
}
else {
    alert("wrong pin number")
}