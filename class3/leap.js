const year=Number(prompt("enter the year"))
if(year%4==0){
    alert(`${year} is the leap year`)
}
else if(year%100 == 0 || year%400 == 0){
    alert(`${year} is the leap year`)
}
else{
    alert(`${year} is not the leap year`)
    }


      
               
