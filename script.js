const addBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return alert('Please enter a task!');

  const li = document.createElement('li');
  li.textContent = taskText;

  // Toggle complete
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Remove button
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'X';
  removeBtn.classList.add('remove-btn');
  removeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    li.remove();
  });

  li.appendChild(removeBtn);
  taskList.appendChild(li);
  taskInput.value = '';
}
