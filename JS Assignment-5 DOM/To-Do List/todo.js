function submitfn(event)
{
    event.preventDefault();
    const inputItem=document.querySelector('.todo-input');
    const inputValue=inputItem.value.trim();
   // console.log(inputValue);
    addTask(inputValue);
    inputItem.value='';

}
function addTask(inputValue)
{

    // console.log("addTask",inputValue);
    const tlist=document.createElement('li');
    const todoList=document.querySelector('.todo-list');
    todoList.appendChild(tlist);
    tlist.innerHTML=inputValue;
    const completeBtn=document.createElement('button');
    completeBtn.classList.add('Complete-button');
    completeBtn.textContent='Complete';
    tlist.appendChild(completeBtn);
    const deleteBtn=document.createElement('button');
    deleteBtn.classList.add('trash-btn');
    deleteBtn.textContent='Delete';
    tlist.appendChild(deleteBtn);
    
    deleteBtn.addEventListener(onclick,deletecall());
    completeBtn.addEventListener(onclick,completecall());
    function deletecall()
    {
     deleteBtn.addEventListener('click',() => tlist.remove());
    }
    function completecall()
    {
     completeBtn.addEventListener('click',() => tlist.style.textDecoration='line-through solid rgb(0, 0, 0)');
    }
    

}