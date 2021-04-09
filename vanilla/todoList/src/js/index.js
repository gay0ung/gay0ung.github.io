const todoForm = document.querySelector('.js-todo-form'),
  input = todoForm.querySelector('input');

const bgForm = document.querySelector('.random-img')  

const PendingL = document.querySelector('.js-pending');
const finishedL = document.querySelector('.js-finished');

let pendingTasks=[] ,
    finishedTasks=[]

// list생성
function getTaskObj(text){
  return {
    id: String(Date.now()),
    text :  text
  }
}

function savePendingTask(task){
  pendingTasks.push(task);
}

// 완료한 할일 찾는 함수
function findInFinished(taskId){
  return finishedTasks.find(task => task.id === taskId)
}

// 할일 목록
function findInPending(taskId){
  return pendingTasks.find(task => task.id === taskId)
}

function removeFromPending(taskId){
  pendingTasks = pendingTasks.filter(task => task.id !== taskId)
}

function removeFromFinished(taskId) {
  finishedTasks = finishedTasks.filter(task => task.id !== taskId)
}

function addToFinished(task){
  finishedTasks.push(task);
}

function addToPending(task) {
  pendingTasks.push(task);
}

//  li생성 하는 함수
function buildLI(task){
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");

  span.innerText = task.text;
  delBtn.className = "del"
  delBtn.innerText = "x";

  delBtn.addEventListener("click", (e)=>{
    const li = e.target.parentNode;
    li.parentNode.removeChild(li);
    removeFromFinished(li.id);
    removeFromPending(li.id);
    saveState()
  })
  
  li.append(span, delBtn);
  li.id = task.id;

  return li;
}

// 완료
function createPending(task){
  const LI = buildLI(task);
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "✔";
  completeBtn.className = "finish"

  completeBtn.addEventListener("click", handleFinished);

  LI.append(completeBtn);
  PendingL.append(LI);
}
function handleFinished(e) {
  const li = e.target.parentNode;

  li.parentNode.removeChild(li);
  const task = findInPending(li.id);

  removeFromPending(li.id);
  addToFinished(task);
  createFinished(task);
  saveState()
}

// 다시 돌리기
function createFinished(task) {
  const LI = buildLI(task);
  const returnBtn = document.createElement("button");
  returnBtn.innerText = "↶";
  returnBtn.className = "return"

  returnBtn.addEventListener("click", handleReturn);

  LI.append(returnBtn);
  finishedL.append(LI);
}

function handleReturn(e){
  const li = e.target.parentNode;

  li.parentNode.removeChild(li);

  const task = findInFinished(li.id);

  removeFromFinished(li.id);
  addToPending(task);
  createPending(task);
  saveState();
}

// localStarage options
function saveState(){
  localStorage.setItem("PENDING", JSON.stringify(pendingTasks));
  localStorage.setItem("FINISHED", JSON.stringify(finishedTasks));
}

function loadState(){
  pendingTasks = JSON.parse(localStorage.getItem('PENDING')) || []
  finishedTasks = JSON.parse(localStorage.getItem('FINISHED')) || []
}

function restoreState(){
  pendingTasks.forEach((task) => createPending(task));
  finishedTasks.forEach((task) => createFinished(task));
}

function init(){
  todoForm.addEventListener("submit", (e)=> {
    e.preventDefault();

    const taskObj = getTaskObj(input.value);
    if (input.value === ""){
      alert("할일을 입력해 주세요!")
    }
    else{
      createPending(taskObj)
      savePendingTask(taskObj)
    }
    input.value = ""
    saveState()
  });

  loadState();
  restoreState()
}
init()