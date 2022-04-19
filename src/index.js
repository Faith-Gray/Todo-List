import './styles.css';
console.log('hello');

const plus = document.getElementById('plus');
const popUp = document.getElementById('modal');
const overlay = document.getElementById('overlay');
// const today = document.getElementById('today');
// const thisWeek = document.getElementById('thisWeek');
// const thisMonth = document.getElementById('thisMonth');
// const longTerm = document.getElementById('longTerm');
const taskContainer = document.getElementsByClassName('tasks');



plus.addEventListener('click', openForm);
overlay.addEventListener('click', closeForm);

function openForm() {
    popUp.classList.add('active');
    overlay.classList.add('active');
};

function closeForm() {
    popUp.classList.remove('active');
    overlay.classList.remove('active');
}

let allList = [];

function createTask() {
    let title = document.querySelector('#titleForm').value;
    let description = document.querySelector('#description').value;
    let due = document.querySelector('#due').value;

    function Task(title, description, due) {
        this.title = title;
        this.description = description;
        this.due = due;
    }

    let newTask = new Task(title, description, due);
    console.log(newTask);
}


function addTask() {
    allList.push(createTask);
    console.log(allList[0]);

}



document.getElementById("myForm").addEventListener('submit', (e) => {
    e.preventDefault();
    createTask();
    addTask();
    closeForm();
    document.querySelector('#myForm').reset();

    
});

function addTaskToPage() {
    const taskOnPage = document.createElement('input');
    taskOnPage('type', 'checkbox');
    taskContainer.appendChild(taskOnPage);
    //div design
    



}

function loopArrayOnPage() {
    allList.forEach(addTaskToPage);
}