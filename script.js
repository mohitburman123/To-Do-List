document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;

        // Add a remove button to the task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', function() {
            li.remove();
        });

        // Mark task as completed when clicked
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        li.appendChild(removeBtn);
        document.getElementById('taskList').appendChild(li);
        
        // Clear the input field
        taskInput.value = '';
    }
});
