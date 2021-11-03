const tabsBtn = document.querySelectorAll('.tabs_nav-btn');
const tabsItems = document.querySelectorAll('.tabs_item');
tabsBtn.forEach(function(item){
    item.addEventListener('click', function(){
        let currentBtn = item;
        let btnID = currentBtn.getAttribute('data-tab');
        let currentItem = document.querySelector(btnID);
        tabsBtn.forEach(function(item){
            item.classList.remove('active');
        });
        tabsItems.forEach(function(item){
            item.classList.remove('active');
        });
        currentBtn.classList.add('active');
        currentItem.classList.add('active');
    })
});