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


function isEmpty() {
    const controlEmpty = ulItems.querySelector('li') !== null;
    if (controlEmpty) {
        empty.style.display = 'none';
    } else {
        empty.style.display = 'flex';
    }
}

function createItem() {
    const taskName = inputAdd.value.trim();
    if (taskName !== '') {
        const task = `<li class="todolist_tasks"><input class="checkbox" type="checkbox"><label class="check_label">${taskName}</label><button class="item_buttons-edit"><img src="./src/icons/pencil.svg" alt="pencil icon"></button><button class="item_buttons-trash"><img src="./src/icons/trash.svg" alt="trash icon"></button></li>`;

        ulItems.insertAdjacentHTML("beforeend", task);
        inputAdd.value = '';

        const deleteBtn = ulItems.lastElementChild.querySelector('.item_buttons-trash');

        // console.log(deleteBtn);
        isEmpty();

        deleteBtn.addEventListener('click', (e) => {
            const item = e.target.closest('li');
            console.log(item);
            ulItems.removeChild(item);
            isEmpty();
        });

        const editBtn = ulItems.lastElementChild.querySelector('.item_buttons-edit');

        editBtn.addEventListener('click', (e) => {
            const selectLabel = e.target.closest('li');
            const editLabel = selectLabel.querySelector('label')
            console.log(e.target);
            console.log(selectLabel)
            console.log(editLabel);
            let newText = prompt('Edit task: ').trim();

            if (newText == '') {
                alert('Enter a valid task')
            } else {
                editLabel.textContent = newText;
            }
        })

    } else {
        alert('Enter a task')
    }
}

addBtn.addEventListener("click", createItem);
inputAdd.addEventListener("keyup", (e) => {
    console.log(e.code);
    // consultar sobre event.code
    if (e.code == 'Enter') {
        createItem();
    };
});