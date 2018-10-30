window.onload = function() {
  onReady();
};

function onReady() {

  let button = document.createElement('button');
  document.body.appendChild(button);
  button.textContent = "Delete Checked Item";
  button.setAttribute('class', 'mdl-button mdl-js-button mdl-button--raised');
  button.setAttribute('onclick', 'removeChecked()');

  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    let title = newToDoText.value;
    let newLi = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.setAttribute('class', "mycheckbox");

    checkbox.type = "checkbox";
    newLi.textContent = title;
    newLi.appendChild(checkbox);
    toDoList.appendChild(newLi);
    newToDoText.value = '';
  });

};

function removeChecked() {
  let mycheckboxes = document.getElementsByClassName('mycheckbox');

  for (let i = 0; i < mycheckboxes.length; i++) {
    if(mycheckboxes[i].checked == true) {
      mycheckboxes[i].parentNode.remove();
    }
  }
}
