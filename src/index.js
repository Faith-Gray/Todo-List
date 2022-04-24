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
        this.info = function() {
            return this.info + "<br>" + this.description;
        }
    };

    let newTask = new Task(title, description, due);
    console.log(newTask);
    return newTask;
};


function addTask(newTask) {
    allList.push(newTask);
    console.log(allList.length);
    console.log(allList);
    return allList;
};



document.getElementById("myForm").addEventListener('submit', (e) => {
    e.preventDefault();
    const submittedTask = createTask();
    // createTask();
    addTask(submittedTask);
    closeForm();
    document.querySelector('#myForm').reset();
    addTaskToPage();
    
});


function addTaskToPage() {
    taskContainer.textContent = '';

    for (let i = 0; i < allList.length; i++) {
        //make function to creat checkbox
        //make function to add design to the div
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = 'checkbox';
        checkbox.value = 'value';
        checkbox.id = 'id';
        
       //make function to add design to the div
        checkbox.style.fontSize = '20px';

        let individualTask = document.createElement('div');
        individualTask.style.paddingTop = '1%';
        individualTask.style.paddingBottom = '1%';
        individualTask.style.borderBottom = '1px solid #142d4c';
        
        let label = document.createElement('label');
        label.htmlFor = 'id';

        let placeHolderArray = [allList[i]];

        let arrObject = placeHolderArray.map(a => a.title);


        label.appendChild(document.createTextNode(arrObject));
        

        taskContainer.appendChild(individualTask);
        individualTask.appendChild(checkbox);
        individualTask.appendChild(label);

    };
};

// function loopArrayOnPage() {
//     allList.forEach(addTaskToPage);
// }