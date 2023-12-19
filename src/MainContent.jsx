import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./Form";

function MainContent() {
  const [todos, setTodos] = useState([]);
  console.log(112);
  return (
    <main>
      <div className="mx-auto  w-full max-w-[740px] px-5">
        <Form setTodos={setTodos} todos={todos} />
        <ul className="flex flex-col gap-5 pb-5 pt-16">
          {todos.length > 0 ? (
            todos.map(({ todoName, time }) => {
              const id = uuidv4();

              return (
                <li className="card bg-base-100 w-full shadow-md" key={id}>
                  <div className="card-body">
                    <h2 className="card-title">{todoName}</h2>
                    <button class="btn btn-sm btn-circle btn-ghost absolute right-6 top-4">
                      ✕
                    </button>
                    <p>
                      Published at: <time dateTime={time}>{time}</time>
                    </p>
                  </div>
                </li>
              );
            })
          ) : (
            <h2 className="text-center text-2xl font-bold">No todo</h2>
          )}
        </ul>
      </div>
    </main>
  );
}

export default MainContent;
