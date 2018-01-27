$(function() {
  var taskForm = $('.js-add-item'),
    taskInput = $('.js-task-input'),
    todoList = $('.js-todolist'),
    taskInputVal;

  if ($('.js-list-item-default').length > 0) {
    var defaultListItem = $('.js-list-item-default');
  }

  $('.js-add-item').on('submit', addTask);

  $('body').on('change', '.checkbox', function(e) {
    e.preventDefault();
    var parentEl = $(this)
      .parent()
      .parent();
    console.log(parentEl);
    if ($(this).is(':checked')) {
      bool = true;
    } else {
      bool = false;
    }
    completeTask(parentEl, bool);
  });

  function addTask(e) {
    e.preventDefault();
    var taskInputVal = taskInput.val();

    todoList.prepend(appendTask(taskInputVal, 'todo-list__item'));

    if (defaultListItem.length > 0) {
      defaultListItem.remove();
    }
  }

  function appendTask(val, itemClass) {
    return (
      '<li class="' +
      itemClass +
      '"><label><input type="checkbox" class="checkbox">' +
      val +
      '</label></li>'
    );
  }

  function completeTask(el, bool) {
    var selectedEl = el;
    el.remove();
    if (bool) {
      $('.js-completed-list').append(el);
    } else {
      $('.js-todo-list').append(el);
    }
  }
});
