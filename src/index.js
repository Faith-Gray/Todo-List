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
    // console.log(allList);
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


//I need to separate
// delete function
//edit function
// pushing the task onto the page
//sort by due date function
//i'm going to move out all of the css from the js file... why did I do that anyways.

function addTaskToPage() {
    taskContainer.textContent = '';

    for (let i = 0; i < allList.length; i++) {
        //create checkbox
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = 'checkbox';
        checkbox.value = 'value';
        checkbox.id = 'cbid';
        checkbox.style.fontSize = '20px';

      
        //create div for task
        let individualTask = document.createElement('div');
        individualTask.style.paddingTop = '1%';
        individualTask.style.paddingBottom = '1%';
        individualTask.style.borderBottom = '1px solid #142d4c';

        //put task into div
        let label = document.createElement('label');
        label.htmlFor = 'cbid';
        let placeHolderArray = [allList[i]];
        let arrObject = placeHolderArray.map(a => a.title);
        label.appendChild(document.createTextNode(arrObject));
        
        //create and add edit button
        let editIcon = document.createElement('div');
        editIcon.classList.add('edit');
        editIcon.style.display = 'inline-block';

        //create and add delete button
        let deleteIcon = document.createElement('div');
        deleteIcon.classList.add('delete');
        deleteIcon.style.display = 'inline-block';
        deleteIcon.dataset.selectTask = placeHolderArray.map(b => b.id);



        individualTask.appendChild(checkbox);
        taskContainer.appendChild(individualTask);
        individualTask.appendChild(label);
        individualTask.appendChild(editIcon);
        individualTask.appendChild(deleteIcon);

        //delete event listener - put into separate function?
        deleteIcon.addEventListener('click', (e) => {
            console.log(deleteIcon.dataset.selectTask);
            
            let deletedItem = allList.findIndex((item)=> item.id == deleteIcon.dataset.selectTask);
            console.log(deletedItem);
            allList.splice(deletedItem,1);
            console.log(allList);

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