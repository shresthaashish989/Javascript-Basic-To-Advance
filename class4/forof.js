let games=['Football','Cricket','hockey','Basketball']
for(let x of games){
    document.write(`${x} <br>`)
}



//for in is used to objects

let students={
    name:'Rahul',
    age:20,
    city:'Delhi',
    id:12121212,
    marks:90
    
}

for(let y in students){
    document.write(`${students[y]} <br>`)
}

let values=['one','two','three']
for(i in values){
    document.write(`${values[i]} <br>`)
    
}