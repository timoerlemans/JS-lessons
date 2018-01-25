$(function() {
  var taskForm = $('.js-add-item'),
    taskInput = $('.js-task-input'),
    todoList = $('.js-todolist'),
    taskInputVal;

  if ($('.js-list-item-default').length > 0) {
    var defaultListItem = $('.js-list-item-default');
  }

  $('.js-add-item').on('submit', addTask);

  function addTask(e) {
    e.preventDefault();
    var taskInputVal = taskInput.val();

    todoList.prepend('<li class="todo-list__item">' + taskInputVal + '</li>');

    if (defaultListItem.length > 0) {
      defaultListItem.remove();
    }
  }
});
