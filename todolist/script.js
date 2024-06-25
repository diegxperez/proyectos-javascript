// Current Date
const container = document.querySelector('.container');
const containerTitle = container.querySelector('.container-title')
// Input & Button
const inputAdd = document.querySelector('.input-add');
const addBtn = document.querySelector('.btn-add');
const ulItems = document.querySelector('ul');
const empty = document.querySelector('.empty');

// Object Date
const date = new Date();
const months = ['January', 'February', 'March', 'April', 'May', 'June', ' July', 'August', 'September', 'October', 'November', 'December'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let currentDay = days[date.getDay()];
let currentMonth = months[date.getMonth()].substring(0, 3).concat('.');

function getCurrentDate(currentDay, currentMonth) {
    return currentDay.concat(' ').concat(date.getDate()).concat(` de `).concat(currentMonth);
}

const day = getCurrentDate(currentDay, currentMonth);
const currentDayP = document.createElement("p");
currentDayP.textContent = day;

container.prepend(currentDayP);

// Task for today ---------------

addBtn.addEventListener("click", (e) => {
    const taskName = inputAdd.value.trim();
    if (taskName !== '') {
        const task = `<li class="todolist_tasks"><input class="checkbox" type="checkbox"><label class="check_label">${taskName}</label><button class="item_buttons-edit"><img src="./src/icons/pencil.svg" alt="pencil icon"></button><button class="item_buttons-trash"><img src="./src/icons/trash.svg" alt="trash icon"></button></li>`;

        ulItems.insertAdjacentHTML("beforeend", task);
        inputAdd.value = '';
        empty.style.display = 'none';

        const deleteBtn = ulItems.lastElementChild.querySelector('.item_buttons-trash');

        console.log(deleteBtn);

        deleteBtn.addEventListener('click', (e) => {
            const item = e.target.closest('li');
            console.log(item);
            ulItems.removeChild(item);
        });

    } else {
        alert('Enter a task')
    }
});