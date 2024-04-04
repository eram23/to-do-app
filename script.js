const inputField = document.getElementById('enter-tasks');
const listOfTasks = document.getElementById('list-of-tasks');

function addTask() {
    if(inputField.value === '') {
        inputField.placeholder = 'Please enter a task';
        
    } else {
        // creates an li element and adds it to the parent element listOfTasks
        let li = document.createElement('li');
        li.innerHTML = inputField.value;
        listOfTasks.appendChild(li);
        // creates a span element with the unicode for 'x' and adds it to the newly formed li element
        let span = document.createElement('span');
        span.innerHTML = "\u00d7"; 
        li.appendChild(span);
    }

    inputField.value = '';
    saveData()
}

listOfTasks.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        // e.target.appendChild(checkedTask);
        saveData()
    } else if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData() {
    localStorage.setItem('data', listOfTasks.innerHTML);
}

function getData() {
    listOfTasks.innerHTML = localStorage.getItem('data');
}

getData();