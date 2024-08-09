
localStorage.setItem('name','John');
const show=localStorage.getItem('name')
document.write(show);

const b=document.querySelector('button')
b.addEventListener('click',()=>{
    localStorage.removeItem('name')
})


const student=
{
    'firstname':'Ashish',
    'lastname':'shrestha',
    'age':20,
    'degree':'bachelor'
}

localStorage.setItem('student',JSON.stringify(student))
const show_item=JSON.parse(localStorage.getItem('student'))

document.write(show_item.firstname)

document.querySelector('h2').innerHTML=(`${show_item.firstname}`)
