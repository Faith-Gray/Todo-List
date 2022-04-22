import './styles.css';
console.log('hello');

const plus = document.getElementById('plus');
const popUp = document.getElementById('modal');
const overlay = document.getElementById('overlay');
// const today = document.getElementById('today');
// const thisWeek = document.getElementById('thisWeek');
// const thisMonth = document.getElementById('thisMonth');
// const longTerm = document.getElementById('longTerm');
const taskContainer = document.getElementById('tasks');



plus.addEventListener('click', openForm);
overlay.addEventListener('click', closeForm);

function openForm() {
    popUp.classList.add('active');
    overlay.classList.add('active');
};

function closeForm() {
    popUp.classList.remove('active');
    overlay.classList.remove('active');
};

let allList = [];

function createTask() {
    let title = document.querySelector('#titleForm').value;
    let description = document.querySelector('#description').value;
    let due = document.querySelector('#due').value;

    function Task(title, description, due) {
        this.title = title;
        this.description = description;
        this.due = due;
        // this.info = function() {
        //     return this.info + "<br>" + this.description;
        // }
    };

    let newTask = new Task(title, description, due);
    console.log(newTask);
};


function addTask() {
    allList.push(createTask);
    console.log(allList.length);
};



document.getElementById("myForm").addEventListener('submit', (e) => {
    e.preventDefault();
    createTask();
    addTask();
    closeForm();
    document.querySelector('#myForm').reset();
    addTaskToPage();
    
});


function addTaskToPage() {
    // const taskOnPage = document.createElement('input');
    // taskOnPage('type', 'checkbox');
    // taskContainer.appendChild(taskOnPage);
    // //div design
    for (let i = 0; i < allList.length; i++) {
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = 'checkbox';
        checkbox.value = 'value';
        checkbox.id = 'id';

        let label = document.createElement('label');
        label.htmlFor = 'id';
        label.appendChild(document.createTextNode('test input'));


        taskContainer.appendChild(checkbox);
        taskContainer.appendChild(label);

    };
};

// function loopArrayOnPage() {
//     allList.forEach(addTaskToPage);
// }