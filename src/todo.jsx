import { useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');

  function getvalue(e) {
    setValue(e.target.value);
  }

  function addtodo(e) {
    e && e.preventDefault();
    e.preventDefault();
    console.log(value);
    if(value !== ''){
    setTodos([...todos, value]);
    }else{
        const res = confirm("Do you want to add empty value to the list?")
    
        if(res){
            setTodos([...todos, value]);
        }
        else {
            console.log("ok")
        }   
}
    setValue('');
  }

  function deleteTodo(e,id) {
    e && e.preventDefault();
    setTodos(todos.filter((todo, index) => index !== id));
  }

  function checkEnter(e) {
    if (e.keyCode === 13) {
      addtodo(e);
    }
  }

  return (
    <div className="todo">
      <form>
        <input onKeyDown={checkEnter} type="text" onChange={getvalue} value={value} />
        <button onClick={addtodo}>Add todo</button>

        <ul>
          {todos.map((todo, index) => {
            return (
              <div style={{ margin: 10 }} key={index}>
                <li key={index}>{todo} <button key = {index} onClick={(e)=>deleteTodo(e,index)}>Delete</button></li>
              </div>
            );
          })}
        </ul>
      </form>
    </div>
  );
};

export default Todo;
