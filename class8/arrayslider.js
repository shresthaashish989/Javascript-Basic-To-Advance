const img = ['b2.jpg', 'b1.jpg', '1.jpg', 's1.jpg'];
const imagelength = img.length;
let i = 0; // Initialize i

const demoFun = () => {
    if (i >= img.length) {
        i = 0;
    }

    document.querySelector('img').src = `images/${img[i]}`;
    ++i;
    let set=setInterval(demoFun(),2000)
   
};
document.querySelector('.right').addEventListener('click', demoFun);



document.querySelector('.left').addEventListener('click', () => {
    if (i <= 0) {
        i = img.length - 1;
    } else {
        --i;
    }
    document.querySelector('img').src = `images/${img[i]}`;
});

document.querySelector('img').addEventListener('mouseover',()=>{
    clearInterval(set)
})
document.querySelector('img').addEventListener('mouseout',()=>{
    set=setInterval(demoFun,2000)
})



