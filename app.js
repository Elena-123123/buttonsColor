
const body = document.querySelector('body')
const blueBtn = document.querySelector('.blue_btn')
const redBtn = document.querySelector('.red_btn')
const greenBtn = document.querySelector('.green_btn')
const pinkBtn = document.querySelector('.pink_btn')



blueBtn.addEventListener('click', () => {
    body.style.backgroundColor = '#3693d6';
});
redBtn.addEventListener('click', () => {
    body.style.backgroundColor = '#d65656';
});
greenBtn.addEventListener('click', () => {
    body.style.backgroundColor = '#56d66b';
});
pinkBtn.addEventListener('click', () => {
    body.style.backgroundColor = '#d4446f';
});




//let count = 0;
//  const buttons = document.querySelector('.button_box');
// // buttons.addEventListener('click', ({target}) => {


// // })



// blueBtn.addEventListener('click', () => {
//     if(count === 0) {
//         body.style.background = '#3693d6';
//         count++;
//     }else if(count === 1){
//         body.style.background = '#bdbdbd'
//         count = 0;
//     }
// })
// redBtn.addEventListener('click', () => {
//     if(count === 0) {
//         body.style.background = '#d65656';
//         count++;
//     }else if(count === 1){
//         body.style.background = '#bdbdbd'
//         count = 0;
//     }
// })
// greenBtn.addEventListener('click', () => {
//     if(count === 0) {
//         body.style.background = '#56d66b';
//         count++;
//     }else if(count === 1){
//         body.style.background = '#bdbdbd'
//         count = 0;
//     }
// })
// pinkBtn.addEventListener('click', () => {
//     if(count === 0) {
//         body.style.background = '#d4446f';
//         count++;
//     }else if(count === 1){
//         body.style.background = '#bdbdbd'
//         count = 0;
//     }
// })
