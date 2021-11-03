let btn1 = document.getElementById('button1');
let btn2 = document.querySelector('#button2');
let btn3 = document.getElementsByTagName('button')[2];
let tab1 = document.querySelector('.tabs_item1');
let tab2 = document.querySelector('.tabs_item2');
let tab3 = document.querySelector('.tabs_item3');
btn1.addEventListener('click', function(){
    btn1.classList.add('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
    tab1.classList.add('acive');
    tab2.classList.remove('active');
    tab3.classList.remove('active');
});
btn2.addEventListener('click', function(){
    btn1.classList.remove('active');
    btn2.classList.add('active');
    btn3.classList.remove('active');
    tab1.classList.remove('acive');
    tab2.classList.add('active');
    tab3.classList.remove('active');
});
btn3.addEventListener('click', function(){
    btn1.classList.remove('active');
    btn2.classList.remove('active');
    btn3.classList.add('active');
    tab1.classList.remove('acive');
    tab2.classList.remove('active');
    tab3.classList.add('active');
})