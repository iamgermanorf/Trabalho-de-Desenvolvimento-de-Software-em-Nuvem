document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');
    const clearCompleted = document.getElementById('clearCompleted');
    
    // Adiciona nova tarefa
    taskForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const taskName = document.getElementById('taskName').value.trim();
      if (taskName === '') {
        alert('A tarefa não pode estar vazia!');
        return;
      }
  
      const li = document.createElement('li');
      li.textContent = taskName;
  
      const completeBtn = document.createElement('button');
      completeBtn.classList.add('btn-complete');
      completeBtn.innerHTML = '<i class="fas fa-check"></i>';
      completeBtn.addEventListener('click', function() {
        li.classList.toggle('completed');
      });
      
      li.appendChild(completeBtn);
      taskList.appendChild(li);
  
      document.getElementById('taskName').value = '';
    });
  
    // Limpa tarefas concluídas
    clearCompleted.addEventListener('click', function() {
      const completedTasks = document.querySelectorAll('#taskList li.completed');
      completedTasks.forEach(task => task.remove());
    });
  });
  