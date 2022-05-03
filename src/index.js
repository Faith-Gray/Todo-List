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
        this.id = Date.now();
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
        checkbox.id = 'cbid';
        
       //make function to add design to the div
        checkbox.style.fontSize = '20px';

        let individualTask = document.createElement('div');
        individualTask.style.paddingTop = '1%';
        individualTask.style.paddingBottom = '1%';
        individualTask.style.borderBottom = '1px solid #142d4c';

        
        let label = document.createElement('label');
        label.htmlFor = 'cbid';
        let placeHolderArray = [allList[i]];
        let arrObject = placeHolderArray.map(a => a.title);
        label.appendChild(document.createTextNode(arrObject));
        

        let editIcon = document.createElement('div');
        editIcon.classList.add('edit');
        editIcon.style.display = 'inline-block';

        let deleteIcon = document.createElement('div');
        deleteIcon.classList.add('delete');
        deleteIcon.style.display = 'inline-block';
        deleteIcon.dataset.selectTask = placeHolderArray.map(b => b.id);



        individualTask.appendChild(checkbox);
        taskContainer.appendChild(individualTask);
        individualTask.appendChild(label);
        individualTask.appendChild(editIcon);

        individualTask.appendChild(deleteIcon);

        deleteIcon.addEventListener('click', (e) => {
            console.log(deleteIcon.dataset.selectTask);


            
        });

    };
};

// delBtn.addEventListener(“click”, function(e) {const deleteId = e.target.getAttribute(“data-id”);myTodoList.deleteElement(deleteId);})

// deleteIcon.addEventListener('click', (e) => {
//     console.log(e.target.getAttribute('id'));
// }


// function createEditButton() {
//     let divplaceholder = document.createElement('div');
//     divplaceholder.style.width = '10px';
//     divplaceholder.style.height = '10px';
// };

// function loopArrayOnPage() {
//     allList.forEach(addTaskToPage);
// }