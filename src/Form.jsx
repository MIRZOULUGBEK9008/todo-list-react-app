import TodoInput from "./TodoInput";

function Form({ setTodos, todos }) {
  function handleSubmit(e) {
    const obj = {};
    e.preventDefault();
    const data = new FormData(e.target);
    for (const [key, value] of data.entries()) {
      obj[key] = value;
    }
    obj.completed = false;
    obj.time = new Date().toLocaleString();
    setTodos((oldTodos) => [...oldTodos, obj]);
    e.target.reset();
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <TodoInput />
    </form>
  );
}

export default Form;
