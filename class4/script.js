const x = new Date().getDay()
document.write(x)
switch (Number(prompt("enter the number"))) {
    case 0:
        document.write("this day is sunday")
        break;
    case 1:
        document.write("this day is monday")
        break;
    case 2:
        document.write("this day is tuesday")
        break;
    case 3:
        document.write("this day is wednesday")
        break;
    case 4:
        document.write("this day is thursday")
        break;
    case 5:
        document.write("this day is friday")
        break;
    case 6:
        document.write("this day is saturday")
        break;
        default:
            document.write("invalid")
}

