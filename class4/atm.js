const pinnum = 111;
const user = Number(prompt("Enter the PIN number"));

switch (user) {
    case pinnum:
        alert("Welcome to the dashboard");
        const fcash = Number(prompt("Choose one option below:\n1. Fast Cash\n2. Withdraw\n3. Balance Statement\n4. Out from the ATM"));

        switch (fcash) {
            case 1:
                alert("Fast Cash");
                const cash = Number(prompt("Enter the amount you want to withdraw\n1000\n3000\n4000\n5000"));
                switch (cash) {
                    case 1000:
                    case 3000:
                    case 4000:
                    case 5000:
                        alert(`Your cash is ${cash}`);
                        break;
                    default:
                        alert("Invalid amount selected");
                }
                break;

            case 2:
                alert("Withdraw");
                const drawLimit = 25000;
                const withdraw = Number(prompt("Enter the amount to withdraw"));
                switch (true) {
                    case withdraw <= drawLimit:
                        alert(`Your withdrawn balance is ${withdraw}`);
                        break;
                    default:
                        alert("You cannot withdraw more than 25000");
                }
                break;

            case 3:
                alert("Balance Statement");
                alert("Your balance is $1000000");
                break;

            case 4:
                alert("You are out from the ATM");
                break;

            default:
                alert("Invalid option");
        }
        break;

    default:
        alert("You entered the wrong number");
}
