const tabsBtn = document.querySelectorAll('button');
const tabsItem = document.querySelectorAll('.tabs_item');
tabsBtn.forEach(item => {
    item.addEventListener('click', () => {
        let currentBtn = item;
        let dataTab = currentBtn.getAttribute('data-tab');
        let currentItem = document.querySelector(dataTab);
        tabsBtn.forEach(item => {
            item.classList.remove('active');
        });
        tabsItem.forEach(item => {
            item.classList.remove('active');
        });
        currentItem.classList.add('active');
        currentBtn.classList.add('active');

    })
})